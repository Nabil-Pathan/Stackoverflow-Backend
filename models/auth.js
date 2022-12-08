const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    about: {type: String },
    tags: {type: [String] },
    joinedOn: {type: Date, default: Date.now },
})

 const User = mongoose.model("User", userSchema)

 module.exports = User