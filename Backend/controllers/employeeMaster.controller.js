// const CustomError = require("../utils/errorHandler.util.js");
// const { findAll } = require('../repository/employeeMaster.repository');

// const findAllemployees = async (req, res, next) => {
//     console.log("in employee master controller")
//     try {
//         const employees = await findAll();

//         if (!employees) {
//             return next(new CustomError(401, "there is No data to show"));
//         }
//         res.status(200).json({
//             success: true,
//             message: "all records found ",
//             data: employees
//         });

//     } catch (error) {
//         console.error("faching Error:", error); 
//         next(new CustomError(500, error.message || "An error occurred during fatching data. Please try again later."));
//     }
// };

// module.exports = { findAllemployees };





const CustomError = require("../utils/errorHandler.util.js");
const { findAll } = require('../repository/employeeMaster.repository');

const findAllemployees = async (req, res, next) => {
    console.log("in employee master controller")
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 20;
        if (page < 1 || pageSize < 1) {
            return res.status(400).json({ error: 'Invalid pagination parameters' });
        }
        const { count, rows } = await findAll(page, pageSize);

        res.json({
            data: rows,
            pagination: {
                total: count,
                page: page,
                pageSize: pageSize,
                totalPages: Math.ceil(count / pageSize)
            }
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { findAllemployees };
