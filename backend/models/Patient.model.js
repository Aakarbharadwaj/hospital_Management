const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    problem: {
        type: String,
        require: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    reason: {
        type: String,              // cunsult / admit
        requied: true
    }
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
