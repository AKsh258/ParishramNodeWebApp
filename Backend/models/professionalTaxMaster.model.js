const { DataTypes } = require("sequelize");
const { element } = require('../config/db');

const ProfessionalTaxMaster = element.define('ProfessionalTaxMaster', {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      Location: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      State: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      EmpShare: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      ERShare: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      Deduction: {
        type: DataTypes.STRING(200), 
        allowNull: true
      }
    }, {
      tableName: 'ProfessionalTaxMaster',
      timestamps: false
    });

module.exports = ProfessionalTaxMaster; 
  
  