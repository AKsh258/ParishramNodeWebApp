const { Op, Sequelize } = require( 'sequelize' );
const employeeMaster = require( "../models/employeeMaster.model.js" );
const Entitlement = require( "../models/employeeEntitlement.model.js" )
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
    console.log( "Employee to update:", employee );
    const empid = employee.EmpID;

    try
    {
        return await employeeMaster.update( employee, { where: { EmpID: empid } } );
    } catch ( error )
    {
        console.error( "Update failed:", error );
        throw new Error( 'Error in updating employee: ' + error.message );
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
const findOneEntitle = async ( empid ) =>
{

    console.log( `Type of empid: ${ typeof empid }` );

    if ( !empid ) throw new Error( 'Employee ID is required' );

    console.log( `Fetching entitlement for empid: ${ empid }` );

    const query = `SELECT * FROM EmployeeEntitlement WHERE EmpCode = '${ empid }'`;

    const result = await executeQuery( query );

    console.log( `Entitlement length: ${ result.length }` );
    return result;

};

// const createEntitle = async ( entitlements ) =>
// {
//     try
//     {
//         let snoCounter = 1;
//         for ( const entitle of entitlements )
//         {
//             const { EmpCode, SalHead, FixedAmount } = entitle;
//             // Check if the record exists
//             const existingEntitlement = await Entitlement.findOne( {
//                 where: { EmpCode, SalHead }
//             } );

//             if ( existingEntitlement )
//             {
//                 // Update existing record
//                 return await Entitlement.update( {
//                     FixedAmount,
//                     Entitle: FixedAmount,
//                     changedDate: new Date().toISOString()
//                 }, {
//                     where: {
//                         EmpCode: EmpCode,
//                         SalHead: SalHead
//                     }
//                 } );
//             } else
//             {
//                 // gittng the all value from salaryheadmaster

//                 const result = await executeQuery( `SELECT * FROM SalaryHeadMaster WHERE Code = '${ SalHead }'` );
//                 if ( result )
//                 {
//                     //const EarningDeduction = result?.[0]?.EarningDeduction?.toLowerCase() !== 'earning';
//                     return await Entitlement.create( {
//                         EmpCode,
//                         sno: snoCounter++,
//                         SalHead,
//                         isEditable: true,
//                         FixedAmount,
//                         Entitle: FixedAmount,
//                         changedDate: new Date().toISOString(),
//                         Remarks: " ",
//                         EntCatg: "SCD00001",
//                         Type: result[ 0 ]?.Description || " ",
//                         Deduction: result?.[ 0 ]?.EarningDeduction?.toLowerCase() === 'earning' ? 0 : FixedAmount,
//                         LedgerCode: "NULL"
//                     } );
//                 } else
//                 {
//                     console.error( 'Error in finding salary head ', error );n
//                     throw new Error( ' ! error in saving EmployeeEntitlement not find salary head : ' + error.message );
//                     return false;
//                 }
//             }
//         }
//     } catch ( error )
//     {
//         console.error( 'Error saving/updating entitlements:', error );
//         throw new Error( ' ! error in saving EmployeeEntitlement : ' + error.message );
//     }
// }

const createEntitle = async ( entitlements ) =>
{
    try
    {
        let snoCounter;
        const count = await Entitlement.count( { where: { EmpCode: entitlements[ 0 ].EmpCode } } );
        snoCounter = ( count === 0 ) ? 1 : count + 1;

        const results = []; // Collect results for all operations

        for ( const entitle of entitlements )
        {
            const { EmpCode, SalHead, FixedAmount } = entitle;

            // Check if the record exists
            const existingEntitlement = await Entitlement.findOne( {
                where: { EmpCode, SalHead }
            } );

            if ( existingEntitlement )
            {
                // Update existing record
                await Entitlement.update(
                    {
                        FixedAmount,
                        Entitle: FixedAmount,
                        changedDate: new Date().toISOString()
                    },
                    {
                        where: { EmpCode, SalHead }
                    }
                );
                results.push( { status: "updated", EmpCode, SalHead } ); // Log update result
            } else
            {
                // Get data from SalaryHeadMaster
                const result = await executeQuery( `SELECT * FROM SalaryHeadMaster WHERE Code = '${ SalHead }'` );
                if ( result )
                {
                    await Entitlement.create( {
                        EmpCode,
                        sno: snoCounter++,
                        SalHead,
                        isEditable: true,
                        FixedAmount,
                        Entitle: FixedAmount,
                        changedDate: new Date().toISOString(),
                        Remarks: " ",
                        EntCatg: "SCD00001",
                        Type: result[ 0 ]?.Description || " ",
                        Deduction: result?.[ 0 ]?.EarningDeduction?.toLowerCase() === "earning" ? 0 : FixedAmount,
                        LedgerCode: "NULL"

                    } );
                    results.push( { status: "created", EmpCode, SalHead } ); // Log create result
                } else
                {
                    console.error( "Error in finding salary head" );
                    results.push( { status: "error", EmpCode, SalHead, message: "Salary head not found" } );
                }
            }
        }

        // Return the consolidated results
        return results;
    } catch ( error )
    {
        console.error( "Error saving/updating entitlements:", error );
        throw new Error( "Error in saving EmployeeEntitlement: " + error.message );
    }
};

const getSalaryHeaddb = async ( empid ) =>
{
    try
    {
        return result = await executeQuery( `SELECT * FROM SalaryHeadMaster` );
    } catch ( error )
    {
        throw new Error( 'Error in fetching SalaryHeadMaster ' + error.message );
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


// const updateSalaryHeadGradesAmountsdb = async ( SalHead, companyCode, grade, value ) =>
// {
//     try
//     {
//         // Identify which grade column to update
//         let gradeColumn;
//         switch ( grade )
//         {
//             case 'Grade A':
//                 gradeColumn = 'A';
//                 break;
//             case 'Grade B':
//                 gradeColumn = 'B';
//                 break;
//             case 'Grade C':
//                 gradeColumn = 'C';
//                 break;
//             case 'Grade D':
//                 gradeColumn = 'D';
//                 break;
//             default:
//                 return res.status( 400 ).json( { message: 'Invalid grade specified' } );
//         }
//         const valueToInsert = value.includes( '%' )
//             ? [ parseFloat( value.replace( '%', '' ) ), 0 ]  // Save at index 0
//             : [ 0, parseFloat( value ) ];                  // Save at index 1
//         const query = `UPDATE SalaryHeadMaster 
//                SET ${ gradeColumn } = '${ JSON.stringify( valueToInsert ) }'
//                WHERE Code = '${ SalHead }' AND CompanyCode = '${ companyCode }'`;
//         return await executeQuery( query );
//         if ( results.affectedRows > 0 )
//         {
//             return res.status( 200 ).json( { message: `${ grade } updated successfully` } );
//         } else
//         {
//             return res.status( 404 ).json( { message: 'Record not found' } );
//         }
//     } catch ( error )
//     {
//         console.error( 'Error updating grades:', error );
//         return res.status( 500 ).json( { error: 'Internal server error' } );
//     }
// };


const updateSalaryHeadGradesAmountsdb = async ( SalHead, grade , amount ) =>
    {
        try
        { 
            
            const query = `UPDATE SalaryHeadMaster 
                   SET Amount  = '${ amount }'
                   WHERE Code = '${ SalHead }' AND Grade = '${ grade }'`;
    
            return await executeQuery( query );
        } catch ( error )
        {
            console.error( 'Error updating grades:', error );
            return res.status( 500 ).json( { error: 'Internal server error' } );
        }
    };

module.exports =
{
    findAll,
    findOne,
    getAllByBranch, 
    updateEmployee, 
    createEmployee, 
    findOneEntitle, 
    createEntitle, 
    getSalaryHeaddb, 
    updateSalaryHeadGradesAmountsdb
};
