const express = require("express")
const app = express()

let {deleteCompany, allocateUser} = require("../controller/controller")
let {authentication} = require("../middleware")

app.delete("/deleteCompany",authentication, deleteCompany)
app.post("/allocateUser",authentication, allocateUser)

exports.routes = app