const authenticateUser = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401).json({ message: 'Authentication token missing' });
    const response = await fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    }).catch((response) => { console.log("Catch error : ", response.message) })
    if (response.status !== 200) {
        return res.status(response.status).json({ message: 'Failed to authenticate user' });
    }
    if (response.status === 200) {
        next()
    }
}
module.exports = authenticateUser;
