const mongoose = require('mongoose');
// const User = require('./user.model');

const appointmentSchema = mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    bookingtype:{
        type:String,
        required:true
    },
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room"
    },
    problem:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Specialist"
    },
    cunsultationDate: {
        type: Date,
        required: true
    },
    bookingTime: {
        type: Date,
        required: true
    },
    problemDescription: {
        type: String,
        required:true
    },
    // TotalFee: {
    //     type: Number,                //can we use ref instead of direct entry
    //     required: true
    // },
    // bookingtype
    // intm ,outtime
    // roomAloted:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Room",
    //     // required:true
    // }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment