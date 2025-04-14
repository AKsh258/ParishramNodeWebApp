const express = require( 'express' );
const router = express.Router();
const SalaryHeadM = require( '../controllers/salaryHeadMaster.controller' );

router.post( "/salHead/setGradeAmount", SalaryHeadM.saveSalaryHeadAmoutGrade );

router.post("/getSalHead/GradeAmount", SalaryHeadM.getSalaryAmount);

router.get("/getMinWages", SalaryHeadM.getMinimumWages);

router.post("/reimbursement/saveReimbursment", SalaryHeadM.setReimbursment);

//rout to save entitle of an employee save into employeeentitlement, view_employeesalarydetailsrep , view_employeeentitlement and employeemaster table 
router.post("/saveEntitle", SalaryHeadM.saveEntitlement);

//rout to get employee entitlement by empid 
router.get("/getEntitlement/:empid", SalaryHeadM.getEntitlementByEmpId);

//rout to get salary head master to get saleryheadcode and saray head name
router.get("/getSalaryHead", SalaryHeadM.getSalaryHead);

router.get('/professionalTax/AllLocations', SalaryHeadM.getLocationsOfProfessionalTax);

//rout to save GL Details into EmployeeGlDetails table
router.post('/saveGLDetails', SalaryHeadM.saveGLDetails);

module.exports = router;    