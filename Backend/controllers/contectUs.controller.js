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
        if (!contectData.name || !contectData.email || !contectData.phoneNumber) {
            return next(new CustomError(400, " Missing required name, email and phone are compulsory "));
        }

        const savedContect = await contectUsRepository.save(contectData);
        res.json({
            success: true,
            message: "Contacts Inserted  successfully!!",
            data: savedContect,
          });
    } catch (error) {
        next(new CustomError(500, "Failed to save contact data"));
    }
};

module.exports = { getAll, save };
