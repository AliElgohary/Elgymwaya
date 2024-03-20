import { Button, Col, Container, Row } from "react-bootstrap";
import style from "./SelectTrainer.module.css";
import { getAllcoaches } from "../../thunks/coaches";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCoachById } from "./../../thunks/coach";
import { useNavigate } from "react-router-dom";

function SelectTrainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coaches = useSelector((state) => state.coaches.list);
  useEffect(() => {
    dispatch(getAllcoaches());
  }, []);
  const handleSelectCoach = (coachId) => {
    dispatch(fetchCoachById(coachId));
    navigate(`/coachDetails/${coachId}`);
  };
  return (
    <div className={style.AllTrainersPages}>
      <Container>
        <div className={`text-center mb-5 ${style.header}`}>
          <h1>Discover Our Talented Coaches</h1>
          <p>Explore the expertise and skills of our coaching team:</p>
        </div>
        <Row className={style.gridBox}>
          {coaches.map((coach) => (
            <Col key={coach._id} sm={12} md={6} lg={4}>
              <div className={`${style.imgCard}`}>
                <img src={coach.profile_picture} alt={coach.full_name} />
                <div className={style.Coauchinfo}>
                  <h4>{coach.full_name}</h4>
                  {coach.feedbacks.length > 0 ? (
                    <h4>Rate: {coach.feedbacks[0].rating}</h4>
                  ) : (
                    <p className="text-info">No feedback available</p>
                  )}
                  <p>{coach.phone_number}</p>
                  <div className={style.selectBtn}>
                    <Button onClick={() => handleSelectCoach(coach._id)}>
                      Show
                    </Button>
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
