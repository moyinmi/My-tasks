const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        min: 3,
        max:30,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password :{
        type:String,
        required: true,
        min:8, 

    }
});

module.exports = mongoose.model("User", UserSchema)