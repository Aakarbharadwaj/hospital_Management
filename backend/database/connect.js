const mongoose = require('mongoose')
require('dotenv').config();

const URL = process.env.MONGODB_URL  //this should be done after  2nd process

const connectDB = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Data Base connected done');
    }
    catch (error) {
        console.log(`error : ${error}`)
    }
}

module.exports = connectDB;