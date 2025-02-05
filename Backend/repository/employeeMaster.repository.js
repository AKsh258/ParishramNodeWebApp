const employeeMaster = require("../models/employeeMaster.model.js");
const CustomError = require("../utils/errorHandler.util.js");
employeeMaster.sync({ force: false });

const findAll = async (page,pageSize) => {
    console.log("in employee master repo")
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

module.exports = { findAll };
