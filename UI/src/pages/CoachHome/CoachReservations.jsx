import { useEffect, useState } from "react";
import { api } from "../../api/http";
import styles from "./TraineeRotine.module.css";
import { longNumber } from "../../utils/longNumber";
import { Image } from "react-bootstrap";
import moment from "moment";


const CoachReservations = () => {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    const token = localStorage.getItem("token");
    const response = await api.get("/coachh/reservations", {
      headers: {
        token,
      },
    });

    setReservations(response.data);
  };
  useEffect(() => {
    fetchReservations()
  }, []);

  const filteredReservations = reservations.filter(r => !!r.client_id)
  return (
    <div className={styles.section}>
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>Clients Reservations</h2>
      <span className={styles.count}>
        {longNumber(filteredReservations.length)}
      </span>
    </div>

    <div className={styles.cardsWrapper}>
      {filteredReservations.map((reservation) => (
        <div key={reservation._id} className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src={reservation.client_id.profile_picture}
              roundedCircle
              width={30}
              height={30}
            />
          </div>
          <div className={styles.content}>
            <span className={styles.title}>{reservation.client_id.full_name}</span>
            <span className={styles.subTitle}>
              date: {moment(reservation.date).format("YYYY-MM-d")}
            </span>
            <span className={styles.subTitle}>
              start {reservation.start_time}
            </span>
            <span className={styles.subTitle}>
              end time {reservation.end_time}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
};


export default CoachReservations;