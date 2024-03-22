import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Image } from "react-bootstrap";
import trainerImage from "../../assets/trainer.png";
import style from "./Trainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { makeReservation } from "../../thunks/reservationThunks";

function Trainer() {
  const [reservation, setReservation] = useState({
    date: "",
    start_time: "",
    end_time: "",
  });
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.me.currentUser);
  const coachInfo = currentUser && currentUser.coach_id;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "start_time") {
      const endTime = new Date(
        new Date(`1970/01/01 ${value}`).getTime() + 60 * 60 * 1000
      )
        .toTimeString()
        .split(" ")[0]
        .substring(0, 5);
      setReservation((prev) => ({
        ...prev,
        start_time: value,
        end_time: endTime,
      }));
    } else {
      setReservation((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    dispatch(makeReservation(reservation));
  };
  return (
    <>
      <h2>Trainer</h2>
      {coachInfo && (
        <div className={style.trainerContainer}>
          {/* Trainer details column */}
          <div className={style.trainerDetails}>
            <Image
              src={coachInfo.profile_picture || trainerImage}
              className={style.userImage}
              roundedCircle
            />
            <span className={`text-dark fw-bold ${style.trainerName}`}>
              {coachInfo.full_name}
            </span>
            <div id="contact-info" className={style.contactInfo}>
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
            <div id="working-days">
              <h5 className={style.infoHead}>Working Days</h5>
              {coachInfo.working_days && coachInfo.working_days.length > 0 ? (
                coachInfo.working_days.map((day, index) => (
                  <div key={index} className={style.workingDayItem}>
                    <FontAwesomeIcon icon={faCalendarDay} className="me-2" />
                    <span className={style.infoSpan}>
                      {day.day}: {day.start_time} - {day.end_time}
                    </span>
                  </div>
                ))
              ) : (
                <p className={style.infoSpan}>No working days set.</p>
              )}
            </div>
          </div>
          {/* Reservation form column */}
          <div className={`${style.reservationForm} col-md-5`}>
            {" "}
            {/* Adjust the column size as needed */}
            <form
              onSubmit={handleReservationSubmit}
              className="p-3 border rounded"
            >
              <div className="mb-3">
                <label htmlFor="reservationDate" className="form-label">
                  Date:
                </label>
                <input
                  type="date"
                  id="reservationDate"
                  name="date"
                  className="form-control"
                  value={reservation.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="startTime" className="form-label">
                  Start Time:
                </label>
                <input
                  type="time"
                  id="startTime"
                  name="start_time"
                  className="form-control"
                  value={reservation.start_time}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="endTime" className="form-label">
                  End Time:
                </label>
                <input
                  type="time"
                  id="endTime"
                  name="end_time"
                  className="form-control"
                  value={reservation.end_time}
                  readOnly
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Make Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Trainer;
