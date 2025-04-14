const { DataTypes } = require( 'sequelize' );
const { element } = require( '../config/db' );

const EmployeeGlDetails = element.define( 'EmployeeGlDetails', {
    EmpCode: {
        type: DataTypes.STRING( 25 ),
        allowNull: false,
        primaryKey: true
    },
    GeneralCategory: {
        type: DataTypes.STRING( 50 ),
        allowNull: true,
    },
    GLCode: {
        type: DataTypes.STRING( 50 )
    },
    SalHead: {
        type: DataTypes.STRING( 50 ),
        allowNull: false,
        primaryKey: true
    },
    PercentageAmount: {
        type: DataTypes.DECIMAL( 18, 2 )
    },
}, {
    tableName: 'EmployeeGlDetails',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: [ 'EmpCode', 'SalHead' ]
        }
    ]
} );

module.exports = EmployeeGlDetails;