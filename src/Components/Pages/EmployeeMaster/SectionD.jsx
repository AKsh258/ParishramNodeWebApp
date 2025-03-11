
import { Row, Col } from 'react-bootstrap';
import styles from './EmployeeMaster.module.css'; 
import PropTypes from 'prop-types';
import InputField from './Fields/InputFields';

const SectionD = ({formData,handleInputChange}) => {


   const {State,Country,PinCode,City,
    PresentAddress,
    Address,}=formData
    SectionD.propTypes = {
        formData: PropTypes.shape({
           State: PropTypes.string.isRequired,
           Country: PropTypes.string.isRequired,
           PinCode: PropTypes.string.isRequired,
           City: PropTypes.string.isRequired,
           PresentAddress: PropTypes.string.isRequired,
           Address: PropTypes.string.isRequired,
        }).isRequired,
        
        handleInputChange: PropTypes.func.isRequired, 
     };
  return (
    <>
        <h3>Address Details</h3>
          
        
              <Row className={`${styles.row} mt-3 mb-3`}>
                <Col className={`${styles.col}`}>
             
                  <InputField
                    className={styles.form__input}
                    label='Present Address'
                    name="PresentAddress"
                    type="text"
                    value={PresentAddress}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>

                  <InputField
                    className={styles.form__input}
                    label='Address'
                    name="Address"
                    type="text"
                    value={Address}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col className={`${styles.col}`}>
   
          <InputField
            className={styles.form__input}
            label="PinCode"
            name="PinCode"
            type="text"
            placeholder="Enter PinCode"
            value={PinCode || ""}
            onChange={handleInputChange}
          />
        </Col>
                <Col className={`${styles.col}`}>
        
                  <InputField
                    className={styles.form__input}
                    label='City'
                    name="City"
                    type="text"
                    value={City}
                    onChange={handleInputChange}
                  />
                </Col>
      
                
              </Row>
      
              <Row className={`${styles.row} mt-3 mb-3`}>
              <Col className={`${styles.col}`}>
         
          <InputField
            className={styles.form__input}
            label="Country"
            name="Country"
            type="text"
            placeholder="Enter Country"
            value={Country || ""}
            onChange={handleInputChange}
          />
        </Col>
        <Col className={`${styles.col}`}>
      
                  <InputField
                    className={styles.form__input}
                    label='State'
                    name="State"
                    type="text"
                    value={State}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
    </>
  )
}

export default SectionD
