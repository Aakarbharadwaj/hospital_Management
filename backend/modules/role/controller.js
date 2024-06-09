const RoleModel = require('../../models/Role.model');

exports.createRole = async (req, res) => {
    try {
        console.log(req)
        const { role } = req.body;

        const roleExists = await RoleModel.findOne({ title: role });

        if (roleExists) {
            throw new Error("Role already exists");
        }

        const newRole = new RoleModel({ title: role }); // Ensure the field matches your schema
        await newRole.save();

        return res.status(200).json({
            newRole,
            message: "Role added successfully",
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || "Something went wrong",
            code: error.code
        });
    }
};

exports.getRole = async (req, res) => {
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
