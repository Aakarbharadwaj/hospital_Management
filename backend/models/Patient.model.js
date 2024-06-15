const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    // problem: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"Specialist"
    // },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    mode: {
        type: String,              
        enum:["consult","admit"]
        // requied: true
    }
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
