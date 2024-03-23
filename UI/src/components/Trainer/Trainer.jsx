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
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Rating,
} from "@mui/material";
import { makeFeedback } from "../../thunks/feedbackThunks";
function Trainer() {
  const [reservation, setReservation] = useState({
    date: "",
    start_time: "",
    end_time: "",
  });
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState({ rating: 2, comment: "" });
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

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to send feedback
    dispatch(makeFeedback(feedback));
    setFeedbackOpen(false); // Close modal after submission
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
            {/* Feedback button */}
            <h5 className={style.infoHead}>Give Your Coach Feedback</h5>
            {coachInfo && (
              <div>
                <Button
                  variant="outlined"
                  onClick={() => setFeedbackOpen(true)}
                >
                  Give Feedback
                </Button>
              </div>
            )}

            {/* Feedback Modal */}
            <Modal
              open={feedbackOpen}
              onClose={() => setFeedbackOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  outline: "none",
                }}
              >
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="div"
                  sx={{ mb: 2 }}
                >
                  Give Feedback
                </Typography>
                <form onSubmit={handleFeedbackSubmit}>
                  <Rating
                    name="rating"
                    value={feedback.rating}
                    onChange={(event, newValue) => {
                      setFeedback((prev) => ({ ...prev, rating: newValue }));
                    }}
                  />
                  <TextField
                    id="feedback-comment"
                    label="Comment"
                    name="comment"
                    multiline
                    rows={4}
                    value={feedback.comment}
                    onChange={handleFeedbackChange}
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2, mb: 2 }}
                  />
                  <Button type="submit" variant="contained">
                    Submit Feedback
                  </Button>
                </form>
              </Box>
            </Modal>
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
