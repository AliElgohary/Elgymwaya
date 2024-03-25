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
import { Grid } from "@mui/material";

import QRCode from "qrcode.react";

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
  const userToken = currentUser?._id || "No Token";
  return (
    <div className={style.MembershipTrackerBox}>
      <h2>Membership Tracker</h2>
      <Grid container spacing={2}>
        <Grid item md={12} lg={8}>
          <div className={style.membershipDetails}>
            <h5 className={style.infoHead}>Membership Plan</h5>
            <div className={style.detailItem}>
              <span className={style.infoSpan}>
                {" "}
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  className="me-2"
                /> Title: {planTitle}
              </span>
            </div>
            <div className={style.detailItem}>
              <span className={style.infoSpan}>
                <FontAwesomeIcon icon={faClock} className="me-2" />
                Duration: {currentUser?.subscription_months || "..."} MONTHS
              </span>
            </div>
            <div className={style.detailItem}>
              <span className={style.infoSpan}>
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
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
          </div>
        </Grid>
        <Grid item md={12} lg={4} className={style.qrCodeContainer}>
          <QRCode
            value={userToken}
            size={118}
            level={"H"}
            includeMargin={true}
          />
          <p>Scan To Enter ElGymaweya</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default MembershipTracker;
