import React from "react";
import { useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import style from "./UserInfo.module.css";
import userImage from "../../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEnvelope,
  faPhone,
  faRuler,
  faUser,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";

function UserInfo() {
  const currentUser = useSelector((state) => state.me.currentUser);

  return (
    <>
      {/** for user select free plan */}
      <Col className={style.UserInfoBox}>
        <h2>User Information</h2>
        {currentUser && (
          <div>
            <Image
              src={currentUser.profile_picture || userImage}
              className={style.userImage}
              roundedCircle
            />
            <span className="text-dark fw-bold">{currentUser.full_name}</span>
          </div>
        )}
        {currentUser && (
          <div id="body-info" className={style.bodyInfo}>
            <h5 className={style.infoHead}>Body Info</h5>
            <div id="age" className="my-2">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              <span className={style.infoSpan}>Age: {currentUser.age}</span>
            </div>
            <div id="height" className="my-2">
              <FontAwesomeIcon icon={faRuler} className="me-2" />
              <span className={style.infoSpan}>
                Height: {currentUser.height}
              </span>
            </div>
            <div id="weight">
              <FontAwesomeIcon icon={faWeightScale} className="me-2" />
              <span className={style.infoSpan}>
                Weight: {currentUser.weight}
              </span>
            </div>
          </div>
        )}
        {currentUser && (
          <div id="contact-info">
            <h5 className={style.infoHead}>Contact Info</h5>
            <div id="phone" className="my-2">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <span className={style.infoSpan}>
                Phone: {currentUser.phone_number}
              </span>
            </div>
            <div id="email">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              <span className={style.infoSpan}>Email: {currentUser.email}</span>
            </div>
          </div>
        )}
      </Col>
    </>
  );
}

export default UserInfo;
