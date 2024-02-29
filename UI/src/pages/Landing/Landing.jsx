import styles from "./Landing.module.css";
import Features from "./../../components/Features/Features";

const Landing = () => {
  return (
    <>
      <div className={styles.background}>
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
            <h1 className="mb-3">
              WELCOME TO <span className={styles.header}>ELGYMAWEYA</span>
            </h1>
            <p
              className={`display-6 md-display-6 align-self-center mb-4 ${styles.title}`}
            >
              "Unleash Your Potential, Powered By Fitness!"
            </p>
            <div className="text-center">
              <button className={`btn mx-2 ${styles.customBtn}`}>
                Register Now
              </button>
              <button className={`btn mx-2 ${styles.customBtn}`}>Login</button>
            </div>
          </div>
        </div>
        <Features />
      </div>
    </>
  );
};

export default Landing;
