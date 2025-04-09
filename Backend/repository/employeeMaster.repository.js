const { Op, Sequelize } = require( 'sequelize' );
const employeeMaster = require( "../models/employeeMaster.model.js" );
const CustomError = require( "../utils/errorHandler.util.js" );
const { executeQuery } = require( '../utils/dbhelper.util.js' );

const moment = require( 'moment' );

const findAll = async ( page, pageSize ) =>
{

    const offset = ( page - 1 ) * pageSize;
    try
    {
        const { count, rows } = await employeeMaster.findAndCountAll( {
            limit: pageSize,
            offset: offset,
            order: [ [ 'EmpId1', 'ASC' ] ]

        } );
        // Count employees who have left
        const leftCount = await employeeMaster.count( {
            where: { hasLeft: true }
        } );

        return { count, rows, leftCount };
    } catch ( error )
    {
        console.error( "Database Error :", error );
        throw new CustomError( 500, "Database error occurred during getting all data from employee master." );
    }
};

const findOne = async ( empid ) =>
{
    try
    {
        return employee = await employeeMaster.findOne( { where: { EmpID: empid } } );
    } catch ( error )
    {
        throw new Error( 'Error in fetching employee by id: ' + error.message );
    }
};
const getAllByBranch = async ( branchCode ) =>
{
    try
    {
        const employees = await employeeMaster.findAll( {
            where: {
                branchCode: branchCode,
                [ Op.and ]: [
                    Sequelize.literal( "ISNULL(IsBilled, 0) = 1" ),
                    Sequelize.literal( "ISNULL(hasLeft, 0) = 1" )
                ]
            },
        } );
        return employees;
    } catch ( error )
    {
        throw new Error( 'Error in fetching employee by branch: ' + error.message );
    }
};
const updateEmployee = async ( employee ) =>
{

    const empid = employee.EmpID;

    try
    {
        return await employeeMaster.update( employee, { where: { EmpID: empid } } );
        
    } catch ( error )
    {
        console.error( "Update failed:", error );
        throw new Error( ' ! error in Upadting employee : ' + error.message );
             
    }
};

const createEmployee = async ( employee ) =>
{
    const empid = employee.EmpID;
    try
    {
        return employee = await employeeMaster.create( employee );
    } catch ( error )
    {
        throw new Error( ' ! error in saving employee : ' + error.message );
    }
};
module.exports =
{
    findAll,
    findOne,
    getAllByBranch, 
    updateEmployee, 
    createEmployee, 
    
};
