const jwt =require("jsonwebtoken")

exports.Authentication=async (req,res,next)=>{

const header=req.headers["authorization"]
if(!header) return res.status(400).send({status:false,msg:"Header is not present"})

jwt.verify(header,"Covid-project",(err,decoded)=>{
    if(decoded){
        req.body.PhoneNumber=decoded.PhoneNumber
        req.body.Password=decoded.Password
        next()
    }
    if(err){
        return res.status(400).send({status:false,msg:`${err.message}`})
    }
})
}