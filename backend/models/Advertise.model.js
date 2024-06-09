const mongoose = require('mongoose');

const advertiseSchema = mongoose.Schema({
    title: {
        type: String,
    },
    file: {
        type: String
    },
    fileType: {
        type : String,
        enum :['image','video']
    },
    postedAt: {
        type: Date,
        required: true
    },
    duration: {
        type: Date,
        required: true
    }
})

const Ad = mongoose.model("Add",advertiseSchema);

module.exports = Ad