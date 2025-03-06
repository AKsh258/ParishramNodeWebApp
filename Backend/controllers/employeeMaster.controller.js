const CustomError = require("../utils/errorHandler.util.js");
const { findAll, findOne, getAllByBranch, updateEmployee, createEmployee, findOneEntitle } = require('../repository/employeeMaster.repository');
const moment = require("moment");


const findAllemployees = async (req, res, next) => {
    console.log("In ControllerF");


//     console.log({ employeeCode: req.user.EMPCode });
//     console.log({ Email: req.user.email });
//     console.log({ Role: req.user.role });
//     console.log({ Name: req.user.name });
//21b044059089244af52c4af389ee2a8e0938e463


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

        // nodeValidator.valdate(employee, {
        //  email : "required|email|minLenght:4"
        //  name : "required|minLength:3"
        // })

        // TODO: Validate input 

        // Existing



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

const getEntitlementByEmpId = async (req, res, next) => {
    try {
        const empid = req.params.id;
        const employeeEntitlement = await findOneEntitle(empid);
        if (employeeEntitlement) {
            res.status(200).json({
                success: true,
                message: " employee Intitlement found successfully ",
                data: employeeEntitlement
            });
        } else {
            res.status(401).json({
                success: false,
                message: " employee Intitlement not found check employee id ",
            })
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const saveEntitlement=async(req, res, next)=>{
    try{

        // Get fileds.

        // check the data is existing or not


        // If existing entries for same employee, udpate data

        // Else , INsert new data.

        // return success or failure response. 

    res.status(200).json("Saving entitlement.")



    }catch(error){
        console.error('Error in saving entitlement :', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = { findAllemployees, getEmployeeById, getAllEmployeeFromBranch, saveEmployee, saveNewEmployee, getEntitlementByEmpId, saveEntitlement };
