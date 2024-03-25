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
import WithCurrentUserRedirect from "../../components/common/WithCurrentUserRedirect";
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
        <Row className="justify-content-between gy-3 mb-3">
          <Col lg={3} md={12} className={style.TrainerInfoBox}>
            <UserInfo />
          </Col>
          <Col lg={4} md={12} className={style.TrainerInfoBox}>
            <Trainer />
          </Col>
          <Col lg={4} md={12} className={style.TrainerInfoBox}>
            <MembershipTracker />
          </Col>
        </Row>
        <Row className="justify-content-start gap-5 mb-3 mt-5">
          <Col lg={6} md={12} className={style.TrainerInfoBox}>
            <UserRoutine />
          </Col>
          <Col
            lg={5}
            md={12}
            style={{ maxHeight: "500px" }}
            className={style.TrainerInfoBox}
          >
            <Reservations />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithCurrentUserRedirect(UserHomePage, (currentUser) => {
  return currentUser.plan_id?.description === "gold plan";
});
