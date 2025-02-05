require('dotenv').config();
const express=require('express');
const cors=require('cors');
const app=express();
const PORT=process.env.PORT;
const bodyParser=require('body-parser');

// const authRout=require('./routers/auth.routs');                     //unnessery     multi db login by role
// const mrfRout=require("./routers/mrf.routs");                       //unnessery     routs
// const cityForceRout=require("./routers/cityforce.routs");           //unnessery     routs
// const parishramRout=require("./routers/parishram.routs");           //unnessery     routs
const cotectUsRout=require("./routers/contectUs.routs");            // contect need to change database and it's functionality
const elementRout=require("./routers/element.routs");               //element login or user mastern routes
const employee=require("./routers/employeeMaster.routs")            //employee master routes
const company= require("./routers/companyMaster.routs")             // company master routes
const branches=require("./routers/branchMaster.routs")              // branch master routes

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));

console.log(" this is server file ")

//using rout
// app.use('/auth',authRout);
// app.use("/mrf",mrfRout);
// app.use("/cityforce",cityForceRout);
// app.use("/parishram",parishramRout);
app.use("/contect-us", cotectUsRout);
app.use("/element", elementRout)
app.use("/employee",employee)
app.use("/company", company)
app.use("/branches", branches)

app.listen(PORT, () => console.log("Server listening on port " + PORT));
