const express=require('express');
const router=express.Router();
const dropdown=require('../controllers/dropdowns.controller');

//from table Org_Unit to get column data Org_Unit_Code and OrgUnitname
router.get("/organizationUnit", dropdown.getOrganizationUnit);

//from table Profile_Name to get column Profile_Code and Profile_name
router.get("/profileName", dropdown.getProfileName );

//from table Depart_info to get  column Dep_Code and  Dep_Name
router.get("/departmentInfo", dropdown.getDepartmentInfo);

//from table Division_info to get column Division_code and devision_name
router.get("/devision", dropdown.getDevision);

//from table Sale_office_Unit to get column Sale_officeCode and name
router.get("/saleOfficeUnit", dropdown.getSaleOfficeUnit);

//from table HavellsDesignation  to get column DesignationCode and name 
router.get("/Designation", dropdown.getDesignation);

//from table Employee_Type to get column Usertype
router.get("/employeeType", dropdown.getEmpType);


module.exports=router;