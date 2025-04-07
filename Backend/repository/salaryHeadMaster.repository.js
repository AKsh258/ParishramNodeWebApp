const { Sequelize, InvalidConnectionError } = require( 'sequelize' );
const SHM = require( "../models/salaryHeadMaster.model.js" );
const empRemburs =  require("../models/employeeReimbursement.model.js")
const Entitlement = require( "../models/employeeEntitlement.model.js" );
const ProfessionalTaxMaster = require( "../models/professionalTaxMaster.model.js" );
const CustomError = require( "../utils/errorHandler.util.js" );
const { executeQuery } = require( '../utils/dbhelper.util.js' );

const saveUpdate = async ( code, companyCode, grade, amount ) =>
{
    try
    {
        const salhead = await SHM.findOne( { where: { Code: code, Grade: grade, CompanyCode: companyCode } } );

        if ( salhead )
        {

            return await SHM.update( { Amount: amount }, { where: { Code: code, CompanyCode: companyCode, Grade: grade } } );

        } else
        {
            const headDetails = await executeQuery( `SELECT * FROM SalaryHeadMaster WHERE Code = '${ code }'` );

            if ( !headDetails || headDetails.length === 0 )
            {
                return " Salary head not found !   please send a valid salary Head ";
            }

            return newHead = await SHM.create( {
                Code: code,
                Head: headDetails[ 0 ].Head,
                Description: headDetails[ 0 ].Description,
                EarningDeduction: headDetails[ 0 ].EarningDeduction,
                CompanyCode: companyCode,
                Amount: amount,
                Grade: grade
            } );
        }

    } catch ( error )
    {
        throw new Error( 'Error in saving salaryhead details : ' + error.message );
    }
};

const findSalaryByGrade = async ( companyCode, grade ) =>
{
    try
    {
        return await SHM.findAll( { where: { CompanyCode: companyCode, Grade: grade } } );

    } catch ( error )
    {
        throw new Error( 'Error in fetching Salary by Grade : ' + error.message );
    }
};
const getMinimumWagesByBranch = async (branchCode) => {
    try {
        return await executeQuery( `SELECT * FROM BranchesMinimumWages WHERE BranchCode = '${ branchCode }'` );
    } catch (error) {
        throw new Error('Error fetching MinimumWages : ' + error.message);
    }
};

const setReimbursmentdb = async ( empCode, reimbursmentType, EntitlementAmount, SNo )=>{

    try{

        const result1= await empRemburs.findAll( { where : { EmpCode : empCode, ReimbursmentType : reimbursmentType } } );

        if(result1.length>0){

            return await empRemburs.update( { EntitlementAmount : EntitlementAmount , IsEntitle : true  }, { Where : { EmpCode : empCode, ReimbursmentType : reimbursmentType }})
        }

        //add increment  function add serial no. 

        const result = await empRemburs.create({
            EmpCode : empCode, 
            ReimbursmentType : reimbursmentType,
            IsEntitle : false,
            EntitlementAmount : EntitlementAmount,
            SNo : 1
        })


    }catch(error){

        throw new Error( 'Error in saving reimbursement : ' + error.message );

    }
}
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
        
                const result= await executeQuery( query );
                console.log(result)
                
            } catch ( error )
            {
                console.error( 'Error updating grades:', error );
                return res.status( 500 ).json( { error: 'Internal server error' } );
            }
        };
    
const getLocationsOfProfessionalTaxdb = async (  ) =>
    {
        try
        {
            return await ProfessionalTaxMaster.findAll();
            
        } catch ( error )
        {
            console.error( 'Error fetching locations:', error );
            throw new CustomError( 'Error fetching locations', 500 );
        }
    }

module.exports = {
    
    saveUpdate,
    findSalaryByGrade,
    getMinimumWagesByBranch,
    setReimbursmentdb,
    findOneEntitle, 
    createEntitle, 
    getSalaryHeaddb, 
    updateSalaryHeadGradesAmountsdb,
    getLocationsOfProfessionalTaxdb

};