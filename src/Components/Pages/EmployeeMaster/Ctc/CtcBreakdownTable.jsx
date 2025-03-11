
import { Table } from 'react-bootstrap';
import styles from '../EmployeeMaster.module.css';
import PropTypes from 'prop-types';
const CtcBreakdownTable = ({ salaryDetails }) => {
  return (
    <div className={styles.CtcDiv}>
    <h3 className='mt-2 mb-2'>CTC Breakdown</h3>
    <div className={`${styles.table_container}`} >
      <Table striped bordered hover className={styles.table} >
        <thead>
          <tr>
            <th>Component</th>
            <th>Monthly Amount (₹)</th>
            <th>Annual Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3" className={styles.tableSectionHeader}>Salary Breakdown</td>
          </tr>
          <tr>
            <td>Basic</td>
            <td>{Math.round(salaryDetails.basicSalary)}</td>
            <td>{Math.round(salaryDetails.basicSalary * 12)}</td>
          </tr>
          <tr>
            <td>HRA</td>
            <td>{Math.round(salaryDetails.hra)}</td>
            <td>{Math.round(salaryDetails.hra * 12)}</td>
          </tr>
          <tr>
            <td>Special Allowance</td>
            <td>{Math.round(salaryDetails.specialAllowance)}</td>
            <td>{Math.round(salaryDetails.specialAllowance * 12)}</td>
          </tr>
          <tr className={styles.tr1}>
            <td>Sub-1: Gross</td>
            <td>{Math.round(salaryDetails.basicSalary + salaryDetails.hra + salaryDetails.specialAllowance)}</td>
            <td>{Math.round((salaryDetails.basicSalary + salaryDetails.hra + salaryDetails.specialAllowance) * 12)}</td>
          </tr>

          <tr>
            <td colSpan="3" className={styles.tableSectionHeader}>Employer Contributions</td>
          </tr>
          <tr>
            <td>PF Employer Contribution</td>
            <td>{Math.round(salaryDetails.pf)}</td>
            <td>{Math.round(salaryDetails.pf * 12)}</td>
          </tr>
          <tr>
            <td>ESI (3.25% of Gross)</td>
            <td>{Math.round(salaryDetails.esic)}</td>
            <td>{Math.round(salaryDetails.esic * 12)}</td>
          </tr>
          <tr>
            <td>ADVANCE STATUTORY BONUS</td>
            <td>{Math.round(salaryDetails.bonus)}</td>
            <td>{Math.round(salaryDetails.bonus * 12)}</td>
          </tr>
          <tr>
            <td>INSURANCE</td>
            <td>{Math.round(693)}</td>
            <td>{Math.round(693 * 12)}</td>
          </tr>
          <tr>
            <td>Sub-2: TOTAL Employer</td>
            <td>{Math.round(salaryDetails.totalEmployerContributions)}</td>
            <td>{Math.round(salaryDetails.totalEmployerContributions * 12)}</td>
          </tr>

          <tr>
            <td colSpan="3" className={styles.tableSectionHeader}>Deductions</td>
          </tr>
          <tr>
            <td>PF (12% of BASIC)</td>
            <td>{Math.round(salaryDetails.pf)}</td>
            <td>{Math.round(salaryDetails.pf * 12)}</td>
          </tr>
          <tr>
            <td>Professional Tax</td>
            <td>{Math.round(salaryDetails.professionalTax)}</td>
            <td>{Math.round(salaryDetails.professionalTax * 12)}</td>
          </tr>

          <tr>
            <td colSpan="3" className={styles.tableSectionHeader}>Take Home</td>
          </tr>
          <tr className={styles.highlightRow}>
            <td>Gross - Sub-2 (Net Take Home)</td>
            <td>{Math.round(salaryDetails.netSalary)}</td>
            <td>{Math.round(salaryDetails.netSalary * 12)}</td>
          </tr>
          <tr>
            <td>ADVANCE STATUTORY BONUS</td>
            <td>{Math.round(salaryDetails.bonus)}</td>
            <td>{Math.round(salaryDetails.bonus * 12)}</td>
          </tr>
          <tr className={styles.highlightRow}>
            <td>Gross - Sub-2 (Final NTH)</td>
            <td>{Math.round(salaryDetails.netSalary + salaryDetails.bonus)}</td>
            <td>{Math.round((salaryDetails.netSalary + salaryDetails.bonus) * 12)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
  );
};
CtcBreakdownTable.propTypes = {
  salaryDetails: PropTypes.shape({
    basicSalary: PropTypes.number.isRequired,
    hra: PropTypes.number.isRequired,
    specialAllowance: PropTypes.number.isRequired,
    pf: PropTypes.number.isRequired,
    esic: PropTypes.number.isRequired,
    bonus: PropTypes.number.isRequired,
    totalEmployerContributions: PropTypes.number.isRequired,
    professionalTax: PropTypes.number.isRequired,
    netSalary: PropTypes.number.isRequired,
  }).isRequired,
};

export default CtcBreakdownTable;
