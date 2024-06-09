const mongoose = require('mongoose');
// const User = require('./user.model');

const appointmentSchema = mongoose.Schema({
    doctorDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    patientDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    patientAge: {
        type: Number,
        required: true
    },
    cunsultationTime: {
        type: Date,
        required: true
    },
    cunsultationDate: {
        type: Date,
        required: true
    },
    bookingTime: {
        type: Date,
        required: true
    },
    TotalFee: {
        type: Number,                //can we use ref instead of direct entry
        required: true
    },
    problemDescription: {
        type: String,
        required:true
    },
    roomAloted:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room",
        required:true
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment