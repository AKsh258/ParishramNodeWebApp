import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "./EmployeeMaster.module.css";
import { FaBuildingUser } from "react-icons/fa6";
import { HiMiniCursorArrowRipple } from "react-icons/hi2";
import { GiTreeBranch } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { BranchName, companyName_fetched } from "../../../Redux/Features/Counter/EmployeeMaster/EmployeeMaster_Slice";
const EmployeeMaster = () => {

  const [showRow1, setShowRow1] = useState(false);
  const [showRow2, setShowRow2] = useState(false);
  const [showEmployeeNameDiv, setShowEmployeeNameDiv] = useState(false);
  const [selectedCompanyCode, setSelectedCompanyCode] = useState('');

const dispatch=useDispatch()
const {employee} = useSelector(state => state.employee);
// console.log("http://localhost:4000/company---------------------------------",employee)
  const toggleRow1 = () => {
    setShowRow1(!showRow1); 
    setShowRow2(false); 
  };

  const toggleRow2 = () => {
    setShowRow2(!showRow2); 
    setShowRow1(false);
  };
const toggleEmployeeNameDiv=()=>{
  setShowEmployeeNameDiv(!showEmployeeNameDiv);
}
useEffect(() => {
dispatch(companyName_fetched())

}, [dispatch])

  const handleCompanyChange = (event) => {
    const companyCode = event.target.value; 
    setSelectedCompanyCode(companyCode); 

  
    if (companyCode) {
      dispatch(BranchName({ CompanyCode: companyCode }));
    }
  };
  return (
    <>
    <div>
   
    <form  className={styles.formconatiner1}>

          <Row className={`${styles.row1}`}>
          <Col className={`${styles.col}`}>
  <label className={styles.labelinp} htmlFor="applicationType">
    Company Name
  </label>
  <select className={`${styles.selectin}`} id="applicationType"    value={selectedCompanyCode}   onChange={handleCompanyChange}>
  
    <option value="" className={styles.optionss}>Company Name</option>

   
    {employee && employee.length > 0 ? (
      employee.map((emp) => (
        <option key={emp.id} value={emp.Code} className={styles.optionss}>
          {emp.Name}
        </option>
      ))
    ) : (
      <option value="" className={styles.optionss}>No companies available</option>
    )}
  </select>
</Col>

            <Col className={`${styles.col}`}>
              <label htmlFor="" className={styles.labelinp}>
              Select Branch
              </label>
              <input className={styles.form__input} type="text" placeholder="Select Branch" />
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="cardNo" className={styles.labelinp}>
           Select Emploayee
              </label>
              <input className={styles.form__input} type="text" name="cardNo" placeholder="Select Emploayee" />
            </Col>
        
          </Row>
          </form>
          <Row className={`${styles.row} mt-5 mb-3`}>
        <Col className={`${styles.col} text-center`}>
        <div>
      <ProgressBar>
        <ProgressBar striped variant="success" now={35} key={1} label={`${35}%`} />
        <ProgressBar variant="warning" now={20} key={2} label={`${20}%`} />
        <ProgressBar striped variant="danger" now={10} key={3} label={`${10}%`} />
     
      </ProgressBar>
    </div>
        </Col>
        </Row>
    </div>
      <Container className={`${styles.container} `}>
   
  
    
        <form>
          <Row className={`${styles.row} mt-3 mb-3`}>
            <Col className={`${styles.col}`}>
              <label className={styles.labelinp} htmlFor="">
                Application Type
              </label>
              <select className={`${styles.selectin} `} id="applicationType">
      <option  value="" className={styles.optionss}>Select Application Type</option>
      <option value="email">Direct</option>
      <option value="web">Application Form</option>
    
    </select>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="" className={styles.labelinp}>
                Empty Field
              </label>
              <input className={styles.form__input} type="text" placeholder="Empty" />
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="cardNo" className={styles.labelinp}>
                Card No
              </label>
              <input className={styles.form__input} type="text" name="cardNo" placeholder="CardNo" />
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="employeeName" className={styles.labelinp}>
                Employee Name
              </label>
            <div style={{display:"flex"}}>
            <input className={styles.form__input} name="employeeName" type="text" placeholder="Employee Name" />
              <div className={`${styles.iconWrapper}`}>
                <button
                  type="button"
                  onClick={toggleEmployeeNameDiv}
                  className="btn "
                >
                <FaBuildingUser className={styles.menic}/>
                </button>
              </div>
            </div>
            </Col>
          </Row>
             {/* Conditionally render the div when the icon is clicked */}
             {showEmployeeNameDiv && (
            <div className={`${styles.employeeNameDiv} mt-2 bg-dark h-50% w-50%`}>
              <label htmlFor="employeeName">Employee Full Name</label>
              <input
                className={styles.form__input}
                type="text"
                placeholder="Enter Full Name"
                name="employeeName"
                id="employeeName"
              />
            </div>
          )}
          <Row className={`${styles.row} mt-3 mb-3`}>
            <Col className={`${styles.col}`}>
              <label className={styles.labelinp} htmlFor="employeecode">
               Employee Code
              </label>
              <input className={styles.form__input} type="text"  name="employeecode" placeholder="  Employee Code" />
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="" className={styles.labelinp}>
               Employee Type
              </label>
              <select className={`${styles.selectin} `} id="applicationType">
      <option  value="" className={styles.optionss}>Select Employee Type</option>
      <option value="Full Time" className={styles.optionss}>Full Time</option>
      <option value="Part Time" className={styles.optionss}>Application Form</option>
    
    </select>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="department" className={styles.labelinp}>
            Department
              </label>
              <div className={`${styles.inputContainer}`}>
        <input
          className={styles.form__input}
          type="text"
          id="department"
          placeholder="Department"
        />
        
        <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

      </div>
       
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="degination" className={styles.labelinp}>
               Degination
              </label>
              <div className={`${styles.inputContainer}`}>
              <input className={styles.form__input} type="text" placeholder="Degination" />
             
              <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

</div>
            </Col>
          </Row>


          {/* dbcjrhfvhdjfvcbhdjfvbhdrfvb */}
          <Row className={`${styles.row} mt-3 mb-3`}>
          <Col className={`${styles.col}`}>
              <label htmlFor="employeeName" className={styles.labelinp}>
                Branch Name 
              </label>
            <div style={{display:"flex"}}>
            <input className={styles.form__input} name="branchName" type="text" placeholder="Branch Name" />
              <div className={`${styles.iconWrapper}`}>
                <button
                  type="button"
                  onClick={toggleEmployeeNameDiv}
                  className="btn"
                >
                <GiTreeBranch className={styles.menic}/>
                </button>
              </div>
            </div>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="" className={styles.labelinp}>
              Work Location
              </label>
              <select className={`${styles.selectin} `} id="applicationType">
      <option  value="" className={styles.optionss}>Select Employee Type</option>
      <option value="Full Time" className={styles.optionss}>Full Time</option>
      <option value="Part Time" className={styles.optionss}>Application Form</option>
    
    </select>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="shiftCategory" className={styles.labelinp}>
              Shift Category
              </label>
              <div className={`${styles.inputContainer}`}>
        <input
          className={styles.form__input}
          type="text"
          id="shiftCategory"
          placeholder="Shift Category"
        />
        
        <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

      </div>
       
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="garde" className={styles.labelinp}>
      Grade
              </label>
              <div className={`${styles.inputContainer}`}>
              <input className={styles.form__input} type="text" placeholder="Grade" />
             
              <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

</div>
            </Col>
          </Row>
          {/* Conditionally render the div when the icon is clicked */}
          {showEmployeeNameDiv && (
            <div className={`${styles.employeeNameDiv} mt-2 bg-dark h-50% w-50%`}>
              <label htmlFor="employeeName">Employee Full Name</label>
              <input
                className={styles.form__input}
                type="text"
                placeholder="Enter Full Name"
                name="employeeName"
                id="employeeName"
              />
            </div>
          )}


          {/* kjbj============================================================================================ */}
             {/* dbcjrhfvhdjfvcbhdjfvbhdrfvb */}
             <Row className={`${styles.row} mt-3 mb-3`}>
         
            <Col className={`${styles.col}`}>
              <label htmlFor="dob" className={styles.labelinp}>
             Date Of Birth
              </label>
              <div className={`${styles.inputContainer}`}>
        <input
          className={styles.form__input}
          type="text"
          id="dob"
          name="dob"
          placeholder="DoB"
        />
        
        <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

      </div>
       
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="sex" className={styles.labelinp}>
      Sex
              </label>
              <div className={`${styles.inputContainer}`}>
              <input className={styles.form__input} type="text" placeholder="Sex" />
             
              <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

</div>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="categoryHierarcgy" className={styles.labelinp}>
              Category Hierarchy
              </label>
            <div style={{display:"flex"}}>
            <input className={styles.form__input} name="branchName" type="text" placeholder="Category Hierarcgy" />
              <div className={`${styles.iconWrapper}`}>
                <button
                  type="button"
                  onClick={toggleEmployeeNameDiv}
                  className="btn"
                >
                <GiTreeBranch className={styles.menic}/>
                </button>
              </div>
            </div>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="organisationhierarchy" className={styles.labelinp}>
              Organisation Hierarchy
              </label>
            <div style={{display:"flex"}}>
            <input className={styles.form__input} name="branchName" type="text" placeholder="  Organisation Hierarchy" />
              <div className={`${styles.iconWrapper}`}>
                <button
                  type="button"
                  onClick={toggleEmployeeNameDiv}
                  className="btn"
                >
                <GiTreeBranch className={styles.menic}/>
                </button>
              </div>
            </div>
            </Col>
          </Row>
           {/* kjbj============================================================================================ */}
             {/* dbcjrhfvhdjfvcbhdjfvbhdrfvb */}
             <Row className={`${styles.row} mt-3 mb-3`}>
         
            <Col className={`${styles.col}`}>
              <label htmlFor="productName" className={styles.labelinp}>
          Prduct Name
              </label>
              <div className={`${styles.inputContainer}`}>
        <input
          className={styles.form__input}
          type="text"
          id="productName"
          name="productName"
          placeholder="product Name"
        />
        
        <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

      </div>
       
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="joined" className={styles.labelinp}>
      Joined
              </label>
              <div className={`${styles.inputContainer}`}>
              <input className={styles.form__input} type="checkbox" placeholder="Joined" />
             
              <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

</div>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="ctc" className={styles.labelinp}>
            Ctc
              </label>
            <div style={{display:"flex"}}>
            <input className={styles.form__input} name="branchName" type="text" placeholder="Ctc" />
              <div className={`${styles.iconWrapper}`}>
                <button
                  type="button"
                  onClick={toggleEmployeeNameDiv}
                  className="btn"
                >
                <GiTreeBranch className={styles.menic}/>
                </button>
              </div>
            </div>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="refresh" className={styles.labelinp}>
      Refresh
              </label>
              <div className={`${styles.inputContainer}`}>
              <input className={styles.form__input} type="checkbox" placeholder="Refresh" />
             
              <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

</div>
            </Col>
          </Row>
          {/* Conditionally render the div when the icon is clicked */}
          {showEmployeeNameDiv && (
            <div className={`${styles.employeeNameDiv} mt-2 bg-dark h-50% w-50%`}>
              <label htmlFor="employeeName">Employee Full Name</label>
              <input
                className={styles.form__input}
                type="text"
                placeholder="Enter Full Name"
                name="employeeName"
                id="employeeName"
              />
            </div>
          )}
          <Row className={`${styles.row} bg-dark mt-3 mb-3`}>
            <Col className={`${styles.col} text-center`}>
              <button type="button" className="btn btn-primary" onClick={toggleRow1}>
             Personal
              </button>
            </Col>
            <Col className={`${styles.col} text-center`}>
              <button type="button" className="btn btn-primary" onClick={toggleRow2}>
           Entitlement
              </button>
            </Col>
            <Col className={`${styles.col} text-center`}>
              <button type="button" className="btn btn-primary">
           others
              </button>
            </Col>
          </Row>

          {/* Conditionally render Row1 based on the showRow1 state */}
          {showRow1 && (
            <Row className={`${styles.row1} mt-3 mb-3`}>
              <Col className={`${styles.col} text-center`}>Row1</Col>
              <Col className={`${styles.col} text-center`}>Row1</Col>
              <Col className={`${styles.col} text-center`}>Row1</Col>
            </Row>
          )}

          {/* Conditionally render Row2 based on the showRow2 state */}
          {showRow2 && (
         <div className={styles.row1}>
            <Row className={`${styles.row} mt-3 mb-3`}>
            <Col className={`${styles.col}`}>
              <label className={styles.labelinp} htmlFor="">
                Application Type
              </label>
              <select className={`${styles.selectin} `} id="applicationType">
      <option  value="" className={styles.optionss}>Select Application Type</option>
      <option value="email">Direct</option>
      <option value="web">Application Form</option>
    
    </select>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="" className={styles.labelinp}>
                Empty Field
              </label>
              <input className={styles.form__input} type="text" placeholder="Empty" />
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="cardNo" className={styles.labelinp}>
                Card No
              </label>
              <input className={styles.form__input} type="text" name="cardNo" placeholder="CardNo" />
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="employeeName" className={styles.labelinp}>
                Employee Name
              </label>
            <div style={{display:"flex"}}>
            <input className={styles.form__input} name="employeeName" type="text" placeholder="Employee Name" />
              <div className={`${styles.iconWrapper}`}>
                <button
                  type="button"
                  onClick={toggleEmployeeNameDiv}
                  className="btn "
                >
                <FaBuildingUser className={styles.menic}/>
                </button>
              </div>
            </div>
            </Col>
          </Row>
             {/* Conditionally render the div when the icon is clicked */}
             {showEmployeeNameDiv && (
            <div className={`${styles.employeeNameDiv} mt-2 bg-dark h-50% w-50%`}>
              <label htmlFor="employeeName">Employee Full Name</label>
              <input
                className={styles.form__input}
                type="text"
                placeholder="Enter Full Name"
                name="employeeName"
                id="employeeName"
              />
            </div>
          )}
          <Row className={`${styles.row} mt-3 mb-3`}>
            <Col className={`${styles.col}`}>
              <label className={styles.labelinp} htmlFor="employeecode">
               Employee Code
              </label>
              <input className={styles.form__input} type="text"  name="employeecode" placeholder="  Employee Code" />
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="" className={styles.labelinp}>
               Employee Type
              </label>
              <select className={`${styles.selectin} `} id="applicationType">
      <option  value="" className={styles.optionss}>Select Employee Type</option>
      <option value="Full Time" className={styles.optionss}>Full Time</option>
      <option value="Part Time" className={styles.optionss}>Application Form</option>
    
    </select>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="department" className={styles.labelinp}>
            Department
              </label>
              <div className={`${styles.inputContainer}`}>
        <input
          className={styles.form__input}
          type="text"
          id="department"
          placeholder="Department"
        />
        
        <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

      </div>
       
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="degination" className={styles.labelinp}>
               Degination
              </label>
              <div className={`${styles.inputContainer}`}>
              <input className={styles.form__input} type="text" placeholder="Degination" />
             
              <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

</div>
            </Col>
          </Row>


          {/* dbcjrhfvhdjfvcbhdjfvbhdrfvb */}
          <Row className={`${styles.row} mt-3 mb-3`}>
          <Col className={`${styles.col}`}>
              <label htmlFor="employeeName" className={styles.labelinp}>
                Branch Name 
              </label>
            <div style={{display:"flex"}}>
            <input className={styles.form__input} name="branchName" type="text" placeholder="Branch Name" />
              <div className={`${styles.iconWrapper}`}>
                <button
                  type="button"
                  onClick={toggleEmployeeNameDiv}
                  className="btn"
                >
                <GiTreeBranch className={styles.menic}/>
                </button>
              </div>
            </div>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="" className={styles.labelinp}>
              Work Location
              </label>
              <select className={`${styles.selectin} `} id="applicationType">
      <option  value="" className={styles.optionss}>Select Employee Type</option>
      <option value="Full Time" className={styles.optionss}>Full Time</option>
      <option value="Part Time" className={styles.optionss}>Application Form</option>
    
    </select>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="shiftCategory" className={styles.labelinp}>
              Shift Category
              </label>
              <div className={`${styles.inputContainer}`}>
        <input
          className={styles.form__input}
          type="text"
          id="shiftCategory"
          placeholder="Shift Category"
        />
        
        <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

      </div>
       
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="garde" className={styles.labelinp}>
      Grade
              </label>
              <div className={`${styles.inputContainer}`}>
              <input className={styles.form__input} type="text" placeholder="Grade" />
             
              <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

</div>
            </Col>
          </Row>
          {/* Conditionally render the div when the icon is clicked */}
          {showEmployeeNameDiv && (
            <div className={`${styles.employeeNameDiv} mt-2 bg-dark h-50% w-50%`}>
              <label htmlFor="employeeName">Employee Full Name</label>
              <input
                className={styles.form__input}
                type="text"
                placeholder="Enter Full Name"
                name="employeeName"
                id="employeeName"
              />
            </div>
          )}


          {/* kjbj============================================================================================ */}
             {/* dbcjrhfvhdjfvcbhdjfvbhdrfvb */}
             <Row className={`${styles.row} mt-3 mb-3`}>
         
            <Col className={`${styles.col}`}>
              <label htmlFor="dob" className={styles.labelinp}>
             Date Of Birth
              </label>
              <div className={`${styles.inputContainer}`}>
        <input
          className={styles.form__input}
          type="text"
          id="dob"
          name="dob"
          placeholder="DoB"
        />
        
        <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

      </div>
       
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="sex" className={styles.labelinp}>
      Sex
              </label>
              <div className={`${styles.inputContainer}`}>
              <input className={styles.form__input} type="text" placeholder="Sex" />
             
              <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

</div>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="categoryHierarcgy" className={styles.labelinp}>
              Category Hierarchy
              </label>
            <div style={{display:"flex"}}>
            <input className={styles.form__input} name="branchName" type="text" placeholder="Category Hierarcgy" />
              <div className={`${styles.iconWrapper}`}>
                <button
                  type="button"
                  onClick={toggleEmployeeNameDiv}
                  className="btn"
                >
                <GiTreeBranch className={styles.menic}/>
                </button>
              </div>
            </div>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="organisationhierarchy" className={styles.labelinp}>
              Organisation Hierarchy
              </label>
            <div style={{display:"flex"}}>
            <input className={styles.form__input} name="branchName" type="text" placeholder="  Organisation Hierarchy" />
              <div className={`${styles.iconWrapper}`}>
                <button
                  type="button"
                  onClick={toggleEmployeeNameDiv}
                  className="btn"
                >
                <GiTreeBranch className={styles.menic}/>
                </button>
              </div>
            </div>
            </Col>
          </Row>
           {/* kjbj============================================================================================ */}
             {/* dbcjrhfvhdjfvcbhdjfvbhdrfvb */}
             <Row className={`${styles.row} mt-3 mb-3`}>
         
            <Col className={`${styles.col}`}>
              <label htmlFor="productName" className={styles.labelinp}>
          Prduct Name
              </label>
              <div className={`${styles.inputContainer}`}>
        <input
          className={styles.form__input}
          type="text"
          id="productName"
          name="productName"
          placeholder="product Name"
        />
        
        <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

      </div>
       
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="joined" className={styles.labelinp}>
      Joined
              </label>
              <div className={`${styles.inputContainer}`}>
              <input className={styles.form__input} type="checkbox" placeholder="Joined" />
             
              <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

</div>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="ctc" className={styles.labelinp}>
            Ctc
              </label>
            <div style={{display:"flex"}}>
            <input className={styles.form__input} name="branchName" type="text" placeholder="Ctc" />
              <div className={`${styles.iconWrapper}`}>
                <button
                  type="button"
                  onClick={toggleEmployeeNameDiv}
                  className="btn"
                >
                <GiTreeBranch className={styles.menic}/>
                </button>
              </div>
            </div>
            </Col>
            <Col className={`${styles.col}`}>
              <label htmlFor="refresh" className={styles.labelinp}>
      Refresh
              </label>
              <div className={`${styles.inputContainer}`}>
              <input className={styles.form__input} type="checkbox" placeholder="Refresh" />
             
              <button className={styles.forgetapi_icon}><HiMiniCursorArrowRipple/></button>

</div>
            </Col>
          </Row>
            
         </div>
            
            
          )}
               <Row className={`${styles.row} mt-1 mb-2`}>
              <Col className={`${styles.col1} text-center`}>
              <input className={`${styles.submitButton} btn`} type="submit" value="Add" />
              <input className={`${styles.submitButton} btn`} type="submit" value="Cancel" />
              <input className={`${styles.submitButton} btn`} type="submit" value="Export" />
              </Col>
             
            </Row>
        </form>
      </Container>
    </>
  );
};

export default EmployeeMaster;
