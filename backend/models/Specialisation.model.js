const mongoose = require('mongoose');

const specialisationSchema = mongoose.Schema({
    title:{
        type : String,
        required : true
    },
});

const Specialist = mongoose.model("Specialist",specialisationSchema);
module.exports = Specialist;