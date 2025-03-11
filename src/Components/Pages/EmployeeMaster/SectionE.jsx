
import { Col, Row } from "react-bootstrap";
import styles from "./EmployeeMaster.module.css";
import PropTypes from 'prop-types';
import InputField from "./Fields/InputFields";
const SectionE = ({formData,handleInputChange}) => {

    const{
        
  HeadName,
  HeadEmail,

 
  BranchHeadName,
  BranchheademailId,


  IsBranchHead,IsHead,

RMEmailId,
RMEmpId,
RMEmpName,
Branchheadid,
    }=formData
    // PropTypes validation
SectionE.propTypes = {
    formData: PropTypes.shape({
       HeadName: PropTypes.string.isRequired,
       HeadEmail: PropTypes.string.isRequired,
       BranchHeadName: PropTypes.string.isRequired,
       BranchheademailId: PropTypes.string.isRequired,
       RMEmailId: PropTypes.string.isRequired,
       RMEmpId: PropTypes.string.isRequired,
       RMEmpName: PropTypes.string.isRequired,
       Branchheadid: PropTypes.string.isRequired,
       IsBranchHead: PropTypes.bool.isRequired,
       IsHead: PropTypes.bool.isRequired,
    }).isRequired,
    
    handleInputChange: PropTypes.func.isRequired, 
 };
 
  return (
    <>
       <h3>RM/Branch Details</h3>

<Row className={`${styles.row} mt-3 mb-3`}>

  <Col className={`${styles.col}`}>

    <InputField
  className={styles.form__input}
  label="RM Email"
  name="RMEmailId"
  type="email"
  value={RMEmailId}
  onChange={handleInputChange}
/>

  </Col>
  <Col className={`${styles.col}`}>
 
    <InputField
          className={styles.form__input}
          label="RM Employee ID"
      type="text"
      value={RMEmpId}
      disabled
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
           className={styles.form__input}
           label="RM Employee Name"
      type="text"
      value={RMEmpName}
      disabled
    />
  </Col>
</Row>
<Row className={`${styles.row} mt-3 mb-3`}>
<Col className={`${styles.col}`}>
  
      <InputField
        className={styles.form__input}
        label="Head Name"
        name="HeadName"
        type="text"
        value={HeadName}
        onChange={handleInputChange}
      />
    </Col>
    <Col className={`${styles.col}`}>

      <InputField
        className={styles.form__input}
        label="Head Email"
        name="HeadEmail"
        type="text"
        value={HeadEmail}
        onChange={handleInputChange}
      />
    </Col>
     
  <Col className={`${styles.col}`}>

    <InputField
       className={styles.form__input}
       label="Branch Head ID"
      type="text"
      value={Branchheadid}
      disabled
    />
  </Col>
</Row>
<Row className={`${styles.row} mt-3 mb-3`}>
<Col className={`${styles.col}`}>
  
      <InputField
        className={styles.form__input}
        label="Branch Head Name"
        name="BranchHeadName"
        type="text"
        value={BranchHeadName}
        onChange={handleInputChange}
      />
    </Col>
      
    <Col className={`${styles.col}`}>
  
      <InputField
        className={styles.form__input}
        name="BranchHeadEmail"
        label="Branch Head Email"
        type="text"
        value={BranchheademailId}
        onChange={handleInputChange}
      />
    </Col>
    <Col className={`${styles.col}`}>
     
        <InputField
          className={styles.form__input}
          name="IsBranchHead"
          label="Is Branch Head"
          type="checkbox"
          checked={IsBranchHead || false}
          onChange={handleInputChange}
        />
      </Col>
      <Col className={`${styles.col}`}>
 
        <InputField
          className={styles.form__input}
          label="    Is Heads"
          name="IsHead"
          type="checkbox"
          checked={IsHead || 0}
          onChange={handleInputChange}
        />
      </Col>
</Row>
    </>
  )
}

export default SectionE
