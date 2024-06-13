const UserModel = require('../../models/User.model');
const DoctorModel = require('../../models/Doctors.model');
const PatientModel = require('../../models/Patient.model');
const RoleModel = require('../../models/Role.model');
// const SpecialistModel = require('../../models/Specialisation.model');
const { createToken } = require('../../utiles/auth')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken');
require('dotenv').config();

const createUser = async (req, res) => {
    try {
        const { name, email, phone, password, address, role, age, consultingFee, startTime, endTime, availableDays, } = req.body;

        // Check if user already exists
        const isUserExist = await UserModel.findOne({ email });
        if (isUserExist) {
            throw new Error("User already exists");
        }

        // Validate role, speciality, and address

        const roleExists = await RoleModel.findById(role);
        // const specialityExists = await SpecialistModel.findById(speciality);

        if (!roleExists) {
            throw new Error("Role does not exist");
        }
        // if (!specialityExists) {
        //     throw new Error("Specialist does not exist");
        // }

        // Create user object
        const user = new UserModel({
            name,
            email,
            phone,
            password,
            address,
            role: roleExists._id,
            // speciality,
            // photo,
            age
        });

        // Save the user to get the ID for doctor/patient
        await user.save();

        // Create doctor or patient details based on role
        if (roleExists.title === 'doctor') { // Assuming 'title' field in Role model
            const doctorDetail = new DoctorModel({
                consultingFee,
                startTime,
                endTime,
                availableDays,
                // userId: user._id
            });

            await doctorDetail.save();
            user.doctorId = doctorDetail._id;
        } else {
            const patientDetail = new PatientModel({
                name,
                age,
                medicalHistory: "", // Assuming default medical history
                // userId: user._id
            });

            await patientDetail.save();
            user.patientId = patientDetail._id;
        }

        // Save the user again with the doctor/patient ID
        await user.save();

        return res.status(201).json({
            user,
            message: "User created successfully"
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || 'Something went wrong',
            code: error.code || 400
        });
    }
}

// module.exports = {createUser};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error("credential missing")
        }
        // console.log(email).populate('doctorId','PatientID')
        const user = await UserModel.findOne({ email });
        // console.log(user).populate('doctorId','PatientID')

        if (!user) {
            throw new Error("user not found")
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("incorrect password");
        }

        //verfiy pwd and generate jwt
        const payLoad = {
            email: user.email,
            userId: user.id,
            role: user.role
        };
        const token = createToken(payLoad);

        return res.status(200).json({
            message: "token sent successfully",
            token,
            user
        })

    }
    catch (error) {
        return res.status(400).json({
            message: error.message || 'Something went wrong',
            code: error.code || 400
        });
    }

}

// exports.logout = async (req, res) => {
//     try {
//         // Send an expired token (as an example, though typically handled client-side)
//         const expiredToken = jwt.sign({ user: 'expired' }, process.env.JWT_SECRET, { expiresIn: '1ms' });

//         // Return JSON response indicating logout success
//         return res.status(200).json({
//             message: 'Logout successful',
//             token: expiredToken
//         });
//     } catch (error) {
//         return res.status(400).json({
//             message: error.message || 'Something went wrong'
//         });
//     }
// };

module.exports = { createUser, login };


