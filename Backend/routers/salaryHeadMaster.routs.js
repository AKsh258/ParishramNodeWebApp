const express = require( 'express' );
const router = express.Router();
const SalaryHeadM = require( '../controllers/salaryHeadMaster.controller' );

router.post( "/salHead/setGradeAmount", SalaryHeadM.saveSalaryHeadAmoutGrade );
router.post("/getSalary", SalaryHeadM.getSalaryAmount);
router.post("/reimbursement/saveReimbursment", SalaryHeadM.setReimbursment)

module.exports = router;    