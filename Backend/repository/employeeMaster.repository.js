const { Op, Sequelize } = require('sequelize');
const employeeMaster = require("../models/employeeMaster.model.js");
const Entitlement=require("../models/employeeEntitlement.model.js")
const CustomError = require("../utils/errorHandler.util.js");
const { executeQuery } = require('../utils/dbhelper.util.js');

const moment = require('moment');

const findAll = async (page,pageSize) => {

    const offset = (page - 1) * pageSize;
    try {
        const { count, rows }= await employeeMaster.findAndCountAll({
            limit: pageSize,
            offset: offset,
            order: [['EmpId1', 'ASC']]

          });
            // Count employees who have left
        const leftCount = await employeeMaster.count({
            where: { hasLeft: true }
        });

          return {count,rows,leftCount};
    } catch (error) {
        console.error("Database Error :", error);
        throw new CustomError(500, "Database error occurred during getting all data from employee master.");
    }
};
// const { count, rows } = await YourModel.findAndCountAll({
//     where: {
//       name: {
//         [Sequelize.Op.like]: '%searchTerm%'
//       }
//     },
//     limit: pageSize,
//     offset: offset,
//     order: [['id', 'ASC']]
//   });

const findOne = async (empid) => {
    try {
        return employee= await employeeMaster.findOne({ where: { EmpID: empid } });
    } catch (error) {
        throw new Error('Error in fetching employee by id: ' + error.message);
    }
};
const getAllByBranch = async (branchCode) => {
    try {
        const employees = await employeeMaster.findAll({
            where: {
                branchCode: branchCode,
                [Op.and]: [
                    Sequelize.literal("ISNULL(IsBilled, 0) = 1"),
                    Sequelize.literal("ISNULL(hasLeft, 0) = 1")
                ]
            },
        });
        return employees;
    } catch (error) {
        throw new Error('Error in fetching employee by branch: ' + error.message);
    }
};
const updateEmployee = async (employee) => {
    console.log("Employee to update:", employee); 
    const empid = employee.EmpID;

    try {
        return await employeeMaster.update(employee, { where: { EmpID: empid } });
    } catch (error) {
        console.error("Update failed:", error); 
        throw new Error('Error in updating employee: ' + error.message);
    }
};

const createEmployee = async (employee) => {
    const empid=employee.EmpID;
    try {
        return employee= await employeeMaster.create(employee);
    } catch (error) {
        throw new Error(' ! error in saving employee : ' + error.message);
    }
};
const findOneEntitle = async (empid) => {

    console.log(`Type of empid: ${typeof empid}`);

    if (!empid) throw new Error('Employee ID is required');

    console.log(`Fetching entitlement for empid: ${empid}`);

    const query = `SELECT * FROM EmployeeEntitlement WHERE EmpCode = '${empid}'`;

    const result = await executeQuery(query);

    console.log(`Entitlement length: ${result.length}`);

    return result;

};

const createEntitle = async (entitlements) => {
    try {
        await Promise.all(
            entitlements.map(async (entitle, index) => {
                const { EmpCode, SalHead, FixedAmount } = entitle;

                // Check if the record exists
                const existingEntitlement = await Entitlement.findOne({
                    where: { EmpCode, SalHead }
                });

                if (existingEntitlement) {
                    // Update FixedAmount for existing record
                    await existingEntitlement.update({ FixedAmount });
                } else {
                    //gittng the all value from salaryheadmaster

                    // Insert new record with default values
                    await Entitlement.create({
                        EmpCode,
                        sno: index + 1, // You can adjust logic for sno if needed
                        SalHead,
                        isEditable: true, // Default value
                        FixedAmount,
                        Entitle: FixedAmount, // Default to FixedAmount
                        changedDate: new Date(), // Default to current date
                        Remarks: "Auto-generated entry", // Default remark
                        EntCatg: "Salary", // Default value
                        Type: "Earning", // Default value
                        Deduction: 0, // Default value
                        LedgerCode: "DEFAULT001" // Default value
                    });
                }
            })
        );

        return true;
    } catch (error) {
        console.error('Error in repository:', error);
        return false;
    }
};

// const saveEmployee = async (employee) => {
//     const empid=employee.EmpID;
//     try {
//         if ( employee= await employeeMaster.findOne({ where: { EmpID: empid } })){
//             return employee= await employeeMaster.update(employee,{where: {EmpID: empid}});
//         } else {
//             return employee= await employeeMaster.create(employee);
//         }
//     } catch (error) {
//         throw new Error(' ! error in saving employee : ' + error.message);
//     }
// };

module.exports = { findAll, findOne, getAllByBranch, updateEmployee, createEmployee, findOneEntitle, createEntitle };
