const validator = require('validator');

exports.validateSignup=(req, res, next)=> {
    try {
        const { name, email, phone, password, age, address } = req.body;

        if (!name || !validator.isLength(name, { min: 1 })) {
            throw new Error("Name is required");
        }
        if (!validator.isEmail(email)) {
            throw new Error("Enter a valid Email");
        }
        if (!phone) {
            throw new Error("Enter a valid phone number");
        }
        if (!password || !validator.isLength(password, { min: 6 })) {
            throw new Error("Enter a valid password (minimum 6 characters)");
        }
        if (!age) {
            throw new Error("Enter a proper date of birth in YYYY-MM-DD format");
        }
        if (!address) {
            throw new Error("Enter address");
        }

        return next();
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: error.message || 'Something went wrong',
            code: error.code || 400
        });
    }
}

// module.exports = validateSignup;


exports.validateLogin=(req, res, next)=> {
    try {
        const { email,password } = req.body;

        if (!password) {
            throw new Error("Name is required");
        }
        if (!validator.isEmail(email)) {
            throw new Error("Enter a valid Email");
        }
        return next();

    } catch (error) {
        return res.status(400).json({
            message: error.message || 'Something went wrong',
            code: error.code || 400
        });
    }
}