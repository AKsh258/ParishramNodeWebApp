import { Row, Col } from "react-bootstrap";
import styles from "./EmployeeMaster.module.css";
import PropTypes from "prop-types";
import InputField from "./Fields/InputFields";

const SectionG = ({ formData, handleInputChange }) => {
  SectionG.propTypes = {
    formData: PropTypes.shape({
      BankName: PropTypes.string.isRequired,
      AccountNo: PropTypes.string.isRequired,
      AccountId: PropTypes.string.isRequired,
      AccountName: PropTypes.string.isRequired,
      AccountEmailId: PropTypes.string.isRequired,
      NameInBank: PropTypes.string.isRequired,
      UANNo: PropTypes.string.isRequired,
      IsTL: PropTypes.bool.isRequired,
      IsRM: PropTypes.bool.isRequired,

      IsESICApplicable: PropTypes.bool.isRequired,
      IsLWFApplicable: PropTypes.bool.isRequired,
      IsOverTimeAllowed: PropTypes.bool.isRequired,
      IsAccount: PropTypes.bool.isRequired,
      IsBilled: PropTypes.bool.isRequired,
      ESICNo: PropTypes.string.isRequired,
    }).isRequired,
    handleInputChange: PropTypes.func.isRequired
  };
  const {
    BankName,
    AccountNo,
    AccountId,
    AccountName,
    AccountEmailId,
    NameInBank,
    IsAccount,
    IsBilled,
    IsESICApplicable,
    IsLWFApplicable,
    IsOverTimeAllowed,
    UANNo,
    IsTL,
    IsRM,ESICNo
  } = formData;
  return (
    <>
      <h3>Bank Details</h3>

      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
     
          <InputField
            className={styles.form__input}
            label="Bank Name"
            name="BankName"
            type="text"
            placeholder="Bank Name"
            value={BankName || ""}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
        
          <InputField
            className={styles.form__input}
            label=" Account No."
            name="AccountNo"
            type="text"
            placeholder="Account No."
            value={AccountNo || ""}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
      
          <InputField
            className={styles.form__input}
            label="  Account ID"
            name="AccountId"
            type="text"
            placeholder="Account ID"
            value={AccountId || ""}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>

          <InputField
            className={styles.form__input}
            label=" Account Name"
            name="AccountName"
            type="text"
            placeholder="Account Name"
            value={AccountName || ""}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
   
          <InputField
            className={styles.form__input}
            label="   Account Email ID"
            name="AccountEmailId"
            type="email"
            placeholder="Account Email ID"
            value={AccountEmailId || ""}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
    
          <InputField
            className={styles.form__input}
            label=" Name in Bank"
            name="NameInBank"
            type="text"
            placeholder="Name in Bank"
            value={NameInBank || ""}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
   
          <InputField
            className={styles.form__input}
            label="UAN No"
            name="UANNo"
            type="text"
            placeholder="Enter UAN No"
            value={UANNo || ""}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      {/* Fourth Row - Is RM, Is TL */}
      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
      
          <InputField
            className={styles.form__input}
            label="   Is RM"
            name="IsRM"
            type="checkbox"
            checked={IsRM || false}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
      
          <InputField
            className={styles.form__input}
            label="Is TL"
            name="IsTL"
            type="checkbox"
            checked={IsTL || 0}
            onChange={handleInputChange}
          />
        </Col>

        <Col className={`${styles.col}`}>
      
          <InputField
            className={styles.form__input}
            label="  Is Account"
            name="IsAccount"
            type="checkbox"
            checked={IsAccount || false}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
         
          <InputField
            className={styles.form__input}
            label="  Is Billed"
            name="IsBilled"
            type="checkbox"
            checked={IsBilled || true}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row className={`${styles.row} mt-3 mb-3`}>
        <Col className={`${styles.col}`}>
   
          <InputField
            className={styles.form__input}
            label="    Is ESIC Applicable"
            name="IsESICApplicable"
            type="checkbox"
            checked={IsESICApplicable || false}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
     
          <InputField
            className={styles.form__input}
            label=" Is LWF Applicable"
            name="IsLWFApplicable"
            type="checkbox"
            checked={IsLWFApplicable || false}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
      
          <InputField
            className={styles.form__input}
            label="  Is OverTime Allowed"
            name="IsOverTimeAllowed"
            type="checkbox"
            checked={IsOverTimeAllowed || false}
            onChange={handleInputChange}
          />
        </Col>
          <Col className={`${styles.col}`}>
            
                <InputField
                  className={styles.form__input}
                  label="ESICNo"
                  name="ESICNo"
                  type="text"
                  placeholder="ESICNo"
                value={ESICNo || ""}
                  onChange={handleInputChange}
                  disabled
                />
              </Col>
      </Row>
    </>
  );
};

export default SectionG;
