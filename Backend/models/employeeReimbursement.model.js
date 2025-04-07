const { DataTypes } = require('sequelize');
const { element } = require('../config/db'); 

const EmployeeReimbursement = element.define('EmployeeReimbursement', {
    EmpCode: {
        type: DataTypes.STRING(25), 
        allowNull: false
    },
    ReimbursementType: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    IsEntitlement: {
        type: DataTypes.BOOLEAN, 
        allowNull: false,
        defaultValue: false
    },
    EntitlementAmount: {
        type: DataTypes.DECIMAL(18, 2), 
        allowNull: false
    },
    SNo: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    id: {
        type: DataTypes.DECIMAL(18, 0), 
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    tableName: 'EmployeeReimbursement', 
    timestamps: false 
});

module.exports = EmployeeReimbursement;
