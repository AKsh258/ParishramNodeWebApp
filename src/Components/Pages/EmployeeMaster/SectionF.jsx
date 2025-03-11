

import { Row, Col } from 'react-bootstrap';
import styles from './EmployeeMaster.module.css'; 
import PropTypes from 'prop-types';
const SectionF = ({formData,handleInputChange}) => {

    const {EduQualification,
        ProfQualification,
        ProfQualificationYear,
        EduQualificationYear,}=formData
        SectionF.propTypes = {
            formData: PropTypes.shape({
                EduQualification: PropTypes.string.isRequired,
                ProfQualification: PropTypes.string.isRequired,
                ProfQualificationYear: PropTypes.string.isRequired,
                EduQualificationYear: PropTypes.string.isRequired,
            }).isRequired,
            handleInputChange: PropTypes.func, 
        };
  return (
    <>
       <h3>Education</h3>

   
<Row className={`${styles.row} mt-3 mb-3`}>

  <Col className={`${styles.col}`}>
    <label htmlFor="EduQualification">Education Qualification</label>
    <input
      className={styles.form__input}
      type="text"
      value={EduQualification}
      onChange={handleInputChange}
    />
  </Col>


  <Col className={`${styles.col}`}>
    <label htmlFor="EduQualificationYear">Education Qualification Year</label>
    <input
      className={styles.form__input}
      type="text"
      value={EduQualificationYear}
      onChange={handleInputChange}
    />
  </Col>


  <Col className={`${styles.col}`}>
    <label htmlFor="ProfQualification">Professional Qualification</label>
    <input
      className={styles.form__input}
      type="text"
      value={ProfQualification}  
    onChange={handleInputChange}
    />
  </Col>

  <Col className={`${styles.col}`}>
    <label htmlFor="ProfQualificationYear">Professional Qualification Year</label>
    <input
      className={styles.form__input}
      type="text"
      value={ProfQualificationYear} 
      onChange={handleInputChange}
    />
  </Col>
</Row>
    </>
  )
}

export default SectionF
