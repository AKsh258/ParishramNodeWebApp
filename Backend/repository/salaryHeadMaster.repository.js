const { Sequelize, InvalidConnectionError } = require( 'sequelize' );
const SHM = require( "../models/salaryHeadMaster.model.js" );
const empRemburs =  require("../models/employeeReimbursement.model.js")
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

        throw new Error( 'Error in saving Salary by Grade : ' + error.message );

    }
}

module.exports = {
    saveUpdate,
    findSalaryByGrade,
    setReimbursmentdb
};