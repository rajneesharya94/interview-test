let {model, Schema} = require('mongoose')

let companySchema = new Schema({
    companyName : String,
    city        : String,
    employees   : Array
})

exports.companySchema = model('companySchema', companySchema)