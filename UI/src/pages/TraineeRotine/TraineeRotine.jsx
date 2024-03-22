import React, { useState } from "react";
import TraineeRotineNav from "../../components/TraineeRotineNav/TraineeRotineNav";
import { Button, Col, Image, Row } from "react-bootstrap";
import styles from "./TraineeRotine.module.css";
import user from "../../assets/user.png";
import {
  faCircleInfo,
  faCirclePlus,
  faCircleXmark,
  faFileCirclePlus,
  faPlugCirclePlus,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TraineeRotine() {
  const [showInfoMode, setShowInfoMode] = useState(false);
  const [AddRoutineMode, setAddRoutineMode] = useState(false);
  const [routine, setRoutine] = useState({
    Saturday: "",
    Sunday: "",
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
  });

  const handleChange = (day, value) => {
    setRoutine((prevRoutine) => ({
      ...prevRoutine,
      [day]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the routine state, for example, send it to an API
    console.log("Routine:", routine);
    setAddRoutineMode((currentMode) => !currentMode);
  };

  const handelShowInfo = () => {
    setShowInfoMode((showInfo) => !showInfo);
  };
  const handelShowForm = () => {
    setAddRoutineMode((currentMode) => !currentMode);
  };
  return (
    <div>
      <TraineeRotineNav trainerName="Ahmed Hani" />
      <Row style={{width:"100%"}}>
        <Col sm={12}>
          <div className={styles.routineBox}>
            <h5 className="fw-bold">
              Trainee need Routine :
              <span className=" text-danger-emphasis fw-light">
                {" "}
                __Count**********{" "}
              </span>{" "}
            </h5>

            <div className={styles.cart}>
              <div className={styles.imgBox}>
                <Image src={user} roundedCircle width="30px" />
              </div>
              <div className={styles.info}>
                <p className=" fw-bold m-0">trainee Name</p>
                <p className=" m-0  text-dark-emphasis">selected date</p>
              </div>
              <Button variant="success" onClick={handelShowForm}>
                <FontAwesomeIcon icon={faPlus} className="me-2" />
                ADD
              </Button>
            </div>
          </div>
        </Col>

        {/** ----------------------------------------------- **/}
        <Col sm={12}>
          <div className={styles.routineBox}>
            <h5 className="fw-bold">
              My Trainee :{" "}
              <span className=" text-danger-emphasis fw-light">
                **********__all trainee have have routine with tis trainer Count
              </span>{" "}
            </h5>

            <div className={styles.cart}>
              <div className={styles.imgBox}>
                <Image src={user} roundedCircle width="30px" />
              </div>
              <div className={styles.info}>
                <p className=" fw-bold m-0">trainee Name</p>
                <p className=" m-0  text-dark-emphasis">selected date</p>
              </div>
              <Button variant="success" onClick={handelShowInfo}>
                <FontAwesomeIcon icon={faCircleInfo} className="me-2" />
                View
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      {/** ---------------------Add Routine-------------------------- **/}
      {AddRoutineMode && (
        <>
          <div className={styles.bgFilter}>
            <div className={styles.formBox}>
              <button className={styles.exit} onClick={handelShowForm}>
                {" "}
                <FontAwesomeIcon icon={faCircleXmark} />{" "}
              </button>

              <div className={styles.traineeInfo}>
                <h4 className="fs-5"> Naaaaaaame </h4>
                <div className={styles.sec}>
                  <h5>Health Status</h5>
                  <div className="d-flex">
                    <p className=" text-dark-emphasis">Height : ___ ,</p>
                    <p className=" text-dark-emphasis">Weight : ___ ,</p>
                    <p className=" text-dark-emphasis">Age : __ ,</p>
                  </div>
                </div>
                <div className={styles.sec}>
                  <h5>Contact</h5>
                  <p className=" text-dark-emphasis">
                    Email : example@example.com
                  </p>
                  <p className=" text-dark-emphasis">
                    Phone : example@example.com
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="d-flex flex-column">
                <div className={styles.inpGroup}>
                  <label htmlFor="saturdayInput">Saturday:</label>
                  <input
                    id="saturdayInput"
                    type="text"
                    value={routine.Saturday}
                    onChange={(e) => handleChange("Saturday", e.target.value)}
                  />
                </div>
                <div className={styles.inpGroup}>
                  <label htmlFor="sundayInput">Sunday:</label>
                  <input
                    id="sundayInput"
                    type="text"
                    value={routine.Sunday}
                    onChange={(e) => handleChange("Sunday", e.target.value)}
                  />
                </div>
                <div className={styles.inpGroup}>
                  <label htmlFor="mondayInput">Monday:</label>
                  <input
                    id="mondayInput"
                    type="text"
                    value={routine.Monday}
                    onChange={(e) => handleChange("Monday", e.target.value)}
                  />
                </div>
                <div className={styles.inpGroup}>
                  <label htmlFor="tuesdayInput">Tuesday:</label>
                  <input
                    id="tuesdayInput"
                    type="text"
                    value={routine.Tuesday}
                    onChange={(e) => handleChange("Tuesday", e.target.value)}
                  />
                </div>
                <div className={styles.inpGroup}>
                  <label htmlFor="wednesdayInput">Wednesday:</label>
                  <input
                    id="wednesdayInput"
                    type="text"
                    value={routine.Wednesday}
                    onChange={(e) => handleChange("Wednesday", e.target.value)}
                  />
                </div>
                <div className={styles.inpGroup}>
                  <label htmlFor="thursdayInput">Thursday:</label>
                  <input
                    id="thursdayInput"
                    type="text"
                    value={routine.Thursday}
                    onChange={(e) => handleChange("Thursday", e.target.value)}
                  />
                </div>
                <div className={styles.inpGroup}>
                  <label htmlFor="fridayInput">Friday:</label>
                  <input
                    id="fridayInput"
                    type="text"
                    value={routine.Friday}
                    onChange={(e) => handleChange("Friday", e.target.value)}
                  />
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </>
      )}

      {/** ---------------------show Info-------------------------- **/}
      {showInfoMode && (
        <>
          <div className={styles.bgFilter}>
            <div className={styles.selctedTreaineeInfo}>
              <button onClick={handelShowInfo}>
                {" "}
                <FontAwesomeIcon icon={faCircleXmark} />{" "}
              </button>
              <h4 className="fs-5"> Naaaaaaame </h4>
              <div className={styles.imgBox_selcted}>
                <Image src={user} roundedCircle width="60px" />
              </div>
              <div className={styles.sec}>
                <h5>Health Status</h5>
                <div className="d-flex">
                  <p className=" text-dark-emphasis">Height : ___ ,</p>
                  <p className=" text-dark-emphasis">Weight : ___ ,</p>
                  <p className=" text-dark-emphasis">Age : __ ,</p>
                </div>
              </div>

              <div className={styles.sec}>
                <h5>Contact</h5>
                <p className=" text-dark-emphasis">
                  Email : example@example.com
                </p>
                <p className=" text-dark-emphasis">
                  Phone : example@example.com
                </p>
              </div>

              <div className={styles.sec}>
                <h5>Routine</h5>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TraineeRotine;
