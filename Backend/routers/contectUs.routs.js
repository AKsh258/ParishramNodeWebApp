const express=require('express');
const router=express.Router();
const contectUs=require("../controllers/contectUs.controller")

router.get("/getAllRequestToContact", contectUs.getAllContact);

router.post("/requestToContact", contectUs.saveContact);

module.exports=router;