const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    description:{
        type:String,
        maxlength:40
    },
    // createdAt:{
    //     type:Date,
    //     require:true
    // }
},{timestamp : true});

const Review = mongoose.model("Review",reviewSchema);
module.exports = Review;