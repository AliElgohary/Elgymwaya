// import styles from "./Plans.module.css";
import "../../styles/vars.css";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Plans.module.css";
import "./plans.css";
const Plans = () => {
  return (
    <>
      {/**<div className={`container-fluid ${styles.plans_container}`}>
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
  </div>**/}

      <section id="pricing" className={"our_pricing section-padding"}>
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h1 className="section-title-white">Pricing plan</h1>
              <p className="section-title-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae risus nec dui venenatis dignissim. Aenean vitae metus in
                augue pretium ultrices.
              </p>
            </div>
            <div className="col-xs-12 col-sm-4 col-lg-4">
              <div className="pricingTable pricingTable-2">
                <div className="pricingTable-header">
                  <h3 className="title">Free Plan</h3>
                  <h5 className="price-month">Per Month</h5>
                  <h1 className="price-value">
                    {" "}
                    0 <span className="value-bg"> $0 </span>
                  </h1>
                </div>
                <ul className="pricing-content">
                  <li>
                    <p>
                      <FaCheck color="#2ED6A8" className="mx-2" />
                      Basic Access
                    </p>
                  </li>
                  <li>
                    <p>
                      <FaCheck color="#2ED6A8" className="mx-2" />
                      Limited Classes
                    </p>
                  </li>
                  <li>
                    <p>
                      <FaCheck color="#2ED6A8" className="mx-2" />
                      No Premium Trainer Support
                    </p>
                  </li>
                </ul>
                <Link to="/subscriptionMonths">
                  <p className="btn btn-lg btn-price-bg">Enroll Now</p>
                </Link>
              </div>
            </div>
            {/* END COL  */}
            <div className="col-xs-12 col-sm-4 col-lg-4">
              <div className="pricingTable pricingTabletop pricingTable-2">
                <div className="pricingTable-header">
                  <h3 className="title">Gold Plan</h3>
                  <h5 className="price-month">Per Month</h5>
                  <h1 className="price-value">
                    40 <span className="value-bg">$40</span>
                  </h1>
                </div>
                <ul className="pricing-content">
                  <li>
                    <p>
                      <FaCheck color="#2ED6A8" className="mx-2" />
                      Full Access
                    </p>
                  </li>
                  <li>
                    <p>
                      <FaCheck color="#2ED6A8" className="mx-2" />
                      Extensive Class Library
                    </p>
                  </li>
                  <li>
                    <p>
                      <FaCheck color="#2ED6A8" className="mx-2" />
                      Premium Trainer Support
                    </p>
                  </li>
                </ul>
                <Link to="/subscriptionMonths">
                  <p className="btn btn-lg btn-price-bg">Enroll Now</p>
                </Link>
              </div>
            </div>

            <div className={`col-xs-12 col-sm-4 col-lg-4 closedCard`}>
              <div className="pricingTable pricingTable-2">
                <div className="pricingTable-header">
                  <h3 className="title">Premium</h3>
                  <h5 className="price-month">Per Month</h5>
                  <h1 className="price-value">
                    90 <span className="value-bg">$90</span>
                  </h1>
                </div>
                <ul className="pricing-content">
                  <li>
                    <p>
                      <FaCheck color="#2ED6A8" className="mx-2" />
                      Full Access
                    </p>
                  </li>
                  <li>
                    <p>
                      <FaCheck color="#2ED6A8" className="mx-2" />
                      Extensive Class Library
                    </p>
                  </li>
                  <li>
                    <p>
                      <FaCheck color="#2ED6A8" className="mx-2" />
                      Premium Trainer Support
                    </p>
                  </li>
                </ul>
                <Link to="/subscriptionMonths">
                  <p className="btn btn-lg btn-price-bg">Enroll Now</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plans;
