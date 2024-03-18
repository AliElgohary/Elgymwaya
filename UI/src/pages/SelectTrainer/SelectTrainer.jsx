import { Button, Col, Container, Row } from "react-bootstrap";
import style from "./SelectTrainer.module.css";
import coauch from "../../assets/trainersImages/fitness1.png";
import { getAllcoaches } from "../../thunks/coaches";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function SelectTrainer() {
  const dispatch = useDispatch();
  const coaches = useSelector((state) => state.coaches.list);
  useEffect(() => {
    dispatch(getAllcoaches());
  }, []);
  return (
    <div className={style.AllTrainersPages}>
      <Container>
        <div className={`text-center mb-5 ${style.header}`}>
          <h1>Meet Our Coaches</h1>
          <p>cdccc cdcsc cdcdc cdcd cdcdc cdcdc</p>
        </div>
        <Row className={style.gridBox}>
          {coaches.map((coach) => (
            <Col key={coach.id} sm={12} md={6} lg={4}>
              <div className={`${style.imgCard}`}>
                <img src={coach.profile_picture} alt={coach.full_name} />
                <div className={style.Coauchinfo}>
                  <h4>{coach.full_name}</h4>
                  <p>{coach.phone_number}</p>
                  <div className={style.selectBtn}>
                    <Button>Select</Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SelectTrainer;
