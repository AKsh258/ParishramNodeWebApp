const express=require('express');
const router=express.Router();
const em =require("../controllers/employeeMaster.controller");
const authenticateToken = require('../middleware/auth.Middleware');

//rout to get all employee with pagination sets of 20   http://localhost:4000/employee/getAll
router.get("/getAll", em.findAllemployees );

//rout to get employee by id    http://localhost:4000/employee/get/EMP1012
router.get("/get/:id", em.getEmployeeById);

//rout to get employee of a sapret branch   http://localhost:4000/employee/branch/BR00002
router.get("/employeesFromBranch/:branchCode", em.getAllEmployeeFromBranch);

//rout to update employee       http://localhost:4000/employee/update
router.post("/Update", em.saveEmployee);

//rout to register New Employee     http://localhost:4000/employee/register
router.post("/register", em.saveNewEmployee);

router.get("/lastEMPid", em.lastEMPid);


module.exports=router;