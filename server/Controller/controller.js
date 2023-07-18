const { ObjectId } = require('mongodb');
const User = require("../models/user");

exports.successtoRedirect = (req, res) => {
    let id = req.user.id
    res.redirect(`http://localhost:3000/user/Dashbaord?id=${id}`);
}

exports.fetchToken = async (req, res) => {
    if (req.body.uid.length > 0) {
        const objectId = new ObjectId(req.body.uid);
        const user = await User.findOne({ _id:objectId});
        const { name, accessToken } = user
        res.json({  name, accessToken })
    }
}

exports.login = (res) => {
    res.redirect(`http://localhost:3000/`);
}

exports.logout = (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect(`http://localhost:3000/`);
    });
}

exports.Fetchdata = async (req, res) => {
    const _id = new ObjectId(req.body.id);
    const user = await User.findOne(
        {
            _id
        }
    )
    console.log("User : ",user)
    if(user){
        res.send({Indroduction:user.Indroduction,AssignedMe:user.AssignedMe,Projects:user.Projects,ActivityStream:user.ActivityStream})
    }

}