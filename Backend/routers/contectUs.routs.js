const express=require('express');
const router=express.Router();
const contectUscontroller=require("../controllers/contectUs.controller")

router.get("/", contectUscontroller.getAll);

router.post("/", contectUscontroller.save);

module.exports=router;