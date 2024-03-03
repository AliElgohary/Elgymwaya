import { Col, Container, Row } from "react-bootstrap";
import UserInfo from "../../components/UserInfo/UserInfo";
import Trainer from "../../components/Trainer/Trainer";
import style from './UserHomePage.module.css'
import UserRoutine from "../../components/UserRoutine/UserRoutine";
function UserHomePage() {
  return (
    <div>
      <Container className="mt-4" style={{maxWidth:"97%"}}>
        <Row className="justify-content-between">
          <UserInfo />
          <Col  xs={12} md={6} className={style.TrainerInfoBox}>
          
          <Trainer/>
          </Col>
        </Row>
        <Row>
            <UserRoutine/>
        </Row>
      </Container>
    </div>
  );
}

export default UserHomePage;
