const employeeMaster = require("../models/employeeMaster.model.js");
const CustomError = require("../utils/errorHandler.util.js");

const findAll = async (page,pageSize) => {

    const offset = (page - 1) * pageSize;
    try {
        const { count, rows }= await employeeMaster.findAndCountAll({
            limit: pageSize,
            offset: offset,
            order: [['EmpId1', 'ASC']]
          });
          return {count,rows};
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
        return employee= await employeeMaster.findAll({ where: { branchCode: branchCode } });
    } catch (error) {
        throw new Error('Error in fetching employee by branch: ' + error.message);
    }
};


module.exports = { findAll, findOne, getAllByBranch };
