const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone:{
        type:Number,
        required:true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    age: {
        type: Number,
        default: 0
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        // required: true
    },
    // dob:{
    //     type : Date,
    //     required :true
    // },
    photo:{
        type : String,
    },
    doctorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        // required: true
    },
    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        // required: true
    },
    speciality:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Specialist",
        // required: true 
    }
    ,
    address:{
        street: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        state: {
            type: String,
            required: true,
            trim: true
        },
        zip: {
            type: String,
            required: true,
            trim: true
        },
        country: {
            type: String,
            required: true,
            trim: true
        }
    }

},{timestamp : true});

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        } catch (error) {
            return next(error);
        }
    }
    next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
