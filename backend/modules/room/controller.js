const roomModel = require('../../models/rooms.model')

async function createRoom(req, res) {
    try {
        const { roomType, roomNumber, price } = req.body;
        if (!roomType || !roomNumber || !price) {
            throw new Error("enter all fields");
        }

        const roomExist = await roomModel.findOne({ roomNumber: roomNumber })
        if (roomExist) {
            throw new Error('room number alreaddy exists')
        }

        const newRoom = new roomModel({
            roomType, roomNumber, price
        })
        await newRoom.save();

        return res.status(201).json({
            newRoom,
            message: "Room added successfully"
        })
    }
    catch (error) {
        return res.status(400).json({
            message: error.message || "something went wrong",
            code: error.code || 400
        })
    }
}

async function getAllRoom(req,res){
    try{
        const room = await roomModel.find();            //use filter
        if(!room){
            throw new Error("no room found");
        }
        return res.status(200).json({
            room,
            message:"rooms details sent successfully"
        })
    }
    catch (error) {
        return res.status(400).json({
            message: error.message || "something went wrong",
            code: error.code || 400
        })
    }
}

module.exports = { createRoom,getAllRoom };