const User = require('../models/user');


const registerUser = async(req, res) => {
    res.send('register a new user')
}


const loginUser = async(req, res) => {
    res.send('login to account')
}

const logoutUser = (req, res) => {
    res.send('user logged out')
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
}