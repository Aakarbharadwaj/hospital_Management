const AppointmentModel = require('../../models/Appointment.model');
const UserModel = require('../../models/User.model');

// Create Appointment
const createAppointment = async (req, res) => {
    try {
        const { doctorDetail, patientDetails, patientName, patientAge, cunsultationDate, bookingTime, problemDescription } = req.body;

        // Validate doctor and patient
        const doctor = await UserModel.findById(doctorDetail);
        const patient = await UserModel.findById(patientDetails);
        if (!doctor || !patient) {
            throw new Error("Doctor or Patient not found");
        }

        const appointment = new AppointmentModel({
            doctorDetail,
            patientDetails,
            patientName,
            patientAge,
            cunsultationDate,
            bookingTime,
            problemDescription
        });

        await appointment.save();

        return res.status(201).json({
            appointment,
            message: "Appointment created successfully"
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || "Something went wrong",
            code: error.code || 400
        });
    }
};

// Get Appointment by ID
const getAppointmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await AppointmentModel.findById(id).populate('doctorDetail').populate('patientDetails');

        if (!appointment) {
            throw new Error("Appointment not found");
        }

        return res.status(200).json({
            appointment,
            message: "Appointment retrieved successfully"
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || "Something went wrong",
            code: error.code || 400
        });
    }
};

// Get All Appointments
const getAllAppointments = async (req, res) => {
    try {
        const appointments = await AppointmentModel.find().populate('doctorDetail').populate('patientDetails');

        return res.status(200).json({
            appointments,
            message: "Appointments retrieved successfully"
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || "Something went wrong",
            code: error.code || 400
        });
    }
};

// Update Appointment
const updateAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const { doctorDetail, patientDetails, patientName, patientAge, cunsultationDate, bookingTime, problemDescription } = req.body;

        // Validate doctor and patient
        if (doctorDetail) {
            const doctor = await UserModel.findById(doctorDetail);
            if (!doctor) {
                throw new Error("Doctor not found");
            }
        }

        if (patientDetails) {
            const patient = await UserModel.findById(patientDetails);
            if (!patient) {
                throw new Error("Patient not found");
            }
        }

        const updatedAppointment = await AppointmentModel.findByIdAndUpdate(
            id,
            {
                doctorDetail,
                patientDetails,
                patientName,
                patientAge,
                cunsultationDate,
                bookingTime,
                problemDescription
            },
            { new: true }
        );

        if (!updatedAppointment) {
            throw new Error("Appointment not found");
        }

        return res.status(200).json({
            updatedAppointment,
            message: "Appointment updated successfully"
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || "Something went wrong",
            code: error.code || 400
        });
    }
};

// Delete Appointment
const deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedAppointment = await AppointmentModel.findByIdAndDelete(id);

        if (!deletedAppointment) {
            throw new Error("Appointment not found");
        }

        return res.status(200).json({
            message: "Appointment deleted successfully"
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || "Something went wrong",
            code: error.code || 400
        });
    }
};

module.exports = {
    createAppointment,
    getAppointmentById,
    getAllAppointments,
    updateAppointment,
    deleteAppointment
};
