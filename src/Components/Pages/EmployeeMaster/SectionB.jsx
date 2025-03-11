import { Col, Row } from "react-bootstrap";
import styles from "./EmployeeMaster.module.css";
import PropTypes from 'prop-types';
import { useState } from 'react';

import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import CtcBreakdownTable from "./Ctc/CtcBreakdownTable.JSX";
import InputField from "./Fields/InputFields";
// import CtcSubmitApi from "./AllData_Employee"
const SectionB = ({ formData, handleInputChange }) => {
  const { CTC, GrossSalary } = formData;
const dispatch=useDispatch()
const alert=useAlert()
  const [basicPercentage, setBasicPercentage] = useState(40);
  const [minimumWages, setMinimumWages] = useState("");

  const calculateCTCBreakdown = (ctc, basicPercentage, minWages) => {
    let basicSalary = ctc * (basicPercentage / 100);
    if (basicSalary < minWages) basicSalary = minWages;

    const hra = 0.4 * basicSalary;
    const pf = 0.12 * basicSalary;
    const esic = 0.0325 * basicSalary;
    const specialAllowance = ctc * 0.1;
    const professionalTax = basicSalary > 10000 ? 200 : 0;
    const bonus = ctc * 0.1;
    const totalDeductions = pf + esic + professionalTax;
    const netSalary = ctc - totalDeductions;

    const employerContributions = pf + esic + 693 + 1355;
    const totalEmployerContributions = employerContributions;

    return {
      basicSalary,
      hra,
      pf,
      esic,
      specialAllowance,
      professionalTax,
      bonus,
      totalDeductions,
      netSalary,
      employerContributions,
      totalEmployerContributions
    };
  };
  const monthlyCTC = CTC > 99999 ? CTC / 12 : CTC;
  const salaryDetails = calculateCTCBreakdown(Number(monthlyCTC), basicPercentage, minimumWages);

  const percentageOptions = [40, 45, 50, 55, 60, 65, 70, 75];

  const handlePercentageChange = (e) => {
    setBasicPercentage(Number(e.target.value));
  };

  const handleMinimumWagesChange = (e) => {
    setMinimumWages(Number(e.target.value));
  };

  SectionB.propTypes = {
    formData: PropTypes.shape({
      CTC: PropTypes.number.isRequired,
      GrossSalary: PropTypes.number.isRequired,
      PFNo: PropTypes.string.isRequired,
      IsBranchHead: PropTypes.bool.isRequired,
      IsHead: PropTypes.bool.isRequired,
    }).isRequired,
    handleInputChange: PropTypes.func.isRequired,
  };
  const handleSubmitCtc = async (event) => {
    event.preventDefault(); 

    try {

      const ctcBreakdown = {
        CTC,
        basicSalary: salaryDetails.basicSalary,
        hra: salaryDetails.hra,
        specialAllowance: salaryDetails.specialAllowance,
        totalEmployerContributions: salaryDetails.totalEmployerContributions,
        totalDeductions: salaryDetails.totalDeductions,
        netSalary: salaryDetails.netSalary,
        bonus: salaryDetails.bonus,
        finalNth: salaryDetails.netSalary + salaryDetails.bonus,
      };

      // Dispatch the action with ctcBreakdown
      dispatch(CtcSubmitApi(ctcBreakdown));

    
      alert.success('CTC Breakdown Submitted Successfully');
    } catch (error) {
      console.error('Error submitting CTC Breakdown:', error);

    
      alert.error('An error occurred while submitting the data');
    }
  };
  return (
    <>
      <h1>Entitlement</h1>
      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
  
          <InputField
            className={styles.form__input}
            name="CTC"
            label="Ctc"
            type="number"
            placeholder="Enter CTC"
            value={CTC}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <label className={styles.labelinp} htmlFor="basicPercentage">Select Basic Salary Percentage</label>
          <select
            name="basicPercentage"
            id="basicPercentage"
            value={basicPercentage}
            onChange={handlePercentageChange}
            className={styles.form__input}
          >
            {percentageOptions.map((percentage) => (
              <option key={percentage} value={percentage}>{percentage}%</option>
            ))}
          </select>
        </Col>
        <Col className={`${styles.col}`}>
       
          <InputField
            className={styles.form__input}
            name="minimumWages"
            label="Minimum Wages According to State"
            type="number"
            placeholder="Minimum Wages According to States"
            value={minimumWages || ''}
            onChange={handleMinimumWagesChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
   
          <InputField
            className={styles.form__input}
            name="GrossSalary"
            label="Gross Salary"
            type="number"
            placeholder="Enter Gross Salary"
            value={GrossSalary || 0}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
  <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
          <label className={styles.labelinp} htmlFor="PFNo">
            Entitlement Category
          </label>
          <input
            className={styles.form__input}
            name="PFNo"
            type="text"
            placeholder="Enter Entitlement Category"
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
          <label className={styles.labelinp} htmlFor="TotalEarnin">
            Total Earning
          </label>
          <input
            className={styles.form__input}
            name="TotalEarnin"
            type="text"
            placeholder="Enter Total Earning"
            value={salaryDetails.netSalary ? salaryDetails.netSalary.toFixed(2) : ''}
            disabled
          />
        </Col>
        <Col className={`${styles.col}`}>
          <label className={styles.labelinp} htmlFor="ESICNo">
            Total Ded.
          </label>
          <input
            className={styles.form__input}
            name="ESICNo"
            type="text"
            placeholder="Enter Total Ded."
            value={salaryDetails.totalDeductions ? salaryDetails.totalDeductions.toFixed(2) : ''}
            disabled
          />
        </Col>
        <Col className={`${styles.col}`}>
          <label className={styles.labelinp} htmlFor="NeTPay">
            Net Pay
          </label>
          <input
            className={styles.form__input}
            name="NeTPay"
            type="text"
            placeholder="Enter Net Pay"
            value={salaryDetails.netSalary ? salaryDetails.netSalary.toFixed(2) : ''}
            disabled
          />
        </Col>
      </Row>

      <Row className={`${styles.row} mt-3 mb-3`} >
        {CTC && salaryDetails ? (
   <CtcBreakdownTable salaryDetails={salaryDetails} />
        ) : null}
      </Row>
      <button className={styles.entitleSub} onClick={handleSubmitCtc}>Submit CTC Breakdown</button>
    </>
  );
};

export default SectionB;
