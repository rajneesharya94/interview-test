let { Schema, model} = require("mongoose")

let userSchema = new Schema({
    name : String,
    email : String,
    phone : Number
})

exports.userSchema = model("userSchema", userSchema)