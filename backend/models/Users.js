const mongoose = require('mongoose' )

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
})

const Usermodel = mongoose.model("Users", UserSchema)

module.exports = Usermodel