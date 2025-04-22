const express=require('express');
const router=express.Router();
const country=require("../controllers/countryMaster.controller.js")

router.get("/getState", country.getAllState);

router.get("/state/getCity", country.getAllCity);


module.exports=router;