const CustomError = require("../utils/errorHandler.util.js");
const { findAll, findOne, getAllByBranch, updateEmployee, createEmployee } = require('../repository/employeeMaster.repository');
const moment = require("moment");


const findAllemployees = async (req, res, next) => {
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

const getEmployeeById = async (req, res, next) => {
    try {
        const empid = req.params.id;
        const employee = await findOne(empid);
        if (employee) {
            res.status(200).json({
                success: true,
                message: " employee found succesfull successfully ",
                data: employee
            });
        } else {
            res.status(401).json({
                success: false,
                message: " employee not found ",
            })
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getAllEmployeeFromBranch = async (req, res, next) => {
    try {
        const branchCode = req.params.branchCode;
        const employees = await getAllByBranch(branchCode);
        if (employees) {
            res.status(200).json({
                success: true,
                message: " All employee found successfully of " + branchCode + " branch",
                data: employees
            });
        } else {
            res.status(401).json({
                success: false,
                message: " employee not found by branch",
            })
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const saveEmployee = async (req, res, next) => {
    try {
        const employee = req.body;

        const employeedetail = await updateEmployee(employee);
        if (employeedetail > 0) {
            res.status(200).json({
                success: true,
                message: " Employee Detail Updated Succesfully ",
            });
        } else {
            res.status(401).json({
                success: false,
                message: " employee not saved !  ",
            })
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error ' });
    }
}
const saveNewEmployee = async (req, res, next) => {
    try {
        const employee = req.body;

        const employeedetail = await createEmployee(employee);

        if (employeedetail) {
            res.status(200).json({
                success: true,
                message: " Employee Detail Saved Succesfully ",
                Data: employeedetail
            });
        } else {
            res.status(401).json({
                success: false,
                message: " Something went wrong employee not saved !  ",
            })
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error ' });
    }
}

module.exports = { findAllemployees, getEmployeeById, getAllEmployeeFromBranch, saveEmployee, saveNewEmployee };
