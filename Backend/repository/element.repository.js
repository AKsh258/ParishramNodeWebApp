const userNameMaster = require("../models/userNameMaster.js");
const CustomError = require("../utils/errorHandler.util.js");
 

const login = async (email, password) => {
    try {
        const user = await userNameMaster.findOne({ where: { email, password } });
        return user;
    } catch (error) {
        console.error("Database Error in Login:", error);
        throw new CustomError(500, "Database error occurred during login.");
    }
};

module.exports = { login };
