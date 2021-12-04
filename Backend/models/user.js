const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const ImageSchema = new Schema({
    url: String,
    filename: String
});


const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 8
    },
    userImage: ImageSchema,

    destinations: [{
        type: Schema.Types.ObjectId,
        ref: 'Destination'
    }]
})

module.exports = mongoose.model('User', UserSchema)