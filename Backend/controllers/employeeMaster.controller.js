const CustomError = require("../utils/errorHandler.util.js");
const { 
    findAll, 
    findOne, 
    getAllByBranch, 
    updateEmployee, 
    createEmployee, 
    createNewEMPid,
} = require('../repository/employeeMaster.repository');
const moment = require("moment");
const e = require( "express" );


const findAllemployees = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 20;
        if (page < 1 || pageSize < 1) {
            return res.status(400).json({ error: 'Invalid pagination parameters' });
        }
        const { count, rows, leftCount } = await findAll(page, pageSize);

        res.json({
            data: rows,
            pagination: {
                total: count,
                page: page,
                pageSize: pageSize,
                totalPages: Math.ceil(count / pageSize),
                activeEmployees: count-leftCount,
                inActiveEmployees: leftCount
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
                message: " employee found successfully ",
                data: employee
            });
        } else {
            res.status(401).json({
                success: false,
                message: " employee not found check employee id ",
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

        const emp= await findOne(employee.EmpID);

        if (!emp) {

            return res.status(404).json({
                success: false,
                message: " employee not found by this id please Register First ",
            })
            
        }else{

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
const lastEMPid = async (req, res, next) => {
    try {
        const empid = req.query.empid;
        const newEMPid = await createNewEMPid(empid);

        if (newEMPid) {
            res.status(200).json({
                success: true,
                message: " This is Last Employee EMP ID",
                data: newEMPid
            });
        } else {
            res.status(401).json({
                success: false,
                message: " Last Employee EMP ID not found please refresh the curent page ",
            })
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = 
{ 
    findAllemployees, 
    getEmployeeById, 
    getAllEmployeeFromBranch, 
    saveEmployee, 
    saveNewEmployee, 
    lastEMPid,
};
