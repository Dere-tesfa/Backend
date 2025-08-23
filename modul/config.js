const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255,


    },
    email: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255,
        // unique: true,//the email is insert one
    },

    password: String

})
const user = mongoose.model('user', userSchema);
const creatUser = new user({
    name: 'desa',
    email: '@sss,xdrm',
    password: 'tttr'
})
const userSave = creatUser.save();
console.log(userSave);
module.exports = user;
