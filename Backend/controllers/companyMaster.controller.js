const { findAll } = require("../repository/companyMaster.repository");
const CustomError = require("../utils/errorHandler.util.js");

const findAllCompanies = async (req, res, next) => {
    try {
        const companies = await findAll();
        res.status(200).json({
            success: true,
            message: " All companies retrieved successfully ",
            data: companies
        });
    } catch (error) {
        next(new CustomError(500, "Failed to fetch company data"));
    }
};



module.exports={ findAllCompanies };