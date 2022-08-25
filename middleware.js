exports.authentication = (req, res, next) => {

    if(!req || !req.body ){
        return res.status(400).send({result:"Bad request"})
    }
    else next()
    

}
