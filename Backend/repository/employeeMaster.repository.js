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
const RMofBranch = async ( branchCode ) =>
{
    try
    {
        const rms = await employeeMaster.findAll( {
            where: {
                branchCode: branchCode,
                [ Op.and ]: [
                    Sequelize.literal( "ISNULL(IsBilled, 0) = 0" ),
                    Sequelize.literal( "ISNULL(hasLeft, 0) = 0" )
                ]
            },
            order: [ [ 'EmpId1', 'ASC' ] ]
        } );
        return rms;
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

const createNewEMPid = async () =>
{
    try
    {
        const latestEmp = await employeeMaster.findOne( {
            attributes: [ 'EmpId' ],
            where: {
                EmpId: {
                    [ Op.like ]: 'EMP%'
                }
            },
            order: [ [ 'EmpId', 'DESC' ] ],
            raw: true
        } );

        let newEmpId = 'EMP1000'; 

        if ( latestEmp && latestEmp.EmpId )
        {

            const numberPart = parseInt( latestEmp.EmpId.replace( /\D/g, '' ) ); 
            const incremented = numberPart + 1;
            newEmpId = 'EMP' + incremented.toString().padStart( 4, '0' ); 

        }
    
        return newEmpId;

    } catch ( error )
    {
        console.error( "Error in getiing Last employee EMP ID:", error );
        throw new CustomError( 500, "Database error occurred during getiing Last employee EMP ID." );
    }
};

const createNewHLid = async () =>
{
    try
    {
        const result = await executeQuery( "SELECT CONCAT(prefix, LastValue) AS NewEmployeeCode FROM sequencemaster WHERE head = 'Employee';" );

        return result ? result[ 0 ].NewEmployeeCode : null;

    } catch ( error )
    {
        console.error( "Error in getiing Last employee HL ID:", error );
        throw new CustomError( 500, "Database error occurred during getiing Last employee HL ID." );
    }
}

const validateEmployeeDetails = async ( EmpID, Email, MobileNo, AdharNo, PanNo ) =>
{
    try
    {
        const existing = await employeeMaster.findOne( {
            where: {
                [ Op.or ]: [
                    { EmpID },
                    //  { Email },
                    //   { MobileNo },
                    // { AdharNo },
                    // { PanNo }
                ]
            }
        } );

        if ( !existing ) return null;

        const data = existing.get(); // safe access
        const conflicts = [];

        if ( data.EmpID === EmpID ) conflicts.push( "EmpID" );
        //   if (data.Email?.toLowerCase() === Email?.toLowerCase()) conflicts.push("Email");
        //  if (data.MobileNo === MobileNo) conflicts.push("MobileNo");
        //    if (data.AdharNo === AdharNo) conflicts.push("AdharNo");
        //   if (data.PanNo?.toUpperCase() === PanNo?.toUpperCase()) conflicts.push("PanNo");

        return {
            message: `Conflict: ${ conflicts.join( ", " ) } already in use.`,
            conflictFields: conflicts,
            existingEmployee: {
                EmpID: data.EmpID,
                //     Email: data.Email,
                //   MobileNo: data.MobileNo,
                //   AdharNo: data.AdharNo,
                //   PanNo: data.PanNo
            }
        };

    } catch ( error )
    {
        console.error( "Service Error (validateEmployeeDetails):", error );
        throw new Error( "Database error during employee validation." );
    }
};

const getAllDepartment = async () =>
{
    try
    {
        return await executeQuery( "SELECT Description FROM DepartmentMaster" );

    } catch ( error )
    {
        console.error( "Error in fetching departments:", error );
        throw new CustomError( 500, "Database error occurred during getting all departments." );
    }
};       

const getAllDesignation = async () =>
{
    try
    {
        return await executeQuery( "SELECT Description FROM DesignationMaster" );
        
    }   catch ( error )
    {
        console.error( "Error in fetching designations:", error );
        throw new CustomError( 500, "Database error occurred during getting all designations." );
    }                                           
}
const getAllEduQualificationOptions = async () =>
{
    try
    {
        return await employeeMaster.findAll({
            attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('EduQualification')), 'EduQualification']],
            raw: true
        });
    }   catch ( error )
    {
        console.error( "Error in fetching designations:", error );
        throw new CustomError( 500, "Database error occurred during getting all designations." );
    }                                           
}           
const getAllProfQualificationOptions = async () =>
{
    try
    {
        return await employeeMaster.findAll({
            attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('ProfQualification')), 'ProfQualification']],
            raw: true
        });
    }   catch ( error )
    {
        console.error( "Error in fetching designations:", error );
        throw new CustomError( 500, "Database error occurred during getting all designations." );
    }                                           
}   

module.exports =
{
    findAll,
    findOne,
    getAllByBranch,
    RMofBranch,
    updateEmployee,
    createEmployee,
    createNewEMPid,
    createNewHLid,
    validateEmployeeDetails,
    getAllDepartment,
    getAllDesignation,
    getAllEduQualificationOptions,
    getAllProfQualificationOptions

};
