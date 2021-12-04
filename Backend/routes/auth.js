const express = require('express')
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/auth')
const multer = require('multer');
const { storage } = require('../cloudinary/index')
const upload = multer({ storage });

router.route('/register')
    .post(upload.single('image'), registerUser);


router.route('/login').post(loginUser);


router.route('/logout').post(logoutUser);

module.exports = router