const CustomError = require("../utils/errorHandler.util.js");
const { login } = require('../repository/element.repository');
const { createJWTToken } = require("../utils/jwtWebToken.util.js");

const loginAdministrator = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await login(email, password);
        if (!user) {
            return next(new CustomError(401, "Invalid email or password"));
        }
        // if user is login success, Create JWT token
        const token = await createJWTToken({
            EMPCode: user.EmployeeCode,
            email: user.email,
            name: user.UserName,
            role: user.role
        });

        if (!token) {
            return next(new CustomError(401, "Unable in login token not created."));
        }

        const userData = {
            EMPCode: user.EmployeeCode,
            email: user.email,
            name: user.UserName,
            role: user.role,
            token: token
        };

        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            data: userData
        });

    } catch (error) {
        console.error("Login Error:", error);
        next(new CustomError(500, error.message || "An error occurred during login. Please try again later."));
    }
};

module.exports = { loginAdministrator };
