// const { default: mongoose } = require('mongoose');
const RoleModel = require('../../models/Role.model');

async function createRole (req, res) {
    try {
        const {title} = req.body;
        if(!title){
            throw new Error("Title is not mentioned")
        }
        const roleExists = await RoleModel.findOne({ title:title });

        if (roleExists) {
            throw new Error("Role already exists");
        }

        const newRole = new RoleModel({ title }); // Ensure the field matches your schema
        await newRole.save();

        return res.status(200).json({
            newRole,
            message: "Role added successfully",
        });
    }  catch (error) {
        console.error('Error creating role:', error); // Log the error for debugging
        return res.status(400).json({
            message: error.message || "Something went wrong",
            code: error.code || 500
        });
    }
};

async function getRoles (req, res) {
    try {
        const roles = await RoleModel.find();
        return res.status(200).json({
            roles,
            message: "Roles fetched successfully",
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || "Something went wrong",
            code: error.code
        });
    }
};

async function deleteRole (req,res){
    try{
        const {title} = req.body;
        if(!title){
            throw new Error("no such role found");
            }
        await RoleModel.findOneAndDelete({title:title})

        return res.status(200).json({
            message: "Role deleted successfully",
        });
    }
    catch (error) {
        return res.status(400).json({
            message: error.message || 'Something went wrong',
            code: error.code || 400
        });
    }
}
module.exports = {createRole,getRoles,deleteRole}