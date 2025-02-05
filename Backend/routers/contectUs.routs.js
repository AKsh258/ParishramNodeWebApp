const express=require('express');
const router=express.Router();
const contectUscontroller=require("../controllers/contectUs.controller")
const errorMiddleware= require("../middleware/error.middleware")

router.get("/", contectUscontroller.getAll);

router.post("/", contectUscontroller.save);

router.use(errorMiddleware);

module.exports=router;