import styles from "./Login.module.css";
import { IoBarbellOutline } from "react-icons/io5";

const Login = () => {
  //TODO:fix the icon in placeholder :)
  const emailIcon = "\u2709";
  const passIcon = "\uD83D\uDD12";
  return (
    <div className={`container ${styles.loginHolder}`}>
      <div className={styles.custom_form_holder}>
        <form className={styles.custom_form}>
          <h1 className={`${styles.gym_title} fw-bold`}>
            ELGYMAWEYA
            <IoBarbellOutline size={60} />
          </h1>
          <h3 className="fw-bold">login</h3>
          <h6 className="text-muted mb-4 ">Login to track your membership </h6>
          <input
            type="email"
            placeholder={`${emailIcon} Email`}
            className={styles.input}
          ></input>
          <input
            type="password"
            placeholder={`${passIcon}*******`}
            className={styles.input}
          ></input>
          <button className={styles.btn}>Login</button>
          <h6 className="text-muted ">
            Dont have an account yet?
            <span className="text-dark mx-2 fw-bold ">Register Now</span>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Login;
