const express=require('express');
const router=express.Router();
const company =require("../controllers/companyMaster.controller");
const errorMiddleware= require("../middleware/error.middleware");

router.get("/", company.findAllCompanies);

router.use(errorMiddleware);

module.exports=router;