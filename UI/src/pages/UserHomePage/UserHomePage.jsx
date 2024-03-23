import { Col, Container, Row } from "react-bootstrap";
import UserInfo from "../../components/UserInfo/UserInfo";
import Trainer from "../../components/Trainer/Trainer";
import style from "./UserHomePage.module.css";
import UserRoutine from "../../components/UserRoutine/UserRoutine";
import NavBarUserHome from "../../components/NavBarUserHome";
import MembershipTracker from "../../components/MembershipTracker/MembershipTracker";
import Reservations from "../../components/Reservations/Reservations";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function UserHomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/userHome") {
      navigate("/userHome", { replace: true });
    }
  }, [location.pathname, navigate]);
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
        <Row className="justify-content-between mb-3 gap-3">
          <Col xs={6} md={6} className={style.TrainerInfoBox}>
            <UserRoutine />
          </Col>
          <Col xs={6} md={6} className={style.TrainerInfoBox}>
            <Reservations />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserHomePage;
