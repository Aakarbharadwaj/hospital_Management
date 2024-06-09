const UserModel = require('../../models/User.model');
const DoctorModel = require('../../models/Doctors.model');
const PatientModel = require('../../models/Patient.model');
const RoleModel = require('../../models/Role.model');
const SpecialistModel = require('../../models/Specialisation.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.createUser = async (req, res) => {
    try {
        const { name, email, phone, password, address, role, speciality, photo, age } = req.body;

        // Check if user already exists
        const isUserExist = await UserModel.findOne({ email });
        if (isUserExist) {
            throw new Error("User already exists");
        }

        // Validate role, speciality, and address

        const roleExists = await RoleModel.findById(role);
        const specialityExists = await SpecialistModel.findById(speciality);

        if (!roleExists) {
            throw new Error("Role does not exist");
        }
        if (!specialityExists) {
            throw new Error("Specialist does not exist");
        }


        // Create user object
        const user = new UserModel({
            name,
            email,
            phone,
            password,
            address,
            role,
            speciality,
            photo,
            age
        });

        // Save the user to get the ID for doctor/patient
        await user.save();

        // Create doctor or patient details based on role
        if (roleExists.title === 'doctor') { // Assuming 'title' field in Role model
            const doctorDetail = new DoctorModel({
                name,
                specialization: specialityExists.title, // Assuming 'title' field in Specialist model
                userId: user._id
            });

            await doctorDetail.save();
            user.doctor_id = doctorDetail._id;
        } else {
            const patientDetail = new PatientModel({
                name,
                age,
                medicalHistory: "", // Assuming default medical history
                userId: user._id
            });

            await patientDetail.save();
            user.patient_id = patientDetail._id;
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

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error("credential missing")
        }

        const user = await UserModel.findOne({ email });

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

        const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
            expiresIn: "10m"
        })
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

exports.logout = async (req, res) => {
    try {
        // Send an expired token (as an example, though typically handled client-side)
        const expiredToken = jwt.sign({ user: 'expired' }, process.env.JWT_SECRET, { expiresIn: '1ms' });

        // Return JSON response indicating logout success
        return res.status(200).json({
            message: 'Logout successful',
            token: expiredToken
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || 'Something went wrong'
        });
    }
};

// module.exports = { logout };


