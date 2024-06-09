const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    roomType:{
        type:String,
        required:true
    },
    roomNo:{
        type:String,
        required:true
    },
    booked:{
        type:Boolean,
        required:true
    },
    bookingtime:{
        type:Date,
        required:true
    },
    roomNumber:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const Room = mongoose.model('Room',roomSchema);
module.exports = Room;