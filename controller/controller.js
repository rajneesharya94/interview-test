let {userSchema} = require("../model/user")
let {companySchema} = require("../model/company")

exports.allocateUser = async(req, res) => {

    let {userId, companyId} = req.body

    if(!userId || !companyId){
        return res.status(400).send({result:"userId & companyId is required"})
    }
    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
        // Yes, it's a valid ObjectId, proceed with `findById` call.
        return res.status(400).send({result:"userId is not valid"})
      }

    let userData = await userSchema.find({_id:userId})

    if(!userData || Object.keys(userData).length == 0){
        return res.status(404).send({result:"user does not exist"})
    }



    console.log([...userId])

   let responseData = await companySchema.findByIdAndUpdate(companyId,{
        $push:{
            employees:userId
    }})

    if(responseData){
        return res.status(200).send({'result':"successfully updated"})
        
    }
    
    else return res.status(500).send({result:"server error"})
}

exports.deleteCompany = async(req, res) => {

    let {companyId} = req.body

   let responseData =  await companySchema.deleteOne({
        _id:companyId
    })

    if(responseData){
        res.status(200).send({result:"successfully deleted"})
    }
    else  res.status(500).send({result:"server error"})

    
}
