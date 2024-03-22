import React from "react";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faClock,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import style from "./MembershipTracker.module.css";
import moment from "moment";

function MembershipTracker() {
  const currentUser = useSelector((state) => state.me.currentUser);

  const subscriptionDate = currentUser?.subscription_date
    ? moment(currentUser.subscription_date).format("DD/MM/YYYY")
    : "Loading...";
  const expiresAt = currentUser?.subscription_end_date
    ? moment(currentUser.subscription_end_date).format("DD/MM/YYYY")
    : "Loading...";
  const remainingDays = currentUser?.subscription_end_date
    ? moment(currentUser.subscription_end_date).diff(moment(), "days")
    : "...";
  const planTitle = currentUser?.plan_id?.title || "No Plan Selected";
  return (
    <Col className={style.MembershipTrackerBox}>
      <h2>Membership Tracker</h2>
      <div className={style.membershipDetails}>
        <h5 className={style.infoHead}>Membership Plan</h5>
        {currentUser && (
          <>
            <div className={style.detailItem}>
              <FontAwesomeIcon icon={faCircleNotch} className="me-2" />
              <span className={style.infoSpan}>Title: {planTitle}</span>
            </div>
            <div className={style.detailItem}>
              <FontAwesomeIcon icon={faClock} className="me-2" />
              <span className={style.infoSpan}>
                Duration: {currentUser?.subscription_months || "..."} MONTHS
              </span>
            </div>
            <div className={style.detailItem}>
              <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
              <span className={style.infoSpan}>
                Subscription Date: {subscriptionDate}
              </span>
            </div>
            <div className={style.detailItem}>
              <span className={style.infoSpan}>Expires at: {expiresAt}</span>
            </div>

            <div className={style.detailItem}>
              <span className={style.infoSpan}>
                Remaining Days: {remainingDays}
              </span>
            </div>
          </>
        )}
      </div>
    </Col>
  );
}

export default MembershipTracker;
