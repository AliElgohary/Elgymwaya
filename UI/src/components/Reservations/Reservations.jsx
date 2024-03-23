import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./Reservations.module.css";

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchReservations = async () => {
      if (!token) {
        console.log("No token found");
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:5000/clientt/reservations",
          {
            headers: {
              token,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch reservations");
        }

        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchReservations();
  }, [token]);

  return (
    <div className={style.reservationsContainer}>
      <h2>Your Reservations</h2>
      {reservations.length > 0 ? (
        <ul className={style.reservationList}>
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
        </ul>
      ) : (
        <p>No reservations found.</p>
      )}
    </div>
  );
}

export default Reservations;
