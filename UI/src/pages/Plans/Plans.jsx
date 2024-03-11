import styles from "./Plans.module.css";
import "../../styles/vars.css";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className={`container-fluid ${styles.plans_container}`}>
      <div
        className={`d-flex flex-column flex-sm-row align-items-center justify-content-center gap-5  ${styles.largeScreenHeight}`}
      >
        <div className={`col-md-6 col-sm-12 ${styles.plan_box}`}>
          <div className={styles.free_plan}>
            <h1 className="fw-bold text-center pt-5">Free Plan</h1>
            <h1 className="fw-bold text-center ">$0</h1>
          </div>
          <div className="px-4 mt-5 fs-5">
            <p>
              <FaCheck color="#2ED6A8" className="mx-2" />
              Basic Access
            </p>
            <p>
              <FaCheck color="#2ED6A8" className="mx-2" />
              Limited Classes
            </p>
            <p>
              <FaCheck color="#2ED6A8" className="mx-2" />
              No Premium Trainer Support
            </p>
          </div>
          <div className="text-center">
            <button
              className={`${styles.btn} ${styles.customBtn} ${styles.free_plan_btn}`}
            >
              enroll now
            </button>
          </div>
        </div>
        <div className={`col-md-6 col-sm-12 ${styles.plan_box}`}>
          <div className={styles.gold_plan}>
            <h1 className="fw-bold text-center pt-5">Gold Plan</h1>
            <h1 className="fw-bold text-center ">
              $40<span className="text-white fs-4">/month</span>
            </h1>
          </div>
          <div className="px-4 mt-5 fs-5">
            <p>
              <FaCheck color="#2ED6A8" className="mx-2" />
              Full Access
            </p>
            <p>
              <FaCheck color="#2ED6A8" className="mx-2" />
              Extensive Class Library
            </p>
            <p>
              <FaCheck color="#2ED6A8" className="mx-2" />
              Premium Trainer Support
            </p>
          </div>
          <div className="text-center">
            <Link to="/subscriptionMonths">
              <button
                className={`${styles.btn} ${styles.customBtn} ${styles.gold_plan_btn}`}
              >
                enroll now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
