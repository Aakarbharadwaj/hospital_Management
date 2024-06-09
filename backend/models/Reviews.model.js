const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    reviewedDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    description:{
        type:String,
        maxlength:40
    },
    createdAt:{
        type:Date,
        require:true
    }

})

const Review = mongoose.model("Review",reviewSchema);
module.exports = Review;