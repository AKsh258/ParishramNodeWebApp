const CustomError = require("../utils/errorHandler.util.js");
const { 
    findAll, 
    findOne, 
    getAllByBranch, 
    updateEmployee, 
    createEmployee, 
    findOneEntitle, 
    createEntitle,
    getSalaryHeaddb,
    updateSalaryHeadGradesAmountsdb,
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

const getEntitlementByEmpId = async (req, res) => {
    try {
        const empid = req.params.empid;

        if (!empid) {
            
            return res.status(400).json({ success: false, message: 'Employee ID is required' });
        }

        const entitlement = await findOneEntitle(empid);

        if (entitlement.length>0) {
            return res.status(200).json({
                success: true,
                message: 'Employee entitlement found successfully',
                data: entitlement
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Employee entitlement not found use a diffrent employee id '
            });
        }
    } catch (error) {
        console.error('Error fetching entitlement:', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const saveEntitlement = async (req, res) => {
    try {
        const entitlements = req.body;

        if (!Array.isArray(entitlements) || entitlements.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Invalid or empty data',
            });
        }

        const result = await  createEntitle (entitlements);

        if (result) {
            res.status(200).json({
                success: true,
                message: 'Employee Entitlement Details Saved Successfully',
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'Failed to save entitlement details',
            });
        }
    } catch (error) {
        console.error('Error in saving entitlement:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};
const getSalaryHead=async(req,res,next)=>{
    try {
        const salHead = await getSalaryHeaddb();
        if (salHead.length>0) {
            const headData = salHead.map(head => ({
                SalHeadCode: head.Code,
                Head: head.Head,
                Description: head.Description
            }));
            res.status(200).json({
                success: true,
                message: "Salary Head Found Succesfully ",
                data: headData
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Salary Head master invoke an error try after sometime",
            })
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
 
const updateSalaryHeadGradesAmounts= async (req, res, next)=>{
    const { code, grade, amount } = req.body;
    try{
        const affectedRows= await updateSalaryHeadGradesAmountsdb(code, grade, amount);
        if(affectedRows>0){
            res.status(200).json({
                success : true,
                Message : "grade data insirted succesfully ",
            });
        }else{
                res.status(400).json({
                    success : false,
                    message : " Grade Data Not Save please input a valid data "
                });
            };
    }catch(error){
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
    getEntitlementByEmpId, 
    saveEntitlement,
    getSalaryHead,
    updateSalaryHeadGradesAmounts
};
