const express=require('express');
const router=express.Router();
const company =require("../controllers/companyMaster.controller");
const errorMiddleware= require("../middleware/error.middleware");

console.log("in company master routs")

router.get("/", company.findAllCompanies);

router.use(errorMiddleware);

module.exports=router;