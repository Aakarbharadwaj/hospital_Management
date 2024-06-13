const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    roomType:{
        type:String,
        required:true
    },
    roomNumber:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
    // booked:{
    //     type:Boolean,
    //     required:true,
    //     default:false
    // },
    // bookingtime:{
    //     type:Date,
    //     required:true
    // },
})

const Room = mongoose.model('Room',roomSchema);
module.exports = Room;