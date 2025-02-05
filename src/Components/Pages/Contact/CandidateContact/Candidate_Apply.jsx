import styles from "./Candidate_Apply.module.css"

const Candidate_Apply = () => {
  return (
    <>
  <form className={styles.formInputs} action="">

   <div className={styles.inputdiv}>
   <input className={styles.form__input} name="name" type="text" placeholder="Name" />
   <input className={styles.form__input} name="phone" type="number" placeholder="Phone Number" />
   </div>
   <input className={styles.form__input} name="email" type="email" placeholder="Email" />
   <div className={styles.inputdiv}>
   <input className={styles.form__input} name="location" type="text" placeholder="Location Name" />
   <input className={styles.form__input} name="appliedfor" type="text" placeholder="Applied For" />
   </div>
{/* Button */}
<button className={styles.Button}>
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

  </form>
    </>
  )
}

export default Candidate_Apply
