import { useDispatch, useSelector } from "react-redux";
import styles from "./Contact.module.css";
import { useEffect } from "react";
import { Contact_Demo_fetched } from "../../../Redux/Features/Counter/Contact_Demo_Slice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { insertContact_Demo } from "../../../Redux/Features/Counter/Contact_Demo_Slice"; 

const ContactInputs = () => {
  
  const { contact, status, error } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  console.log("------------------------contact", contact);

  useEffect(() => {
    dispatch(Contact_Demo_fetched());
  }, [dispatch]);

  // Validation schema for Formik
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phoneNumber: Yup.string().required("Phone number is required").matches(/^\d+$/, "Phone number must be digits"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    companyName: Yup.string().required("Company Name is required"),
    companySize: Yup.string().required("Company Size is required"),
  });



// const handleSubmit = (values, { setSubmitting, resetForm }) => {

//   const payload = {
//     name: values.name,  
//     phoneNumber: values.phoneNumber, 
//     email: values.email,
//     companyName: values.CompanyName, 
//     companySize: values.CompanySize, 
//   };

//   dispatch(insertContact_Demo(payload))
//     .unwrap() 
//     .then(() => {
//       // Handle successful submission (e.g., reset form)
//       resetForm();
//     })
//     .catch((error) => {
//       // Handle submission error (e.g., display error)
//       console.error("Error during form submission:", error);
//     })
//     .finally(() => {
//       setSubmitting(false); 
//     });
// };

  // Handle form submission
  const handleSubmit = (formData, { setSubmitting, resetForm }) => {
    dispatch(insertContact_Demo(formData))
      .unwrap() 
      .then(() => {

        resetForm();
      })
      .catch((error) => {

        console.error("Error during form submission:", error);
      })
      .finally(() => {
        setSubmitting(false); 
      });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phoneNumber: "",
        email: "",
        companyName: "",
        companySize: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.formInputs}>
          <div className={styles.inputdiv}>
            <Field
              className={styles.form__input}
              name="name"
              type="text"
              placeholder="Name"
            />
            <ErrorMessage name="name" component="div" className={styles.error} />

            <Field
              className={styles.form__input}
              name="phoneNumber"
              type="number"
              placeholder="Phone Number"
            />
            <ErrorMessage name="phoneNumber" component="div" className={styles.error} />
          </div>

          <Field
            className={styles.form__input}
            name="email"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="div" className={styles.error} />

          <div className={styles.inputdiv}>
            <Field
              className={styles.form__input}
              name="companyName"
              type="text"
              placeholder="Company Name"
            />
            <ErrorMessage name="companyName" component="div" className="error" />

            <Field
              className={styles.form__input}
              name="companySize"
              type="text"
              placeholder="Company Size"
            />
            <ErrorMessage name="companySize" component="div" className={styles.error} />
          </div>

          <button className={styles.Button} type="submit" disabled={isSubmitting}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactInputs;