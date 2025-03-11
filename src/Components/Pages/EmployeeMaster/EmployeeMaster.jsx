import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "./EmployeeMaster.module.css";

import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  BranchName,
  companyName_fetched,
  Employees,
  singleEmployee
} from "../../../Redux/Features/Counter/EmployeeMaster/EmployeeMaster_Slice";
import { setActiveSection } from "../../../Redux/Features/Counter/ActiveSectionSlice";
import { insertEmployeeMaster } from "../../../Redux/Features/Counter/EmployeeMaster/Employee_Submit_Slice";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import SectionE from "./SectionE";
import SectionF from "./SectionF";
import SectionG from "./SectionG";
import SectionH from "./SectionH";

const EmployeeMaster = () => {
  const dispatch = useDispatch();
  const { company, branch, employee, single_Employee } = useSelector(
    (state) => state.employee
  );

  const [showPreview, setShowPreview] = useState(false);
  // const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedCompanyCode, setSelectedCompanyCode] = useState("");
  const [selectedBranchCode, setSelectedBranchCode] = useState("");
  const [selectedEmployeeCode, setSelectedEmployeeCode] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [progress, setProgress] = useState(0);
  const activeSection = useSelector(
    (state) => state.activeSection.activeSection
  );
  const closeDetails = () => {
    // setSelectedEmployee(null);
  };
 
  const [formData, setFormData] = useState({
    applicationType: "",
    Name: "",
    CardNo: "",
    EmpID: "",
    empType: "",
    Sex: "",
    DoB: "",
    BloodGroup: "",
    MaritalStatus: "",
    SpouseName: "",
    SpouseDOb: "",
    SpouseAadharno: "",
    FatherName: "",
    FatherDOB: "",
    FatherAadharno: "",
    MotherName: "",

    MotherDOB: "",
    MotherAadharno: "",

    Child1Name: "",
    Child1DOB: "",
    Child1Gender: "",
    Child1Aadharno:"",
    Child2Name: "",
    Child2DOB: "",
    Child2Gender: "",
    Child2Aadharno: "",
    Child3Name: "",
  Child3DOB: "",
  Child3Gender: "",
  Child3Aadharno: "",
  Child4Name: "",
  Child4DOB: "",
  Child4Gender: "",
  Child4Aadharno: "",
    NomeneeName: "",
    ReleationwithNomnee: "",
    PanNo:"",
    Email:"",
    PhoneNo:"",
    MobileNo:"",
    WorkLocation: "",
    Country: "",
    City: "",
    State: "",
    PinCode: "",
        // Entitlement fields
        CTC: 0,
        GrossSalary: 0,
        PFNo: "",
        ESICNo: "",
        UANNo: "",
        IsESICApplicable: false,
        IsLWFApplicable: false,
        IsOverTimeAllowed: false,
        IsAccount: false,
        IsBilled: true,
        IsBranchHead: false,
        IsHead: 0,
      
        IsTL: 0,
          // Employment Details (added new fields here)
  Designation: "",
  DesignationCode: "",
  Department: "",
  DeptCode: "",
  CompanyCode: "",
  CustCode: "",
  CustName: "",
  Region: "",
  HierarchyCode: "",
  HeadName: "",
  HeadEmail: "",
  // IsAccount: "",
  ReportingTo: "",
  Joined: "",
  JoiningDate: "",
  IsActive: "",
 
  BranchHeadName: "",
  BranchheademailId: "",

  ResignationDate: "",
  HasLeft: "",
  LeftDate: "",
  FirstCompanyName: "",
  FirstCompanyFromDate: "",
  FirstCompanyToDate: "",
  FirstCompanyDesignation:"",
  SecondCompanyName: "",
  SecondCompanyFromDate: "",
  SecondCompanyTodate: "",
  Separation: "",
  SecondCompanyDesignation:"",
  oldCode:"",
  PresentAddress:"",
  Address:"",
        // Rm Details
        IsRM: false,
        RMEmailId: "",
        RMEmpId: "",
        RMEmpName: "",
        Branchheadid: "",
      //  eDUCATION fIELDS
      EduQualification:"",
      ProfQualification:"",
      ProfQualificationYear:"",
      EduQualificationYear:'',
        // **Bank Details** (added new fields here)
  BankName: "",
  AccountNo: "",
  AccountId: "",
  AccountName: "",
  AccountEmailId: "",
  NameInBank: "",
  // Other Feilds
  OwnConv: false,
  DistFromHouse: "",
  OwnHouse: false,
  isAdvAcc: false,
  isTourAcc: false,
  RegdNo: "",
  LevelCode: "",
  Band: "",

  AdvAcc: "",
  TourAcc: "",
  TxtApplCode: "",

  UnitESIC: "",
  UnitESICNo: "",

  HasRegin: false,
  StoreName: "",
  Channel: "",
  ProductHeadName: "",
  NationalProductHead: "",
  Division: "",

  Org_Unit_Code: "",
  Profile_Code: "",
  Div_Code: "",
  Dept_Code: "",
  Sale_Office_Code: "",
  Designation_Code: "",

  UserType: "",
  T_EndDate: "",
  WeekOff: "",
  TL_Emp_Code: "",
  TL_Emp_Name: "",
  StoreLocation: "",
  SalesOffice: "",
  Grade:"",
  ActualChannel: "",
  EmpId1:""
  });
  console.log("--------------------------------------------------------------------> formData",formData)


  useEffect(() => {
    dispatch(companyName_fetched());
  }, [dispatch]);
  
  useEffect(() => {
    const formattedDoB = single_Employee.DoB
      ? new Date(single_Employee.DoB).toISOString().split("T")[0]
      : "";
    const FatherDoB = single_Employee.FatherDOB
      ? new Date(single_Employee.FatherDOB).toISOString().split("T")[0]
      : "";
    const MotherDOB = single_Employee.MotherDOB
      ? new Date(single_Employee.MotherDOB).toISOString().split("T")[0]
      : "";
    const SpouseDOb = single_Employee.SpouseDOb
      ? new Date(single_Employee.SpouseDOb).toISOString().split("T")[0]
      : "";
    const Child2DOB = single_Employee.Child2DOB
      ? new Date(single_Employee.Child2DOB).toISOString().split("T")[0]
      : "";
    const Child3DOB = single_Employee.Child3DOB
      ? new Date(single_Employee.Child3DOB).toISOString().split("T")[0]
      : "";
    const Child1DOB = single_Employee.Child1DOB
      ? new Date(single_Employee.Child1DOB).toISOString().split("T")[0]
      : "";
    const Child4DOB = single_Employee.Child4DOB
      ? new Date(single_Employee.Child4DOB).toISOString().split("T")[0]
      : "";
  
    const JoiningDate = single_Employee.JoiningDate
      ? new Date(single_Employee.JoiningDate).toISOString().split("T")[0]
      : "";
    const ResignationDate = single_Employee.ResignationDate
      ? new Date(single_Employee.ResignationDate).toISOString().split("T")[0]
      : "";
      const LeftDate = single_Employee.LeftDate
      ? new Date(single_Employee.LeftDate).toISOString().split("T")[0]
      : "";
      const SecondCompanyTodate = single_Employee.SecondCompanyTodate
      ? new Date(single_Employee.SecondCompanyTodate).toISOString().split("T")[0]
      : "";
      const SecondCompanyFromDate = single_Employee.SecondCompanyFromDate
      ? new Date(single_Employee.SecondCompanyFromDate).toISOString().split("T")[0]
      : "";
  const FirstCompanyTodate=single_Employee.FirstCompanyToDate
  ? new Date(single_Employee.FirstCompanyToDate).toISOString().split("T")[0]
  : "";
    // Check if single_Employee is not empty or undefined
    if (single_Employee) {
      setFormData({
        // Personal Data
        Name: single_Employee.Name,
        CardNo: single_Employee.CardNo,
        EmpID: single_Employee.EmpID,
        EmpType: single_Employee.EmpType,
        Sex: single_Employee.Sex,
        DoB: formattedDoB,
        BloodGroup: single_Employee.BloodGroup,
        MaritalStatus: single_Employee.MaritalStatus,
        SpouseName: single_Employee.SpouseName,
        SpouseDOb: SpouseDOb,
        FatherName: single_Employee.FatherName,
        FatherDOB: FatherDoB,
        MotherName: single_Employee.MotherName,
        MotherDOB: MotherDOB,
        Child1Name: single_Employee.Child1Name,
        Child1DOB: Child1DOB,
        Child1Gender: single_Employee.Child1Gender,
        Child1Aadharno: single_Employee.Child1Aadharno,
        Child2Name: single_Employee.Child2Name || "",
        Child2DOB: Child2DOB || "",
        Child2Gender: single_Employee.Child2Gender || "",
        Child2Aadharno: single_Employee.Child2Aadharno || "",
        Child3Name: single_Employee.Child3Name || "",
        Child3DOB: Child3DOB || "",
        Child3Gender: single_Employee.Child3Gender || "",
        Child3Aadharno: single_Employee.Child3Aadharno || "",
        Child4Name: single_Employee.Child4Name || "",
        Child4DOB: Child4DOB || "",
        Child4Gender: single_Employee.Child4Gender || "",
        Child4Aadharno: single_Employee.Child4Aadharno || "",
        NomeneeName: single_Employee.NomeneeName,
        ReleationwithNomnee: single_Employee.ReleationwithNomnee,
        PanNo: single_Employee.PanNo || "",
        FatherAadharno: single_Employee.FatherAadharno || "",
        MotherAadharno: single_Employee.MotherAadharno || "",
        SpouseAadharno: single_Employee.SpouseAadharno || "",
        Email: single_Employee.Email || "",
        PhoneNo: single_Employee.PhoneNo || "",
        MobileNo: single_Employee.MobileNo || "",
        WorkLocation: single_Employee.WorkLocation || "",
        State: single_Employee.State || "",
        City: single_Employee.City ,
        PinCode: single_Employee.PinCode || "",
  
        // Entitlement Data Mapping
        CTC: single_Employee.CTC || 0,
        GrossSalary: single_Employee.GrossSalary || 0,
        PFNo: single_Employee.PFNo || "",
        ESICNo: single_Employee.ESICNo || "",
        UANNo: single_Employee.UANNo || "",
        IsESICApplicable: single_Employee.IsESICApplicable || false,
        IsLWFApplicable: single_Employee.IsLWFApplicable || false,
        IsOverTimeAllowed: single_Employee.IsOverTimeAllowed || false,
        IsAccount: single_Employee.IsAccount || false,
        IsBilled: single_Employee.IsBilled || true,
        IsBranchHead: single_Employee.IsBranchHead || false,
        IsHead: single_Employee.IsHead || 0,
       
        IsTL: single_Employee.IsTL || 0,
  
        // Employment Data Mapping (added the new fields here)
        Designation: single_Employee.Designation || "",
        DesignationCode: single_Employee.DesignationCode || "",
        Department: single_Employee.Department || "",
        DeptCode: single_Employee.DeptCode || "",
        CompanyCode: single_Employee.CompanyCode || "",
        CustCode: single_Employee.CustCode || "",
        CustName: single_Employee.CustName || "",
        Region: single_Employee.Region || "",
        HierarchyCode: single_Employee.HierarchyCode || "",
        HeadName: single_Employee.HeadName || "",
        HeadEmail: single_Employee.HeadEmail || "",
        ReportingTo: single_Employee.ReportingTo || "",
        Joined: single_Employee.Joined || false,
        JoiningDate: JoiningDate,
        IsActive: single_Employee.IsActive || false,
        BranchHeadName: single_Employee.BranchHeadName || "",
        BranchheademailId: single_Employee.BranchheademailId || "",
    
        ResignationDate: ResignationDate,
        HasLeft: single_Employee.HasLeft || false,
        LeftDate: LeftDate || "",
        FirstCompanyName: single_Employee.FirstCompanyName || "",
        FirstCompanyFromDate: single_Employee.FirstCompanyFromDate || "",
        FirstCompanyToDate:FirstCompanyTodate || "",
        SecondCompanyName: single_Employee.SecondCompanyName || "",
        SecondCompanyFromDate:SecondCompanyFromDate || "",
        SecondCompanyToDate: SecondCompanyTodate || "",
        Separation: single_Employee.Separation || "",
        FirstCompanyDesignation:single_Employee.FirstCompanyDesignation||"",
        SecondCompanyDesignation:single_Employee.SecondCompanyDesignation||"",
  oldCode:single_Employee.oldCode||"",
  PresentAddress:single_Employee.PresentAddress||"",
  Address:single_Employee.Address||"",
// Rm Start Here
IsRM: single_Employee.IsRM || false,
RMEmailId:single_Employee.RMEmailId||"",
RMEmpId:single_Employee.RMEmpId||"",
RMEmpName:single_Employee.RMEmpName||"",
Branchheadid:single_Employee.Branchheadid||"",
// Educational start
EduQualification:single_Employee.EduQualification,
ProfQualification:single_Employee.EduQualificationYear,
ProfQualificationYear:single_Employee.ProfQualification,
EduQualificationYear:single_Employee.ProfQualificationYear,
// Bannk Details
BankName:single_Employee.BankName,
AccountNo:single_Employee.AccountNo,
AccountId:single_Employee.AccountId,
AccountName:single_Employee.AccountName,
AccountEmailI:single_Employee.AccountEmailIdd,
NameInBank:single_Employee.NameInBank,
// Others
OwnConv:single_Employee.OwnConv,
DistFromHouse:single_Employee.DistFromHouse,
OwnHouse:single_Employee.OwnHouse,
isAdvAcc:single_Employee.isAdvAcc,
isTourAcc:single_Employee.isTourAcc,
RegdNo:single_Employee.RegdNo,
LevelCode:single_Employee.LevelCode,
Band:single_Employee.Band,
AdvAcc:single_Employee.AdvAcc,
TourAcc:single_Employee.TourAcc,
TxtApplCode:single_Employee.TxtApplCode,

UnitESIC:single_Employee.UnitESIC,
UnitESICNo:single_Employee.UnitESICNo,

HasRegin:single_Employee.HasRegin,
StoreName:single_Employee.StoreName,
Channel:single_Employee.Channel,
ProductHeadName:single_Employee.ProductHeadName,
NationalProductHead:single_Employee.NationalProductHead,
Division:single_Employee.Division,
Country:single_Employee.Country,
Org_Unit_Code:single_Employee.Org_Unit_Code,
Profile_Code:single_Employee.Profile_Code,
Div_Code:single_Employee.Div_Code,
Dept_Code:single_Employee.Dept_Code,
Sale_Office_Code:single_Employee.Sale_Office_Code,
Designation_Code:single_Employee.Designation_Code,

UserType:single_Employee.UserType,
T_EndDate:single_Employee.TL_Emp_Code,
WeekOff:single_Employee.WeekOff,
TL_Emp_Code:single_Employee.TL_Emp_Code,
TL_Emp_Name:single_Employee.TL_Emp_Name,
StoreLocation:single_Employee.StoreLocation,
SalesOffice:single_Employee.SalesOffice,
Grade:single_Employee.Grade,
ActualChannel:single_Employee.ActualChannel,
EmpId1:single_Employee.EmpId1
      });
    }
    
  }, [single_Employee]);
  



  const handleCompanyChange = async (event) => {
    const companyCode = event.target.value;
    setSelectedCompanyCode(companyCode);
    if (companyCode) {
      await dispatch(BranchName({ CompanyCode: companyCode }));
    }
  };

  const handleBranchChange = async (event) => {
    const branchCode = event.target.value;
    setSelectedBranchCode(branchCode);
    if (branchCode) {
      await dispatch(Employees({ branch: branchCode }));
    }
  };

  const handleEmployeeChange = async (event) => {
    const empId = event.target.value;
    setSelectedEmployeeCode(empId);
    if (empId) {
      dispatch(singleEmployee({ empId }));
    }
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredEmployees = employee.filter((emp) =>
    emp.EmpID.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const handleNextSection = (e) => {
    e.preventDefault();
    saveDataToLocalStorage();
    if (activeSection === "sectionA") {
      dispatch(setActiveSection("sectionB"));
      setProgress(15);
    } else if (activeSection === "sectionB") {
      dispatch(setActiveSection("sectionC"));
      setProgress(30);
    } else if (activeSection === "sectionC") {
      dispatch(setActiveSection("sectionD"));
      setProgress(45);
    } else if (activeSection === "sectionD") {
      dispatch(setActiveSection("sectionE"));
      setProgress(60);
    } else if (activeSection === "sectionE") {
      dispatch(setActiveSection("sectionF"));
      setProgress(75);
    } else if (activeSection === "sectionF") {
      dispatch(setActiveSection("sectionG"));
      setProgress(90);
    } else if (activeSection === "sectionG") {
      dispatch(setActiveSection("sectionH"));
      setProgress(100);
    }
  };

  const handlePreviousSection = (e) => {
    e.preventDefault();
    saveDataToLocalStorage();
    if (activeSection === "sectionH") {
      dispatch(setActiveSection("sectionG"));
      setProgress(100);
    } else if (activeSection === "sectionG") {
      dispatch(setActiveSection("sectionF"));
      setProgress(90);
    } else if (activeSection === "sectionF") {
      dispatch(setActiveSection("sectionE"));
      setProgress(75);
    } else if (activeSection === "sectionE") {
      dispatch(setActiveSection("sectionD"));
      setProgress(60);
    } else if (activeSection === "sectionD") {
      dispatch(setActiveSection("sectionC"));
      setProgress(45);
    } else if (activeSection === "sectionC") {
      dispatch(setActiveSection("sectionB"));
      setProgress(30);
    } else if (activeSection === "sectionB") {
      dispatch(setActiveSection("sectionA"));
      setProgress(15);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      localStorage.setItem("employeeFormData", JSON.stringify(updatedData));
      return updatedData;
    });
  };
 // Render Form Fields based on sections
 const renderSection = () => {
  switch (activeSection) {
    case "sectionA":
      return <SectionA formData={formData} handleInputChange={handleInputChange} />;
    case "sectionB":
      return <SectionB formData={formData} handleInputChange={handleInputChange} />;
    case "sectionC":
      return <SectionC formData={formData} handleInputChange={handleInputChange} />;
    case "sectionD":
      return <SectionD formData={formData} handleInputChange={handleInputChange} />;
    case "sectionE":
      return <SectionE formData={formData} handleInputChange={handleInputChange} />;
    case "sectionF":
      return <SectionF formData={formData} handleInputChange={handleInputChange} />;
    case "sectionG":
      return <SectionG formData={formData} handleInputChange={handleInputChange} />;
    case "sectionH":
      return <SectionH formData={formData} handleInputChange={handleInputChange} />;
    default:
      return null;
  }
};
  const saveDataToLocalStorage = () => {
    console.log("Saving data to localStorage:", formData);
    localStorage.setItem("employeeFormData", JSON.stringify(formData));
  };
  const handlePreview = () => {
    setShowPreview(true);
  };

  // Function to handle the closing of the preview modal
  const handleClosePreview = () => {
    setShowPreview(false);
  };

  const handleEdit = () => {
    setIsPreview(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form data before submission: ", formData);  
    saveDataToLocalStorage();
    alert("Form data saved!");
    dispatch(insertEmployeeMaster(formData));
  };
    // Checking which fields are empty
    const checkFields = () => {
      const emptyFields = Object.keys(formData).filter(key => !formData[key]);
      return emptyFields;
    };

  const calculateProgress = () => {
    return progress;
  };

  const getProgressTooltip = () => {
    switch (progress) {
      case 15:
        return "15% Complete - Personal Details";
      case 30:
        return "30% Complete - Entitlement";
      case 45:
        return "45% Complete - CTC (Compensation)";
      case 60:
        return "60% Complete - Address Details";
      case 75:
        return "75% Complete - RM Details";
      case 90:
        return "90% Complete - Family Details";
      case 100:
        return "100% Complete";
      default:
        return "";
    }
  };

  const getProgressBarStyle = (progress) => {
    let background = "linear-gradient(to right, ";

    if (progress <= 25) {
      background += "blue 0%, blue " + progress + "%, ";
      background += "transparent " + progress + "%, transparent 100%)";
    } else if (progress <= 50) {
      background += "blue 0%, blue 25%, ";
      background += "green " + (progress - 25) + "%, green 100%)";
    } else if (progress <= 75) {
      background += "blue 0%, blue 25%, ";
      background += "green 25%, green 50%, ";
      background += "black " + (progress - 50) + "%, black 100%)";
    } else {
      background += "blue 0%, blue 25%, ";
      background += "green 25%, green 50%, ";
      background += "black 50%, black 75%, ";
      background += "red " + (progress - 75) + "%, red 100%)";
    }

    return { background };
  };

  return (
    <>
      <div>
        <form className={styles.formconatiner1}>
          <Row className={`${styles.row1}`}>
            <Col className={`${styles.col}`}>
              <label className={styles.labelinp} htmlFor="applicationType">
                Company Name
              </label>
              <select
                className={`${styles.selectin}`}
                id="applicationType"
                value={selectedCompanyCode}
                onChange={handleCompanyChange}
              >
                <option value="" className={styles.optionss}>
                  Company Name
                </option>
                {company && company.length > 0 ? (
                  company.map((emp) => (
                    <option
                      key={emp.id}
                      value={emp.Code}
                      className={styles.optionss}
                    >
                      {emp.Name}
                    </option>
                  ))
                ) : (
                  <option value="" className={styles.optionss}>
                    No companies available
                  </option>
                )}
              </select>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="cardNo" className={styles.labelinp}>
                Select Branch
              </label>
              <select
                className={styles.form__input}
                name="branchname"
                id="branchname"
                value={selectedBranchCode}
                onChange={handleBranchChange}
              >
                <option value="">Select Branch</option>
                {branch && branch.length > 0 ? (
                  branch.map((bra) => (
                    <option key={bra.id} value={bra.Code}>
                      {bra.Name}
                    </option>
                  ))
                ) : (
                  <option value="">No branches available</option>
                )}
              </select>
            </Col>

            {/* Search for Employee Name */}
            {/* <Col className={`${styles.col}`}>
              <label htmlFor="employeeSearch" className={styles.labelinp}>
                Search Employee
              </label>
              <input
                className={styles.form__input}
                type="text"
                id="employeeSearch"
                value={searchKeyword}
                onChange={handleSearch}
                placeholder="Search by employee name"
              />
            </Col> */}

            <Col className={`${styles.col}`}>
              <label htmlFor="employee" className={styles.labelinp}>
                Select Employee
              </label>

              {/* Search input above dropdown */}
              <input
                className={styles.form__input}
                type="text"
                id="employeeSearch"
                value={searchKeyword}
                onChange={handleSearch}
                placeholder="Search by employee name"
              />

              {/* Employee Dropdown */}
              <select
                name="employee"
                onChange={handleEmployeeChange}
                value={selectedEmployeeCode}
                id="employee"
                className={styles.form__input}
              >
                <option value="">Select Employee</option>

           
                {filteredEmployees && filteredEmployees.length > 0 ? (
                  filteredEmployees.map((emp) => (
                    <option
                      key={emp.EmpID}
                      value={emp.EmpID}
                      className={styles.optionss}
                    >
                      {emp.EmpID}
                    </option>
                  ))
                ) : (
                  <option value="" className={styles.optionss}>
                    No employees available
                  </option>
                )}
              </select>
            </Col>
          </Row>
        </form>
      </div>

      <div>
        <Row className={`${styles.row} mt-2 mb-3`}>
          <Col className={`${styles.col} text-center`}>
            <div>
              <h2>onBoarding</h2>
              <ProgressBar>
                <ProgressBar
                  striped
                  now={calculateProgress()}
                  style={getProgressBarStyle(calculateProgress())}
                  key={1}
                  label={`${calculateProgress()}%`}
                  title={getProgressTooltip()}
                />
              </ProgressBar>
            </div>
          </Col>
        </Row>
      </div>

      <Container className={`${styles.container}`}>
        <form onSubmit={handleFormSubmit}>
          {renderSection()} 

          {progress===100&&(
        <input
        className={`${styles.submitButton}`}
        type="submit"
        value="Preview"
        onClick={handlePreview} 
      />
          )} 
  
        </form>
      </Container>

      {showPreview && (
         <div className={styles.overlay} onClick={closeDetails}>

       
            <div onClick={handleClosePreview}
              className={styles.detailsCard}
        
            >
                   <button className={styles.closeButton} onClick={closeDetails}>
                      X
                    </button>
            <h3>Form Preview</h3>
            <div>
              {Object.keys(formData).map((field, index) => (
                <div key={index}>
                  <label>{field}:</label>
                  <span>{formData[field] || 'Not filled'}</span>
                </div>
              ))}
            </div>
            <div>
              {checkFields().length > 0 && (
                <div className="alert">
                  <h4>Missing Fields</h4>
                  <ul>
                    {checkFields().map((field, index) => (
                      <li key={index}>{field}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <button onClick={handleFormSubmit}>Submit</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}

      <Row className={`${styles.row} mt-1 mb-2`}>
        <Col className={`${styles.col1} text-center`}>
       {progress !==100 && (
           <button
           className={`${styles.submitButton}`}
           type="button"  
           onClick={handleNextSection}
         >
           Save And Next
           <GrFormNextLink className={styles.menic} />
         </button>
       )}
          <button
            className={`${styles.submitButton}`}
            type="button"
            onClick={handlePreviousSection}
          >
            <GrFormPreviousLink className={styles.menic} />
            Previous
          </button>
    
        </Col>
     
      </Row>
    </>
  );
};

export default EmployeeMaster;
