

import { Row, Col } from 'react-bootstrap';
import styles from './EmployeeMaster.module.css'; 
import PropTypes from 'prop-types';
import InputField from './Fields/InputFields';
const SectionA = ({ formData, handleInputChange }) => {

  console.log("formData",formData)

  const {
    Name,
    CardNo,
    EmpID,
    EmpId1,
    EmpType,
    Sex,
    DoB,
    BloodGroup,
    MaritalStatus,
    SpouseName,
    SpouseDOb,
    SpouseAadharno,
    FatherName,
    FatherDOB,
    FatherAadharno,
    // MotherName,
    MotherDOB,
    MotherAadharno,
    Child1Name,
    Child1DOB,
    Child1Gender,
    Child1Aadharno,
    Child2Name,
    Child2DOB,
    Child2Gender,
    Child2Aadharno,
    Child3Name,
    Child3DOB,
    Child3Gender,
    Child3Aadharno,
    Child4Name,
    Child4DOB,
    Child4Gender,
    Child4Aadharno,
    NomeneeName,
    ReleationwithNomnee,
    MobileNo,
    PanNo,Email,PhoneNo}=formData
    SectionA.propTypes = {
      formData: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        CardNo: PropTypes.string.isRequired,
        EmpID: PropTypes.string.isRequired,
        EmpId1: PropTypes.string,
        EmpType: PropTypes.string.isRequired,
        Sex: PropTypes.string.isRequired,
        DoB: PropTypes.string.isRequired,
        BloodGroup: PropTypes.string,
        MaritalStatus: PropTypes.string,
        SpouseName: PropTypes.string,
        SpouseDOb: PropTypes.string,
        SpouseAadharno: PropTypes.string,
        FatherName: PropTypes.string.isRequired,
        FatherDOB: PropTypes.string.isRequired,
        FatherAadharno: PropTypes.string,
        MotherName: PropTypes.string,
        MotherDOB: PropTypes.string,
        MotherAadharno: PropTypes.string,
        Child1Name: PropTypes.string,
        Child1DOB: PropTypes.string,
        Child1Gender: PropTypes.string,
        Child1Aadharno: PropTypes.string,
        Child2Name: PropTypes.string,
        Child2DOB: PropTypes.string,
        Child2Gender: PropTypes.string,
        Child2Aadharno: PropTypes.string,
        Child3Name: PropTypes.string,
        Child3DOB: PropTypes.string,
        Child3Gender: PropTypes.string,
        Child3Aadharno: PropTypes.string,
        Child4Name: PropTypes.string,
        Child4DOB: PropTypes.string,
        Child4Gender: PropTypes.string,
        Child4Aadharno: PropTypes.string,
        NomeneeName: PropTypes.string.isRequired,
        ReleationwithNomnee: PropTypes.string.isRequired,
        MobileNo: PropTypes.string.isRequired,
        PanNo: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        PhoneNo: PropTypes.string.isRequired
      }).isRequired,
      handleInputChange: PropTypes.func.isRequired
    };
  return (
    <section className={styles.sectionA}>

<h3>Personal Details</h3>

              <Row className={`${styles.row} mt-3 mb-3`}>
                <Col className={`${styles.col}`}>
                  <label className={styles.labelinp} htmlFor="applicationType">
                    Application Type
                  </label>
                  <select
                    className={`${styles.selectin}`}
                    id="applicationType"
                    name="applicationType"
                    // value={applicationType}
                    onChange={handleInputChange}
                  >
                    <option value="" className={styles.optionss}>
                      Select Application Type
                    </option>
                    <option value="email">Direct</option>
                    <option value="web">Application Form</option>
                  </select>
                </Col>
                <Col className={`${styles.col}`}>
                <InputField
          label="Card No."
          name="CardNo"
          value={CardNo}
          placeholder="Card No"
          onChange={handleInputChange}
        />
                </Col>
                <Col className={`${styles.col}`}>
             
                  <InputField
                    className={styles.form__input}
                    label='Employee Code'
                    name="employeeCode"
                    type="text"
                    placeholder="Employee Code"
                    value={EmpID || ""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`} style={{display:"hidden"}}>
              
                  <InputField
                    className={styles.form__input}
                    label="Employee Id"
                    name="employeeCode"
                    type="text"
                    placeholder="Employee Code"
                    value={EmpId1 || ""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
              
                  <InputField
                    className={styles.form__input}
                    label="Employee Name"
                    name="Name"
                    type="text"
                    placeholder="Employee Name"
                    value={Name || ""}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>

              <Row className={`${styles.row} mt-3 mb-3`}>
     
                <Col className={`${styles.col}`}>
               
                  <InputField
                    className={styles.form__input}
                    label="Employee Type"
                    name="empType"
                    type="text"
                    placeholder="Employee Type"
                    value={EmpType || ""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
             
                  <InputField
                    className={styles.form__input}
                    label="Gender"
                    name="Sex"
                    type="text"
                    placeholder="Gender"
                    value={Sex || ""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
             
                  <InputField
                    className={styles.form__input}
                    label="Date of Birth"
                    name="DoB"
                    type="date"
                    value={DoB || ""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
               
                  <InputField
                    className={styles.form__input}
                    label='Pan No.'
                    name="PanNo"
                    type="text"
                    placeholder="PanNo"
                    value={PanNo || ""}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
              <Row className={`${styles.row} mt-3 mb-3`}>
              <Col className={`${styles.col}`}>
              
                  <InputField
                    className={styles.form__input}
                    name="PhoneNo"
                    label='Phone No.'
                    type="number"
                    placeholder="Enter Mobile No"
                    value={PhoneNo||"" }
                    onChange={handleInputChange}
                  />
                </Col>
              <Col className={`${styles.col}`}>
              
                  <InputField
                    className={styles.form__input}
                    label="Mobile No."
                    name="MobileNo"
                    type="number"
                    placeholder="Enter Mobile No"
                    value={MobileNo || ""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
             
                  <InputField
                    className={styles.form__input}
                    label="Email"
                    name="Email"
                    type="email"
                    placeholder="Enter Email"
                    value={Email || ""}
                    onChange={handleInputChange}
                  />
                </Col>
              <Col className={`${styles.col}`}>
            
                  <InputField
                    className={styles.form__input}
                    label='Spouse Aadhar No'
                    name="SpouseAadharno"
                    type="text"
                    placeholder="Enter Spouse Aadhar No"
                    value={SpouseAadharno || ""}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>

              <Row className={`${styles.row} mt-3 mb-3`}>
                <Col className={`${styles.col}`}>
                  <InputField
                    className={styles.form__input}
                    label="Blood Group"
                    name="BloodGroup"
                    type="text"
                    placeholder="Blood Group"
                    value={BloodGroup || ""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>

                  <InputField
                    className={styles.form__input}
                    label='Marital Status'
                    name="MaritalStatus"
                    type="text"
                    placeholder="Marital Status"
                    value={MaritalStatus||""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
            
                  <InputField
                    className={styles.form__input}
                    label=" Spouse Name"
                    name="SpouseName"
                    type="text"
                    placeholder="Spouse Name"
                    value={SpouseName||""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
              
                  <InputField
                    className={styles.form__input}
                    label='Father Name'
                    name="FatherName"
                    type="text"
                    placeholder="Father Name"
                    value={FatherName||""}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>

              <Row className={`${styles.row} mt-3 mb-3`}>
                <Col className={`${styles.col}`}>
                
                  <InputField
                    className={styles.form__input}
                    label='Mother Name'
                    name="MotherName"
                    type="text"
                    placeholder="Mother Name"
                    value={formData.MotherName||""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
             
                  <InputField
                    className={styles.form__input}
                    label='Fathers Date of Birth'
                    name="FatherDOB"
                    type="date"
                    value={FatherDOB||""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
            
                  <InputField
                    className={styles.form__input}
                    label='Mothers Date of Birth'
                    name="MotherDOB"
                    type="date"
                    value={MotherDOB||""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
           
                  <InputField
                    className={styles.form__input}
                    label=" Spouse Date of Birth"
                    name="SpouseDOb"
                    type="date"
                    value={SpouseDOb||""}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>

              <Row className={`${styles.row} mt-3 mb-3`}>
                <Col className={`${styles.col}`}>
             
                  <InputField
                    className={styles.form__input}
                    label=" Child 1 Name"
                    name="Child1Name"
                    type="text"
                    placeholder="Child 1 Name"
                    value={Child1Name||""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
           
                  <InputField
                    className={styles.form__input}
                    label='Child 1 Date of Birth'
                    name="Child1DOB"
                    type="date"
                    value={Child1DOB||""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
             
                  <InputField
                    className={styles.form__input}
                    label="Child 1 Gender"
                    name="Child1Gender"
                    type="text"
                    placeholder="Child 1 Gender"
                    value={Child1Gender||""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
             
                  <InputField
                    className={styles.form__input}
                    label="Child 1 Aadhar"
                    name="Child1Aadharno"
                    type="text"
                    placeholder="Enter Aadhar Child 1"
                    value={Child1Aadharno || ""}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>

         
              <Row className={`${styles.row} mt-3 mb-3`}>
              <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Child 2 Name'
      name="Child2Name"
      type="text"
      placeholder="Child 2 Name"
      value={Child2Name || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>
 
    <InputField
      className={styles.form__input}
      label="Child 2 Date of Birth"
      name="Child2DOB"
      type="date"
      value={Child2DOB || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label="Child 2 Gender"
      name="Child2Gender"
      type="text"
      placeholder="Child 2 Gender"
      value={Child2Gender || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label="Child 2 Aadhar"
      name="Child2Aadharno"
      type="text"
      placeholder="Enter Aadhar Child 2"
      value={Child2Aadharno || ""}
      onChange={handleInputChange}
    />
  </Col>
              
              </Row>
              <Row className={`${styles.row} mt-3 mb-3`}>
              <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Child 3 Name'
      name="Child3Name"
      type="text"
      placeholder="Child 3 Name"
      value={Child3Name || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label=" Child 3 Date of Birth"
      name="Child3DOB"
      type="date"
      value={Child3DOB || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label="Child 3 Gender"
      name="Child3Gender"
      type="text"
      placeholder="Child 3 Gender"
      value={Child3Gender || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Child 3 Aadhar'
      name="Child3Aadharno"
      type="text"
      placeholder="Enter Aadhar Child 3"
      value={Child3Aadharno || ""}
      onChange={handleInputChange}
    />
  </Col>
              </Row>
              <Row className={`${styles.row} mt-3 mb-3`}>

              <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Child 4 Name'
      name="Child4Name"
      type="text"
      placeholder="Child 4 Name"
      value={Child4Name || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label=" Child 4 Date of Birth"
      name="Child4DOB"
      type="date"
      value={Child4DOB || null}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Child 4 Gender'
      name="Child4Gender"
      type="text"
      placeholder="Child 4 Gender"
      value={Child4Gender || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Child 4 Aadhar'
      name="Child4Aadharno"
      type="text"
      placeholder="Enter Aadhar Child 4"
      value={Child4Aadharno || ""}
      onChange={handleInputChange}
    />
  </Col>
              </Row>
       
              <Row className={`${styles.row} mt-3 mb-3`}>
              <Col className={`${styles.col}`}>
             
                  <InputField
                    className={styles.form__input}
                    name="NomeneeName"
                    label='     Nominee Name'
                    type="text"
                    placeholder="Nominee Name"
                    value={NomeneeName || ""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
             
                  <InputField
                    className={styles.form__input}
                    name="ReleationwithNomnee"
                    label='Relation with Nominee'
                    type="text"
                    placeholder="Relation with Nominee"
                    value={ReleationwithNomnee}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
             
                  <InputField
                    className={styles.form__input}
                    label='Father Aadhar No'
                    name="FatherAadharno"
                    type="text"
                    placeholder="Enter Father Aadhar No"
                    value={FatherAadharno || ""}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
               
                  <InputField
                    className={styles.form__input}
                    label='Mother Aadhar No'
                    name="MotherAadharno"
                    type="text"
                    placeholder="Enter Mother Aadhar No"
                    value={MotherAadharno || ""}
                    onChange={handleInputChange}
                  />
                </Col>
        

              </Row>

    </section>
  );
};

export default SectionA;

