import React from "react";
import { Image } from "react-bootstrap";
import trainerImage from "../../assets/trainer.png";
import style from "./Trainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Trainer() {
  const currentUser = useSelector((state) => state.me.currentUser);
  const coachInfo = currentUser && currentUser.coach_id;

  return (
    <>
      <h2>Trainer</h2>
      {coachInfo && (
        <div>
          <Image
            src={coachInfo.profile_picture || trainerImage}
            className={style.userImage}
            roundedCircle
          />
          <span className="text-dark fw-bold">{coachInfo.full_name}</span>
        </div>
      )}
      {coachInfo && (
        <div id="contact-info">
          <h5 className={style.infoHead}>Contact Info</h5>
          <div id="phone" className="my-3">
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            <span className={style.infoSpan}>
              Phone: {coachInfo.phone_number}
            </span>
          </div>
          <div id="email">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            <span className={style.infoSpan}>Email: {coachInfo.email}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Trainer;
