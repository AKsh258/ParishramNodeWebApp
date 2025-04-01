require('dotenv').config();
const express=require('express');
const cors=require('cors');
const app=express();
const PORT=process.env.PORT;
const bodyParser=require('body-parser');

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));

const errorMiddleware = require("./middleware/error.middleware");
const cotectUsRout=require("./routers/contectUs.routs");            // contect need to change database and it's functionality
const elementRout=require("./routers/element.routs");               //element login or user mastern routes
const employee=require("./routers/employeeMaster.routs")            //employee master routes
const company= require("./routers/companyMaster.routs")             // company master routes
const branches=require("./routers/branchMaster.routs")              // branch master routes
const salHead =require("./routers/salaryHeadMaster.routs")

app.use("/contect-us", cotectUsRout);
app.use("/element", elementRout)
app.use("/employee",employee)
app.use("/company", company)
app.use("/branches", branches)
app.use("/salary", salHead)


app.use(errorMiddleware);


app.listen(PORT, () => console.log("Server listening on port " + PORT));
