const express=require('express');
const router=express.Router();
const em =require("../controllers/employeeMaster.controller");
const authenticateToken = require('../middleware/auth.Middleware');

//rout to get all employee with pagination sets of 20   http://localhost:4000/employee/getAll
router.get("/getAll", em.findAllemployees );

//rout to get employee by id    http://localhost:4000/employee/get/EMP1012
router.get("/get/:id", em.getEmployeeById);

//rout to get employee of a sapret branch starts with ( HL )  http://localhost:4000/employee/employeesFromBranch/BR00002
router.get("/employeesFromBranch/:branchCode", em.getAllEmployeeFromBranch);

//rout to get employee of a sapret branch starts with ( EMP )  http://localhost:4000/employee/getAllRM/BR00002
router.get("/getAllRM/:branchCode", em.getAllRM);

//rout to update employee       http://localhost:4000/employee/update
router.post("/Update", em.saveEmployee);

//rout to register New Employee     http://localhost:4000/employee/register
router.post("/register", em.saveNewEmployee);

router.post("/newRM", em.saveNewRM);

router.get("/lastEMPid", em.lastEMPid);

router.get("/LastHLid", em.lastHLid);

router.get("/departments", em.getDepartment);

router.get("/Designations", em.getDesignation);

router.get("/eduQualificationOptions", em.getEduQualificationOptions);

router.get("/profQualificationOptions", em.getProfQualificationOptions);

module.exports=router;