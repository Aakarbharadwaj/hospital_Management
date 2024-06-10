const roomModel = require('../../models/rooms.model')

async function createRoom(req,res) {
    try{
        const {roomType,roomNumber,price} = req.body;
        if(!roomType || !roomNumber || !price){
            throw new Error("enter all fields");
        }
        
    }
    catch(error){
        return res.status(400).json({
            message: error.message || "something went wrong",
            code :error.code || 400
        })
    }
}

module.exports = {createRoom};