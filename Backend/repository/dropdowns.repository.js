const { executeQuery } = require( '../utils/dbhelper.util.js' );

const getOrgUnits = async () => {
  return await executeQuery("select OrgUnitCode,OrgUnitName from Org_Unit");
};

const getProfileNames = async () => {
  return await executeQuery("select Profile_Code,Profile_Name from Profile_Name");
};

const getDepartments = async () => {
  return await executeQuery("select Dep_Code,Dep_Name from Depart_info");
};

const getDivisions = async () => {
  return await executeQuery("select Division_Code,Division_Name from Division_info");
};

const getSaleOffices = async () => {
  return await executeQuery("select Sale_officeCode,Sale_officeName from Sale_Office_info");
};

const getDesignations = async () => {
  return await executeQuery("select DesignationCode,DesignationName from HavellsDesignation");
};

const getEmployeeTypes = async () => {
  return await executeQuery("select Emp_Type from Employee_Type");
};


module.exports={

    getOrgUnits,
    getProfileNames,
    getDepartments,
    getDepartments,
    getDivisions,
    getSaleOffices,
    getDesignations,
    getEmployeeTypes

}