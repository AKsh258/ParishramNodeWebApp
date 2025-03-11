const { DataTypes } = require('sequelize');
const { element } = require('../config/db'); 

const EmployeeSalary = element.define('EmployeeEntitle', {
    EmpCode: {
        type: DataTypes.STRING(25),
        primaryKey: true,
        allowNull: false
    },
    sno: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    SalHead: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    isEditable: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    FixedAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    Entitle: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    changedDate: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Remarks: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    EntCatg: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Deduction: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    LedgerCode: {
        type: DataTypes.STRING(25),
        allowNull: true
    }
}, {
    tableName: 'EmployeeEntitlement',
    timestamps: false
});

module.exports = EmployeeSalary;
