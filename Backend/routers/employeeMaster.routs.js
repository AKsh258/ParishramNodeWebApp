const express=require('express');
const router=express.Router();
const em =require("../controllers/employeeMaster.controller");
const errorMiddleware= require("../middleware/error.middleware");

console.log("in employee master routs")

router.get("/", em.findAllemployees );

router.use(errorMiddleware);

module.exports=router;