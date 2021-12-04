const User = require('../models/user');
const CryptoJS = require('crypto-js');
const jwt = require("jsonwebtoken");

const registerUser = async(req, res) => {
    const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY
        ).toString(),
    });

    if (req.file) {
        newUser.userImage = {
            url: req.file.path,
            filename: req.file.filename
        }
    }

    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ msg: "some error occured while creating account", err });
        // console.log(err);
    }
}


const loginUser = async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(401).json("Wrong password or username!");

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password &&
            res.status(401).json("Wrong password or username");

        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY, { expiresIn: "90d" }
        );

        const { password, ...info } = user._doc;
        res.status(200).json({...info, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
}

const logoutUser = (req, res) => {
    res.send('user logged out')
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
}