var express = require('express');
var passport = require('passport');
var gitRouter = express.Router();

var GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/user');

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    console.log("Deserial : ", user)
    cb(null, user);
  });
});

passport.use(new GitHubStrategy({
  clientID: process.env['GITHUB_CLIENT_ID'],
  clientSecret: process.env['GITHUB_CLIENT_SECRET'],
  callbackURL: 'http://127.0.0.1:3002/auth/github/callback',
  scope: ['profile']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await User.findOne({ githubId: profile.id });
    if (!user) {
      const newUser = new User({
        name: profile.username,
        githubId: profile.id,
        accessToken: accessToken,
        Introduction: {
          title: "Welcome to Jira",
          image: "",
          body: "Not sure where to start? Check out the Jira 101 guide and Atlassian training course."
        },
        AssignedMe: {
          body: "You currently have no issues assigned to you. Enjoy your day!"
        },
        Projects : {
          projectname: profile.username,
          leadname:profile.username,
        },
        ActivityStream:{
          companyname:"people app"
        }
      }
      );
await newUser.save();
return done(null, newUser);
    } else {
  const existingUser = await User.findOne({ githubId: user.githubId });
  if (!user) {
    return done(null, false);
  }
  return done(null, existingUser);
}
  } catch (err) {
  return done(err);
}
}));

gitRouter.get('/github', passport.authenticate('github'));

gitRouter.get('/github/callback', passport.authenticate('github', {
  successRedirect: '/success',
  failureRedirect: '/login'
}));

module.exports = gitRouter;
