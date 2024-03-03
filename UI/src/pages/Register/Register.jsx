import styles from "./Register.module.css";
import { IoBarbellOutline } from "react-icons/io5";

const Register = () => {
  const emailIcon = "\u2709";
  //   const passIcon = "\uD83D\uDD12";
  //TODO:add icons into placeholders
  return (
    <>
      <div className={`container ${styles.loginHolder}`}>
        <div className={styles.custom_form_holder}>
          <form className={styles.custom_form}>
            <h1 className={`${styles.gym_title} fw-bold`}>
              ELGYMAWEYA
              <IoBarbellOutline size={60} />
            </h1>
            <h3 className="fw-bold">Register</h3>
            <h6 className="text-muted mb-4 ">Create your gym membership now</h6>
            <div className="row mt-2">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder={`Name`}
                  className={styles.input}
                ></input>
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  placeholder={`${emailIcon} Email`}
                  className={styles.input}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder={`Weight`}
                  className={styles.input}
                ></input>
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder={`Height`}
                  className={styles.input}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="number"
                  placeholder={`Age`}
                  className={styles.input}
                ></input>
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="number"
                  placeholder={`Phone Number`}
                  className={styles.input}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-3 ">
                <input
                  type="password"
                  placeholder={`Password`}
                  className={styles.input}
                ></input>
              </div>
              <div className="col-md-6 my-3 ">
                <input
                  type="password"
                  placeholder={`Confirm Password`}
                  className={styles.input}
                ></input>
              </div>
            </div>
            <button className={styles.btn}>Register</button>
            <h6 className="text-muted ">
              Already have an account ?
              <span className="text-dark mx-2 fw-bold ">Login Now</span>
            </h6>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
