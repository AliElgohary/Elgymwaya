import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./TraineeRotine.module.css";
import { longNumber } from "../../utils/longNumber";
import { Image } from "react-bootstrap";
import moment from "moment";

const CoachFeedback = () => {
  const currentCoach = useSelector((state) => state.me.currentUser);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    if (currentCoach && currentCoach.feedbacks) {
      setFeedbacks(currentCoach.feedbacks);
    }
  }, [currentCoach]);

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Clients Feedback</h2>
        <span className={styles.count}>{longNumber(feedbacks.length)}</span>
      </div>

      <div className={styles.cardsWrapper}>
        {feedbacks.map((feedback) => (
          <div key={feedback._id} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src={feedback.client_id?.profile_picture}
                roundedCircle
                width={30}
                height={30}
              />
            </div>
            <div className={styles.content}>
              <span className={styles.title}>
                {feedback.client_id?.full_name}
              </span>
              <span className={styles.subTitle}>
                Rating: {feedback.rating}/5
              </span>
              <span className={styles.subTitle}>
                Comment: {feedback.comment}
              </span>
              <span className={styles.subTitle}>
                Date: {moment(feedback.date).format("YYYY-MM-DD")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachFeedback;
