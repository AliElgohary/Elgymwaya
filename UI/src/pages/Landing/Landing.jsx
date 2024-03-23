import styles from "./Landing.module.css";
import Features from "./../../components/Features/Features";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className={styles.background}>
        <Features />
      </div>
    </>
  );
};

export default Landing;
