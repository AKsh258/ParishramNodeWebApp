const express=require('express');
const router=express.Router();
const em =require("../controllers/employeeMaster.controller");
const errorMiddleware= require("../middleware/error.middleware");

router.get("/", em.findAllemployees );

router.get("/:id", em.getEmployeeById);

router.get("/branch/:branchCode", em.getAllEmployeeFromBranch)


router.use(errorMiddleware);

module.exports=router;