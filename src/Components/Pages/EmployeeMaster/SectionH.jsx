
import { Row, Col } from 'react-bootstrap';
import styles from './EmployeeMaster.module.css'; 
import PropTypes from 'prop-types';
import InputField from './Fields/InputFields';

const SectionH = ({formData,handleInputChange}) => {

    const {
        MobileNo,
          Separation,
               OwnConv,
         DistFromHouse,
         OwnHouse,
         isAdvAcc,
         isTourAcc,
         RegdNo,
         LevelCode,
         Band,
         AdvAcc,
         TourAcc,
         TxtApplCode,
       
         UnitESIC,
         UnitESICNo,
        
         HasRegin,
         StoreName,
         Channel,
         ProductHeadName,
         NationalProductHead,
         Division,
       
         Org_Unit_Code,
         Profile_Code,
         Div_Code,
         Dept_Code,
         Sale_Office_Code,
         Designation_Code,
        
         UserType,
         T_EndDate,
         WeekOff,
         TL_Emp_Code,
         TL_Emp_Name,
         StoreLocation,
         SalesOffice,
        
       oldCode,
         ActualChannel
         } = formData;
         SectionH.propTypes = {
            formData: PropTypes.shape({
                MobileNo: PropTypes.string.isRequired,
                Separation: PropTypes.string,
                OwnConv: PropTypes.string,
                DistFromHouse: PropTypes.string,
                OwnHouse: PropTypes.bool.isRequired,
                isAdvAcc: PropTypes.bool.isRequired,
                isTourAcc: PropTypes.bool.isRequired,
                RegdNo: PropTypes.string,
                LevelCode: PropTypes.string,
                Band: PropTypes.string,
                AdvAcc: PropTypes.string,
                TourAcc: PropTypes.string,
                TxtApplCode: PropTypes.string,
                UnitESIC: PropTypes.string,
                UnitESICNo: PropTypes.string,
                HasRegin: PropTypes.string,
                StoreName: PropTypes.string,
                Channel: PropTypes.string,
                ProductHeadName: PropTypes.string,
                NationalProductHead: PropTypes.string,
                Division: PropTypes.string,
                Org_Unit_Code: PropTypes.string,
                Profile_Code: PropTypes.string,
                Div_Code: PropTypes.string,
                Dept_Code: PropTypes.string,
                Sale_Office_Code: PropTypes.string,
                Designation_Code: PropTypes.string,
                UserType: PropTypes.string,
                T_EndDate: PropTypes.string,
                WeekOff: PropTypes.string,
                TL_Emp_Code: PropTypes.string,
                TL_Emp_Name: PropTypes.string,
                StoreLocation: PropTypes.string,
                SalesOffice: PropTypes.string,
                oldCode: PropTypes.string,
                ActualChannel: PropTypes.string,
            }).isRequired,
            handleInputChange: PropTypes.func.isRequired,
        };
  return (
    <>
        <h3>Other Details</h3>


<Row className={`${styles.row} mt-3 mb-3`}>

  <Col className={`${styles.col}`}>
    <label className={styles.labelinp} htmlFor="DistFromHouse">Distance from House</label>
    <InputField
      className={styles.form__input}
      name="DistFromHouse"
      type="number"
      placeholder="Distance from House"
      value={DistFromHouse || 0}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>
 
    <InputField
      className={styles.form__input}
      label='Registration No'
      name="RegdNo"
      type="text"
      placeholder="Registration No."
      value={RegdNo || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>
  
    <InputField
      className={styles.form__input}
      label='Level Code'
      name="LevelCode"
      type="text"
      placeholder="Level Code"
      value={LevelCode || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Band'
      name="Band"
      type="text"
      placeholder="Band"
      value={Band || ""}
      onChange={handleInputChange}
    />
  </Col>
</Row>

<Row className={`${styles.row} mt-3 mb-3`}>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Old Code'
      name="oldCode"
      type="text"
      placeholder="Old Code"
      value={oldCode || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Separation'
      name="Separation"
      type="text"
      placeholder="Separation"
      value={Separation || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Advance Account No.'
      name="AdvAcc"
      type="text"
      placeholder="Advance Account No."
      value={AdvAcc || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Tour Account No.'
      name="TourAcc"
      type="text"
      placeholder="Tour Account No."
      value={TourAcc || ""}
      onChange={handleInputChange}
    />
  </Col>
</Row>

<Row className={`${styles.row} mt-3 mb-3`}>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Text Application Code'
      name="TxtApplCode"
      type="text"
      placeholder="Text Application Code"
      value={TxtApplCode || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>
  
    <InputField
      className={styles.form__input}
      label='Mobile No.'
      name="MobileNo"
      type="text"
      placeholder="Mobile No."
      value={MobileNo || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Unit ESICNo'
      name="UnitESICNo"
      type="text"
      placeholder="Unit ESICNo"
      value={UnitESICNo || "N/A"}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Profile_Code'
      name="Profile_Code"
      type="text"
      placeholder="Profile_Code"
      value={Profile_Code || ""}
      onChange={handleInputChange}
    />
  </Col>
</Row>

<Row className={`${styles.row} mt-3 mb-3`}>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Org_Unit_Code'
      name="Org_Unit_Code"
      type="text"
      placeholder="Org_Unit_Code Code"
      value={Org_Unit_Code || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Div_Code'
      name="Div_Code"
      type="text"
      placeholder="Div_Code"
      value={Div_Code || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Has Region'
      name="HasRegin"
      type="checkbox"
      checked={HasRegin || false}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Store Name'
      name="StoreName"
      type="text"
      placeholder="Store Name"
      value={StoreName || ""}
      onChange={handleInputChange}
    />
  </Col>
</Row>
<Row className={`${styles.row} mt-3 mb-3`}>
<Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Channel'
      name="Channel"
      type="text"
      placeholder="Channel Name"
      value={Channel || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Division'
      name="Division"
      type="text"
      placeholder="Division Name"
      value={Division || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='ProductHeadName'
      name="ProductHeadName"
      type="text"
      placeholder="ProductHeadName Name"
      value={ProductHeadName || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='NationalProductHead'
      name="NationalProductHead"
      type="text"
      placeholder="NationalProductHead Name"
      value={NationalProductHead || ""}
      onChange={handleInputChange}
    />
  </Col>
</Row>
<Row className={`${styles.row} mt-3 mb-3`}>
<Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='UnitESIC'
      name="UnitESIC"
      type="text"
      placeholder="UnitESIC Name"
      value={UnitESIC || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>
<label className={styles.labelinp} htmlFor="Designation_Code">Designation_Code</label>
    <InputField
      className={styles.form__input}
      label=''
      name="Designation_Code"
      type="text"
      placeholder="Designation_Code"
      value={Designation_Code || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Sale_Office_Code'
      name="ProductHeadName"
      type="text"
      placeholder="Sale_Office_Code"
      value={Sale_Office_Code }
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Dept_Code'
      name="Dept_Code"
      type="text"
      placeholder="Dept_Code"
      value={Dept_Code || ""}
      onChange={handleInputChange}
    />
  </Col>
</Row>

<Row className={`${styles.row} mt-3 mb-3`}>
<Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='TL_Emp_Name'
      name="TL_Emp_Name"
      type="text"
      placeholder=" TL_Emp_Name"
      value={TL_Emp_Name || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='WeekOff'
      name="WeekOff"
      type="text"
      placeholder="WeekOff"
      value={WeekOff || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='T_EndDate'
      name="T_EndDate"
      type="text"
      placeholder="T_EndDate"
      value={T_EndDate || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='User Type'
      name="UserType"
      type="text"
      placeholder="UserType"
      value={UserType || ""}
      onChange={handleInputChange}
    />
  </Col>
</Row>

<Row className={`${styles.row} mt-3 mb-3`}>
<Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='TL_Emp_Code'
      name="TL_Emp_Code"
      type="text"
      placeholder=" TL_Emp_Code"
      value={TL_Emp_Code || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='StoreLocation'
      name="StoreLocation"
      type="StoreLocation"
      placeholder="StoreLocation"
      value={StoreLocation || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='SalesOffice'
      name="SalesOffice"
      type="text"
      placeholder="SalesOffice"
      value={SalesOffice || ""}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='ActualChannel'
      name="ActualChannel"
      type="text"
      placeholder="ActualChannel"
      value={ActualChannel || ""}
      onChange={handleInputChange}
    />
  </Col>
</Row>
<Row className={`${styles.row} mt-3 mb-3`}>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Own Conv.'
      name="OwnConv"
      type="checkbox"
      checked={OwnConv || false}
      onChange={handleInputChange}
    />
  </Col>

  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Own House'
      name="OwnHouse"
      type="checkbox"
      checked={OwnHouse || false}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>
   
    <InputField
      className={styles.form__input}
      label='Advance Account'
      name="isAdvAcc"
      type="checkbox"
      checked={isAdvAcc || false}
      onChange={handleInputChange}
    />
  </Col>
  <Col className={`${styles.col}`}>

    <InputField
      className={styles.form__input}
      label='Tour Account'
      name="isTourAcc"
      type="checkbox"
      checked={isTourAcc || false}
      onChange={handleInputChange}
    />
  </Col>
</Row>
    </>
  )
}

export default SectionH
