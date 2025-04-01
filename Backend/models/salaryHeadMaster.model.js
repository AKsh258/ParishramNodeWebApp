const { DataTypes } = require("sequelize");
const { element } = require("../config/db"); // Adjust based on your setup

const SalaryHeadMaster = element.define(
  "SalaryHeadMaster",
  {
    SalaryID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Code: {
      type: DataTypes.STRING(25),
      allowNull: true, 
    },
    Head: {
      type: DataTypes.STRING(500),
      allowNull: true, 
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    EarningDeduction: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    CompanyCode: {
      type: DataTypes.STRING(255),
      allowNull: true, 
    },
    Amount: {
      type: DataTypes.STRING(30),
      allowNull: false, 
    },
    Grade: {
      type: DataTypes.STRING(5),
      allowNull: false, 
    },
  },
  {
    tableName: "SalaryHeadMaster2",
    timestamps: false,
  }
);

module.exports = SalaryHeadMaster;
