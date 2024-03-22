import "../../styles/vars.css";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./plans.css";
import { useEffect, useState } from "react";
import { getAllPlans } from "./../../thunks/plans";
import { useDispatch, useSelector } from "react-redux";
const Plans = () => {
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plans.list);
  useEffect(() => {
    dispatch(getAllPlans());
  }, []);

  return (
    <>
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

            {plans.map((plan) => (
              <div key={plan._id} className="col-xs-12 col-sm-4 col-lg-4">
                <div className="pricingTable pricingTable-2">
                  <div className="pricingTable-header">
                    <h3 className="title">{plan.title}</h3>
                    <h5 className="price-month">Per Month</h5>
                    <h1 className="price-value">
                      {plan.fee}{" "}
                      <span className="value-bg">EGP {plan.fee}</span>
                    </h1>
                  </div>
                  <ul className="pricing-content">
                    <li>
                      <p>
                        <FaCheck color="#2ED6A8" className="mx-2" />
                        {plan.features[0]}
                      </p>
                    </li>
                    <li>
                      <p>
                        <FaCheck color="#2ED6A8" className="mx-2" />
                        {plan.features[1]}
                      </p>
                    </li>
                    <li>
                      <p>
                        <FaCheck color="#2ED6A8" className="mx-2" />
                        {plan.features[2]}
                      </p>
                    </li>
                  </ul>
                  {plan.title.toLowerCase() === "free" ? (
                    <Link to="/userHome">
                      <p className="btn btn-lg btn-price-bg">Enroll Now</p>
                    </Link>
                  ) : (
                    <Link to={`/subscriptionMonths/${plan._id}`}>
                      <p className="btn btn-lg btn-price-bg">Enroll Now</p>
                    </Link>
                  )}
                </div>
              </div>
            ))}

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
