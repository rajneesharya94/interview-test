const express   = require("express")
let app         = express()
let {connect}   = require("mongoose")
let {routes }  = require("./routes/routes")
let dotenv      = require("dotenv")
let PORT        = process.env.PORT ? process.env.PORT : 3000
dotenv.config()

app.use(express.json());

app.use(routes)

connect(process.env.MONGO_URI).then(res=>{
    console.log("db connected successfully")
}).catch(err=>{
    console.log(err)
})

app.listen(process.env.PORT, ()=>{
    console.log(`server connected to ${PORT}`)
})

