import { Row, Col } from "react-bootstrap";
import styles from "./EmployeeMaster.module.css";
import PropTypes from "prop-types";
import InputField from "./Fields/InputFields";

const SectionC = ({ formData, handleInputChange }) => {
  const {
    ResignationDate,
    HasLeft,
    LeftDate,
    FirstCompanyName,
    FirstCompanyFromDate,
    FirstCompanyToDate,
    SecondCompanyName,
    SecondCompanyFromDate,
    SecondCompanyTodate,

    FirstCompanyDesignation,
    SecondCompanyDesignation,
    ReportingTo,
    Joined,
    JoiningDate,
    IsActive,
    IsHead,
    WorkLocation,
    Grade,
    Designation,
    DesignationCode,
    Department,
    DeptCode,
    Separation,
    oldCode,
    CompanyCode,
    CustCode,
    CustName,
    Region,
    HierarchyCode
  } = formData;
  SectionC.propTypes = {
    formData: PropTypes.shape({
      ResignationDate: PropTypes.string,
      HasLeft: PropTypes.bool,
      LeftDate: PropTypes.string,
      FirstCompanyName: PropTypes.string,
      FirstCompanyFromDate: PropTypes.string,
      FirstCompanyToDate: PropTypes.string,
      SecondCompanyName: PropTypes.string,
      SecondCompanyFromDate: PropTypes.string,
      SecondCompanyTodate: PropTypes.string,
      FirstCompanyDesignation: PropTypes.string,
      SecondCompanyDesignation: PropTypes.string,
      ReportingTo: PropTypes.string,
      Joined: PropTypes.bool,
      JoiningDate: PropTypes.string,
      IsActive: PropTypes.bool,
      IsHead: PropTypes.bool,
      WorkLocation: PropTypes.string,
      Grade: PropTypes.string,
      Designation: PropTypes.string,
      DesignationCode: PropTypes.string,
      Department: PropTypes.string,
      DeptCode: PropTypes.string,
      CompanyCode: PropTypes.string,
      CustCode: PropTypes.string,
      CustName: PropTypes.string,
      Region: PropTypes.string,
      HierarchyCode: PropTypes.string,
      Separation: PropTypes.string,
      oldCode: PropTypes.string
    }).isRequired,

    handleInputChange: PropTypes.func.isRequired // Ensures handleInputChange is passed as a function
  };
  return (
    <>
      <h3>Employement Details </h3>
      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Designation"
            name="Designation"
            type="text"
            value={Designation}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="DesignationCode"
            name="DesignationCode"
            type="text"
            value={DesignationCode}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Department"
            name="Department"
            type="text"
            value={Department}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Dept Code"
            name="DeptCode"
            type="text"
            value={DeptCode}
            onChange={handleInputChange}
          />
        </Col>
      </Row>

      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Company Code"
            name="CompanyCode"
            type="text"
            value={CompanyCode}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Cust Code"
            name="CustCode"
            type="text"
            value={CustCode}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Cust Name"
            name="CustName"
            type="text"
            value={CustName}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Region"
            name="Region"
            type="text"
            value={Region}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Grade"
            name="Grade"
            type="text"
            value={Grade}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Work Location"
            name="WorkLocation"
            type="text"
            placeholder="Enter Work Location"
            value={WorkLocation || ""}
            onChange={handleInputChange}
          />
        </Col>

        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Reporting To"
            name="ReportingTo"
            type="text"
            value={ReportingTo}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Resignation Date"
            name="ResignationDate"
            type="date"
            value={ResignationDate}
            onChange={handleInputChange}
          />
        </Col>
      </Row>

      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="First Company Name"
            name="FirstCompanyName"
            type="text"
            value={FirstCompanyName}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="First Company From Date"
            name="FirstCompanyFromDate"
            type="date"
            value={FirstCompanyFromDate}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="First Company To Date"
            name="FirstCompanyToDate"
            type="date"
            value={FirstCompanyToDate}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="First Company Designation"
            name="FirstCompanyDesignation"
            type="text"
            placeholder="First Company Designation"
            value={FirstCompanyDesignation}
            onChange={handleInputChange}
          />
        </Col>
      </Row>

      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Second Company Name"
            name="SecondCompanyName"
            type="text"
            value={SecondCompanyName}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            name="SecondCompanyFromDate"
            label="Second Company From Date"
            type="date"
            value={SecondCompanyFromDate}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Second Company To Date"
            name="SecondCompanyTodate"
            type="date"
            value={SecondCompanyTodate}
            onChange={handleInputChange}
          />
        </Col>

        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Second Company Designation"
            name="SecondCompanyDesignation"
            type="text"
            placeholder="Second Company Designation"
            value={SecondCompanyDesignation}
            onChange={handleInputChange}
          />
        </Col>
      </Row>

      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Separation"
            name="Separation"
            type="text"
            value={Separation}
            onChange={handleInputChange}
          />
        </Col>

        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Old Code"
            name="oldCode"
            type="text"
            placeholder="oldCode"
            value={oldCode}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            name="JoiningDate"
            label="Joining Date"
            type="date"
            value={JoiningDate}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Left Date"
            name="LeftDate"
            type="date"
            value={LeftDate}
            onChange={handleInputChange}
          />
        </Col>
      </Row>

      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Hierarchy Code"
            name="HierarchyCode"
            type="text"
            value={HierarchyCode}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Joined"
            name="Joined"
            type="checkbox"
            checked={Joined || false}
            onChange={handleInputChange}
          />
        </Col>

        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Is Active"
            name="IsActive"
            type="checkbox"
            checked={IsActive || false}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Is Head"
            name="IsHead"
            type="checkbox"
            checked={IsHead || false}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <InputField
            className={styles.form__input}
            label="Has Left"
            name="HasLeft"
            type="checkbox"
            checked={HasLeft || false}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
    </>
  );
};

export default SectionC;
