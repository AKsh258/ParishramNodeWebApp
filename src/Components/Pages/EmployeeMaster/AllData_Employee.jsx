import { useEffect, useState } from "react";
import { TotalEmployee_Data } from "../../../Redux/Features/Counter/EmployeeMaster/EmployeeMaster_Slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./allData.module.css";
import { FaSearch, FaFilter } from "react-icons/fa";
import Pagination from "react-js-pagination";

const AllData_Employee = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const dispatch = useDispatch();
  const { allemployee, pagination } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(TotalEmployee_Data({ page }));
  }, [dispatch, page]);

  const filteredEmployees = allemployee.filter((employee) =>
    employee.EmpID.toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerPage = pagination.pageSize || 20;
  // const indexOfFirstItem = (page - 1) * itemsPerPage;
  // const indexOfLastItem = page * itemsPerPage;

  const currentItems = filteredEmployees;

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    dispatch(TotalEmployee_Data({ page: pageNumber }));
  };

  const handleDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  const closeDetails = () => {
    setSelectedEmployee(null);
  };

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>All Records Employees</h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 col-xl-4">
            <div className={styles.sidebar}>
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Employee by EmpID"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span className="input-group-text">
                  <FaSearch />
                </span>
              </div>
              <button className="btn btn-primary mb-4">
                <FaFilter /> Filter
              </button>
             
              <div className="page-info mb-4" style={{ color: "black" }}>
      
                <p>
                  <strong>Total Employees:</strong> {pagination.total}
                </p>
                <p>
                  <strong>Employees Per Page:</strong> {itemsPerPage}
                </p>
                <p>
                  <strong>Total Pages:</strong>
                  {Math.ceil(pagination.total / itemsPerPage)}
                </p>
                <p>
                  <strong>Active Employee No:</strong> {pagination.activeEmployees}
                </p>
                <p>
                <strong> InActive Employee No:</strong> {pagination.inActiveEmployees}
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-8 col-xl-8">
            <div className={styles.tableContainer}>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>EmpId</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Grade</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.EmpID}</td>
                      <td>{employee.Name}</td>
                      <td>{employee.Department}</td>
                      <td>{employee.Grade}</td>
                      <td>
                        <button
                          className="btn btn-info"
                          onClick={() => handleDetails(employee)}
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className={styles.paginationBox}>
                <Pagination
                  activePage={page}
                  totalItemsCount={pagination.total}
                  itemsCountPerPage={itemsPerPage}
                  onChange={handlePageChange}
                  prevPageText="Previous"
                  nextPageText="Next"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass={styles["page-item"]}
                  linkClass={styles["page-link"]}
                  activeClass={styles["pageItemActive"]}
                  activeLinkClass="pageLinkActive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedEmployee && (
  <div className={styles.overlay} onClick={closeDetails}>
    <div
      className={styles.detailsCard}
      onClick={(e) => e.stopPropagation()}
    >
      <button className={styles.closeButton} onClick={closeDetails}>
        X
      </button>
      <h3>Employee Details</h3>

      <div className={styles.cardContent}>
      <h3 style={{color:"black"}}>Personal Details</h3>
        <div className={styles.cardGrid}>

          <div className={styles.cardItem}>
            <strong>Name:</strong>
            <p>{selectedEmployee.Name}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>EmpID:</strong>
            <p>{selectedEmployee.EmpID}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Department:</strong>
            <p>{selectedEmployee.Department}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Grade:</strong>
            <p>{selectedEmployee.Grade}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Degination:</strong>
            <p>{selectedEmployee.Degination}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>ComanyCode:</strong>
            <p>{selectedEmployee.ComanyCode}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>BranchCode:</strong>
            <p>{selectedEmployee.BranchCode}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Position:</strong>
            <p>{selectedEmployee.BranchCode}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Address:</strong>
            <p>{selectedEmployee.Address}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>HierarchyCode:</strong>
            <p>{selectedEmployee.HierarchyCode}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>City:</strong>
            <p>{selectedEmployee.City}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Phone:</strong>
            <p>{selectedEmployee.Phone}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>PinCode:</strong>
            <p>{selectedEmployee.PinCode}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Email:</strong>
            <p>{selectedEmployee.Email}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Fax:</strong>
            <p>{selectedEmployee.Fax}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>OwnConv:</strong>
            <p>{selectedEmployee.OwnConv}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>DistFromHose:</strong>
            <p>{selectedEmployee.DistFromHose}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>PFNO:</strong>
            <p>{selectedEmployee.PFNO}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>ESICNo:</strong>
            <p>{selectedEmployee.ESICNo}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>panNo:</strong>
            <p>{selectedEmployee.panNo}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Married:</strong>
            <p>{selectedEmployee.Married}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>DoB:</strong>
            <p>{selectedEmployee.DoB}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>JoiningDt:</strong>
            <p>{selectedEmployee.JoiningDt}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Education:</strong>
            <p>{selectedEmployee.EduQualification}</p>
          </div>
        </div>
        
      </div>
    
      <div className={styles.cardContent}>
      <h3 style={{color:"black"}}>Personal -II</h3>
        <div className={styles.cardGrid}>

          <div className={styles.cardItem}>
            <strong>profQualififation:</strong>
            <p>{selectedEmployee.profQualififation}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>GrossSalary:</strong>
            <p>{selectedEmployee.GrossSalary}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>ownHouse:</strong>
            <p>{selectedEmployee.ownHouse}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>InActive:</strong>
            <p>{selectedEmployee.InActive}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>InActiveDate:</strong>
            <p>{selectedEmployee.InActiveDate}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Sex:</strong>
            <p>{selectedEmployee.Sex}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>BranchCode:</strong>
            <p>{selectedEmployee.BranchCode}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>CardNo:</strong>
            <p>{selectedEmployee.CardNo}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Comm:</strong>
            <p>{selectedEmployee.Comm}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>PresentAddress:</strong>
            <p>{selectedEmployee.PresentAddress}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>FatherName:</strong>
            <p>{selectedEmployee.FatherName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>MotherName:</strong>
            <p>{selectedEmployee.MotherName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>ShiftCode:</strong>
            <p>{selectedEmployee.ShiftCode}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>isOverTimeAllowed:</strong>
            <p>{selectedEmployee.isOverTimeAllowed}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>hasLeft:</strong>
            <p>{selectedEmployee.hasLeft}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>LeftDate:</strong>
            <p>{selectedEmployee.LeftDate}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>isAdvAcc:</strong>
            <p>{selectedEmployee.isAdvAcc}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>isTourAcc:</strong>
            <p>{selectedEmployee.isTourAcc}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>RegdNo:</strong>
            <p>{selectedEmployee.RegdNo}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>LevelCode:</strong>
            <p>{selectedEmployee.LevelCode}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Band:</strong>
            <p>{selectedEmployee.Band}</p>
          </div>
      
          <div className={styles.cardItem}>
            <strong>Sepration:</strong>
            <p>{selectedEmployee.Sepration}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>State:</strong>
            <p>{selectedEmployee.State}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>oldCode:</strong>
            <p>{selectedEmployee.oldCode}</p>
          </div>
        </div>
        
      </div>
      
      <div className={styles.cardContent}>
      <h3 style={{color:"black"}}>Address Details</h3>
        <div className={styles.cardGrid}>

          <div className={styles.cardItem}>
            <strong>Country:</strong>
            <p>{selectedEmployee.Country}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>AdvAcc:</strong>
            <p>{selectedEmployee.AdvAcc}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>TourAcc:</strong>
            <p>{selectedEmployee.TourAcc}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>TxtApplCode:</strong>
            <p>{selectedEmployee.TxtApplCode}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>MobileNo:</strong>
            <p>{selectedEmployee.MobileNo}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>IsESICaPPLICABLE:</strong>
            <p>{selectedEmployee.IsESICaPPLICABLE}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>PFCalculationType:</strong>
            <p>{selectedEmployee.PFCalculationType}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>EmpType:</strong>
            <p>{selectedEmployee.EmpType}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>UnitESIC:</strong>
            <p>{selectedEmployee.UnitESIC}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>UnitESICNo:</strong>
            <p>{selectedEmployee.UnitESICNo}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>BankName:</strong>
            <p>{selectedEmployee.BankName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>AccountNo:</strong>
            <p>{selectedEmployee.AccountNo}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>CustCode:</strong>
            <p>{selectedEmployee.CustCode}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>CustName:</strong>
            <p>{selectedEmployee.CustName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>IsBilled:</strong>
            <p>{selectedEmployee.IsBilled}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>IsLWFApplicable:</strong>
            <p>{selectedEmployee.IsLWFApplicable}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>RMEmpId:</strong>
            <p>{selectedEmployee.RMEmpId}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>RMEmpName:</strong>
            <p>{selectedEmployee.RMEmpName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>RMEmailId:</strong>
            <p>{selectedEmployee.RMEmailId}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>IsRM:</strong>
            <p>{selectedEmployee.IsRM}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>IsBranchHead:</strong>
            <p>{selectedEmployee.IsBranchHead}</p>
          </div>
      
          <div className={styles.cardItem}>
            <strong>ProductName:</strong>
            <p>{selectedEmployee.ProductName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Branchheadid:</strong>
            <p>{selectedEmployee.Branchheadid}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>BranchHeadName:</strong>
            <p>{selectedEmployee.BranchHeadName}</p>
          </div>
        </div>
        
      </div>
      <div className={styles.cardContent}>
      <h3 style={{color:"black"}}>Others</h3>
        <div className={styles.cardGrid}>

          <div className={styles.cardItem}>
            <strong>BranchheademailId:</strong>
            <p>{selectedEmployee.BranchheademailId}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>HeadId:</strong>
            <p>{selectedEmployee.HeadId}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>HeadName:</strong>
            <p>{selectedEmployee.HeadName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>HeadEmailId:</strong>
            <p>{selectedEmployee.HeadEmailId}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>IsHead:</strong>
            <p>{selectedEmployee.IsHead}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>UANNo:</strong>
            <p>{selectedEmployee.UANNo}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>HasRegin:</strong>
            <p>{selectedEmployee.HasRegin}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>ResignationDate:</strong>
            <p>{selectedEmployee.ResignationDate}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>AdharNo:</strong>
            <p>{selectedEmployee.AdharNo}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>AccountId:</strong>
            <p>{selectedEmployee.AccountId}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>AccountName:</strong>
            <p>{selectedEmployee.AccountName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>AccountNo:</strong>
            <p>{selectedEmployee.AccountNo}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>AccountEmailId:</strong>
            <p>{selectedEmployee.AccountEmailId}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>PTaxapplicable:</strong>
            <p>{selectedEmployee.PTaxapplicable}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>NameInBank:</strong>
            <p>{selectedEmployee.NameInBank}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>BloodGroup:</strong>
            <p>{selectedEmployee.BloodGroup}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>EduQualificationYear:</strong>
            <p>{selectedEmployee.EduQualificationYear}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>ProfQualificationYear:</strong>
            <p>{selectedEmployee.ProfQualificationYear}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>FirstCompanyName:</strong>
            <p>{selectedEmployee.FirstCompanyName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>FirstCompanyFromDate:</strong>
            <p>{selectedEmployee.FirstCompanyFromDate}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>FirstCompanyTodate:</strong>
            <p>{selectedEmployee.FirstCompanyTodate}</p>
          </div>
      
          <div className={styles.cardItem}>
            <strong>FirstCompanyDesignation:</strong>
            <p>{selectedEmployee.FirstCompanyDesignation}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>SecondCompanyName:</strong>
            <p>{selectedEmployee.SecondCompanyName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>SecondCompanyTodate:</strong>
            <p>{selectedEmployee.SecondCompanyTodate}</p>
          </div>
        </div>
        
      </div>
      <div className={styles.cardContent}>
      <h3 style={{color:"black"}}>RM Details</h3>
        <div className={styles.cardGrid}>

          <div className={styles.cardItem}>
            <strong>SecondCompanyTodate:</strong>
            <p>{selectedEmployee.SecondCompanyTodate}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>SecondCompanyDesignation:</strong>
            <p>{selectedEmployee.SecondCompanyDesignation}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>FatherDOB:</strong>
            <p>{selectedEmployee.FatherDOB}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>FatherAadharno:</strong>
            <p>{selectedEmployee.FatherAadharno}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>MotherDOB:</strong>
            <p>{selectedEmployee.MotherDOB}</p>
          </div>
          <div className={styles.MotherAadharno}>
            <strong>MotherAadharno:</strong>
            <p>{selectedEmployee.UANNo}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>StoreName:</strong>
            <p>{selectedEmployee.StoreName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Channel:</strong>
            <p>{selectedEmployee.Channel}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>ProductHeadName:</strong>
            <p>{selectedEmployee.ProductHeadName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>NationalProductHead:</strong>
            <p>{selectedEmployee.NationalProductHead}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>MaritalStatus:</strong>
            <p>{selectedEmployee.MaritalStatus}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>SpouseName:</strong>
            <p>{selectedEmployee.SpouseName}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>SpouseDOb:</strong>
            <p>{selectedEmployee.SpouseDOb}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>PTaxapplicable:</strong>
            <p>{selectedEmployee.PTaxapplicable}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>SpouseAadharno:</strong>
            <p>{selectedEmployee.SpouseAadharno}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child1Name:</strong>
            <p>{selectedEmployee.Child1Name}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child1DOB:</strong>
            <p>{selectedEmployee.Child1DOB}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child1Gender:</strong>
            <p>{selectedEmployee.Child1Gender}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child1Aadharno:</strong>
            <p>{selectedEmployee.Child1Aadharno}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Chile2Name:</strong>
            <p>{selectedEmployee.Chile2Name}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child2DOB:</strong>
            <p>{selectedEmployee.Child2DOB}</p>
          </div>
      
          <div className={styles.cardItem}>
            <strong>Child2Aadharno:</strong>
            <p>{selectedEmployee.Child2Aadharno}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child2Gender:</strong>
            <p>{selectedEmployee.Child2Gender}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>NomeneeName:</strong>
            <p>{selectedEmployee.NomeneeName}</p>
          </div>
        </div>
        
      </div>
      <div className={styles.cardContent}>
      <h3 style={{color:"black"}}>Education</h3>
        <div className={styles.cardGrid}>

          <div className={styles.cardItem}>
            <strong>ReleationwithNomnee:</strong>
            <p>{selectedEmployee.ReleationwithNomnee}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>NEsic:</strong>
            <p>{selectedEmployee.NEsic}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child3Name:</strong>
            <p>{selectedEmployee.Child3Name}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child3DOB:</strong>
            <p>{selectedEmployee.Child3DOB}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child3Gender:</strong>
            <p>{selectedEmployee.Child3Gender}</p>
          </div>
          <div className={styles.MotherAadharno}>
            <strong>Child3Aadharno:</strong>
            <p>{selectedEmployee.Child3Aadharno}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child4Name:</strong>
            <p>{selectedEmployee.Child4Name}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child4DOB:</strong>
            <p>{selectedEmployee.Child4DOB}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child4Gender:</strong>
            <p>{selectedEmployee.Child4Gender}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child4Aadharno:</strong>
            <p>{selectedEmployee.Child4Aadharno}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Division:</strong>
            <p>{selectedEmployee.Division}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Joined:</strong>
            <p>{selectedEmployee.Joined}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Org_Unit_Code:</strong>
            <p>{selectedEmployee.Org_Unit_Code}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Profile_Code:</strong>
            <p>{selectedEmployee.Profile_Code}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>SpouseAadharno:</strong>
            <p>{selectedEmployee.SpouseAadharno}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Div_Code:</strong>
            <p>{selectedEmployee.Div_Code}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Child1DOB:</strong>
            <p>{selectedEmployee.Child1DOB}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Dept_Code:</strong>
            <p>{selectedEmployee.Dept_Code}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Sale_Office_Code:</strong>
            <p>{selectedEmployee.Sale_Office_Code}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Designation_Code:</strong>
            <p>{selectedEmployee.Designation_Code}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>ReportingTo:</strong>
            <p>{selectedEmployee.ReportingTo}</p>
          </div>
      
          <div className={styles.cardItem}>
            <strong>UserType:</strong>
            <p>{selectedEmployee.UserType}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>T_EndDate:</strong>
            <p>{selectedEmployee.T_EndDate}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>CTC:</strong>
            <p>{selectedEmployee.CTC}</p>
          </div>
        </div>
        
      </div>
      <div className={styles.cardContent}>
      <h3 style={{color:"black"}}>Family Details</h3>
        <div className={styles.cardGrid}>

          <div className={styles.cardItem}>
            <strong>WeekOff:</strong>
            <p>{selectedEmployee.WeekOff}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>TL_Emp_Code:</strong>
            <p>{selectedEmployee.TL_Emp_Code}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>TL_Emp_Name:</strong>
            <p>{selectedEmployee.TL_Emp_Name}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>TL_Email:</strong>
            <p>{selectedEmployee.TL_Email}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>isTL:</strong>
            <p>{selectedEmployee.isTL}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>FaxOtp:</strong>
            <p>{selectedEmployee.FaxOtp}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Abscond:</strong>
            <p>{selectedEmployee.Abscond}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Office_Email:</strong>
            <p>{selectedEmployee.Office_Email}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Store_Code:</strong>
            <p>{selectedEmployee.Store_Code}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>StoreLocation:</strong>
            <p>{selectedEmployee.StoreLocation}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>SalesOffice:</strong>
            <p>{selectedEmployee.SalesOffice}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>Region:</strong>
            <p>{selectedEmployee.Region}</p>
          </div>
          <div className={styles.cardItem}>
            <strong>ActualChannel:</strong>
            <p>{selectedEmployee.ActualChannel}</p>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default AllData_Employee;
