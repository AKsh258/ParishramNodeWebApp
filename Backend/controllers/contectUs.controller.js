const contectUsRepository = require("../repository/contectUs.repository");
const CustomError = require("../utils/errorHandler.util.js");

const getAll = async (req, res, next) => {
    try {
        const contects = await contectUsRepository.getAll();
        res.status(200).json({
            success: true,
            message: "Contacts retrieved successfully",
            data: contects
        });
    } catch (error) {
        next(new CustomError(500, "Failed to fetch contact data"));
    }
};

const save = async (req, res, next) => {
    try {
        const contectData = req.body;
        // Simple Validation (Ensure required fields are present)
        if (!contectData.name || !contectData.email || !contectData.phone_number) {
            return next(new CustomError(400, " Missing required name, email and phone are compulsory "));
        }

        const savedContect = await contectUsRepository.save(contectData);
        res.status(201).json({ 
            success: true,
            message: "Your Detail Submitted Succesfully We Will Connect You Soon ",
            data: "thank you to connecting with us "+savedContect.name
        });
    } catch (error) {
        next(new CustomError(500, "Failed to save contact data"));
    }
};

module.exports = { getAll, save };
