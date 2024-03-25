import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Reservations.module.css";
import { fetchReservations } from "../../thunks/reservationThunks";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reservations() {
  const dispatch = useDispatch();
  const { reservations, loading, error } = useSelector(
    (state) => state.reservationsState
  );

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className={style.reservationsContainer}>
      <h2>Your Reservations</h2>
      {reservations.length > 0 ? (
        <ul className={style.reservationList}>
        <Slider {...settings}>
          {reservations.map((reservation) => (
              <li key={reservation._id} className={style.reservationItem}>
                <div className={style.reservationDetail}>
                  <img
                    src={reservation.coach_id.profile_picture}
                    alt="Coach"
                    className={style.coachImage}
                  />
                  <div>
                    <h3>{reservation.coach_id.full_name}</h3>
                    <p>
                      Date:{" "}
                      {new Date(reservation.date).toLocaleDateString("en-GB")}
                    </p>{" "}
                    <p>
                      Time: {reservation.start_time} - {reservation.end_time}
                    </p>
                  </div>
                </div>
              </li>
              ))}
              </Slider>
        </ul>
      ) : (
        <p>No reservations found.</p>
      )}
    </div>
  );
}

export default Reservations;
