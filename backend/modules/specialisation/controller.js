const mongoose = require('mongoose');
const specialisationModel = require('../../models/Specialisation.model')
async function createSpecialisation(req, res) {
    try {
        const { title } = req.body;
        if (!title) {
            throw new Error("mention sepcialisation field")
        }
        const specialisationExist = await specialisationModel.findOne({ title: title })
        if (specialisationExist) {
            throw new Error("specialisationExist already exist")
        }

        const newSpecialisation = new specialisationModel({ title });
        await newSpecialisation.save()

        return res.status(200).json({
            newRole,
            message: "specialisation added successfully",
        });
    } catch (error) {
        console.error('Error in creating specialisation:', error); // Log the error for debugging
        return res.status(400).json({
            message: error.message || "Something went wrong",
            code: error.code || 500
        });
    }
}


async function getAllSpecialisation(req, res) {
    try {
        const specialisation = await specialisationModel.find();
        return res.status(200).json({
            specialisation,
            message: "specialisation list fetched successfully",
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || "Something went wrong",
            code: error.code
        });
    }
};

async function deleteSpecialisation(req, res) {
    try {
        const { title } = req.body;
        if (!title) {
            throw new Error("no such specialisation found");
        }
        await specialisationModel.findOneAndDelete({ title: title })

        return res.status(200).json({
            message: "specialisation deleted successfully",
        });
    }
    catch (error) {
        return res.status(400).json({
            message: error.message || 'Something went wrong',
            code: error.code || 400
        });
    }
}

module.exports = { createSpecialisation, getAllSpecialisation, deleteSpecialisation }