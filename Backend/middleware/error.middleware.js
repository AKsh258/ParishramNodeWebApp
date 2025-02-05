const CustomError = require("../utils/errorHandler.util");

const errorHandler = (err, req, res, next) => {
    console.error(err);

    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ statusCode: err.statusCode, error: err.message });
    }

    res.status(500).json({ statusCode: 500, error: "Internal Server Error" });
};

module.exports = errorHandler;
