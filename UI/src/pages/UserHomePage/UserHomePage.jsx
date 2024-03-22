import { Col, Container, Row } from "react-bootstrap";
import UserInfo from "../../components/UserInfo/UserInfo";
import Trainer from "../../components/Trainer/Trainer";
import style from "./UserHomePage.module.css";
import UserRoutine from "../../components/UserRoutine/UserRoutine";
import NavBarUserHome from "../../components/NavBarUserHome";
import MembershipTracker from "../../components/MembershipTracker/MembershipTracker";
function UserHomePage() {
  return (
    <div>
      <NavBarUserHome />
      <Container className="mt-4" style={{ maxWidth: "97%" }}>
        <Row className="justify-content-between mb-3 gap-3">
          <UserInfo />
          <Col xs={12} md={6} className={style.TrainerInfoBox}>
            <Trainer />
          </Col>
          <Col xs={3} md={3} className={style.TrainerInfoBox}>
            <MembershipTracker />
          </Col>
        </Row>
        <Row>
          <UserRoutine />
        </Row>
      </Container>
    </div>
  );
}

export default UserHomePage;
