
import PropTypes from 'prop-types';
import styles from "../EmployeeMaster.module.css"

const InputField = ({ label, name, value, type, placeholder, onChange }) => (
  <div className={styles.col}>
    <label className={styles.labelinp} htmlFor={name}>
      {label}
    </label>
    <input
      className={styles.form__input}
      id={name}
      name={name}
      type={type}
      value={value || ""}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
  type: 'text',
  placeholder: ''
};

export default InputField;
