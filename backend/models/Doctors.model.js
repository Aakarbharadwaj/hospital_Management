const mongoose = require('mongoose');

const doctorDetailsSchema = mongoose.Schema({
    consultingFee: {
        type: Number,
        required: true,
    },
    startTime: {
        type: Date,
        // required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    availableDays: [
        {
            dayNumber: {
                type: Number,
                // required: true
            },
            slots :[{
                startTime: {
                    type: Date,
                    // required: true
                },
                endTime: {
                    type: Date,
                    // required: true
                }
            }]
        }
    ]
  
})


const Doctor = mongoose.model("Doctor", doctorDetailsSchema);
module.exports = Doctor;
