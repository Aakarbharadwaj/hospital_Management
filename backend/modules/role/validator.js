const validator = require('validator');

const validateRole = (req,res,next)=>{
    try{
        //req and get data from client
        const {title} = req.body;

        //validate
        if(!title){
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

module.exports = {validateRole}