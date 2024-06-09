const validator = require('validator');

exports.validateRole = (req,res,next)=>{
    try{
        //req and get data from client
        const {email,role} = req.body;

        //validate
        if(!email || !validator.isEmail(email)){
            throw new Error("no user with this email")
        }
        if(!role){
            throw new Error("role is not mentioned")
        }
        next();
    }
    catch(error){
        return res.status(400).json({
            message: error.message || 'Something went wrong',
            code: error.code || 400
        })
    }
}