import { useState } from "react";
import TraineeRotineNav from "../../components/TraineeRotineNav/TraineeRotineNav";
import { Image, Modal, Row } from "react-bootstrap";
import styles from "./TraineeRotine.module.css";
import { faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
import videoSlide from "../../assets/videos/slide2.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { longNumber } from "../../utils/longNumber";
import { useSelector } from "react-redux";
import {
  getCurrentUserClientsWithNoWorkouts,
  getCurrentUserClientsWithWorkouts,
} from "../../store/selectors/userSelectors";
import moment from "moment";
import WorkoutForm from "./WorkoutForm";
import ClientCard from "./ClientCard";
import CoachReservations from "./CoachReservations";
import WithCurrentUserRedirect from "../../components/common/WithCurrentUserRedirect";
import CoachFeedback from "./CoachFeedback";

function CoachHomepage() {
  const [showInfoMode, setShowInfoMode] = useState(false);
  const [AddRoutineMode, setAddRoutineMode] = useState(false);
  const [selectedClient, setSelectedClient] = useState();
  const clientsWithNoWorkouts = useSelector(
    getCurrentUserClientsWithNoWorkouts
  );
  const clientsWithWorkouts = useSelector(getCurrentUserClientsWithWorkouts);

  const handleCloseRoutineModal = () => setAddRoutineMode(false);
  const handleOpenRoutineModal = (client) => {
    setSelectedClient(client);
    setAddRoutineMode(true);
  };

  const handelShowInfo = (client) => {
    setSelectedClient(client);
    setShowInfoMode(true);
  };

  return (
    <div className="position-relative ">
      <TraineeRotineNav />
      <div className={styles.videoContainer}>
        <video muted autoPlay loop>
          <source src={videoSlide} type="video/mp4" />
        </video>
      </div>
      <Row style={{ width: "100%", padding: "15px 20px" }}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trainee need Routine</h2>
            <span className={styles.count}>
              {longNumber(clientsWithNoWorkouts.length)}
            </span>
          </div>

          <div className={styles.cardsWrapper}>
            {clientsWithNoWorkouts.map((client) => (
              <div key={client._id} className={styles.card}>
                <div className={styles.imageContainer}>
                  <Image
                    src={client.profile_picture}
                    roundedCircle
                    width={30}
                    height={30}
                  />
                </div>
                <div className={styles.content}>
                  <span className={styles.title}>{client.full_name}</span>
                  <span className={styles.subTitle}>
                    subscription date:{" "}
                    {moment(client.subscription_date).format("YYYY-MM-d")}
                  </span>
                </div>
                <button
                  className="btn-primary"
                  onClick={() => handleOpenRoutineModal(client)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                  Add Routine
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>My Trainees</h2>
            <span className={styles.count}>
              {longNumber(clientsWithWorkouts.length)}
            </span>
          </div>

          <div className={styles.cardsWrapper}>
            {clientsWithWorkouts.map((client) => (
              <div key={client._id} className={styles.card}>
                <div className={styles.imageContainer}>
                  <Image
                    src={client.profile_picture}
                    roundedCircle
                    width={30}
                    height={30}
                  />
                </div>
                <div className={styles.content}>
                  <span className={styles.title}>{client.full_name}</span>
                  <span className={styles.subTitle}>
                    subscription date:{" "}
                    {moment(client.subscription_date).format("YYYY-MM-d")}
                  </span>
                </div>
                <button
                  className="btn-primary"
                  onClick={() => handelShowInfo(client)}
                >
                  <FontAwesomeIcon icon={faEye} />
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

        <CoachReservations />
        <CoachFeedback />
      </Row>

      <Modal
        show={AddRoutineMode}
        onHide={handleCloseRoutineModal}
        dialogClassName="mw-100"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Routine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WorkoutForm
            clientId={selectedClient?._id}
            handleCloseModal={handleCloseRoutineModal}
          />
        </Modal.Body>
      </Modal>

      <Modal show={showInfoMode} onHide={() => setShowInfoMode(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ClientCard client={selectedClient} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithCurrentUserRedirect(
  CoachHomepage,
  (currentUser) => currentUser.role == "coach"
);
