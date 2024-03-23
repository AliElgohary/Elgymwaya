import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/main_icon/dumbbell-svgrepo-com (1).png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/action/authActions";
import { getCurrentUser } from "../../store/selectors/userSelectors";
// eslint-disable-next-line react/prop-types
function TraineeRotineNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(getCurrentUser)
  return (
    <Navbar expand="lg" className="bg-light">
      <Container fluid>
        <Navbar.Brand href="/src">
          <span style={{ color: "#5d4957" }} className="me-2">ELGYMAWEYA</span>
          <Image src={logo} width={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex align-items-center ms-auto me-5">
            <NavDropdown
              title=""
              id="basic-nav-dropdown"
              className="mr-5"
              key="start"
            >
           <NavDropdown.Item>
                  <Link
                    to="/editProfile"
                    className="text-dark text-decoration-none"
                  >
                    Edit Profile
                  </Link>
                </NavDropdown.Item>
              <NavDropdown.Item style={{ backgroundColor: "#e3d8ee" }}>
                <span
                  onClick={() => {
                    localStorage.removeItem("token");
                    dispatch(logout());
                    navigate("/");
                  }}
                  className="text-dark text-decoration-none"
                >
                  Log Out
                </span>
              </NavDropdown.Item>
            </NavDropdown>
            <span style={{ fontSize: "14px" }} className="me-2">{currentUser?.full_name}</span>
            <Image src={currentUser?.profile_picture} roundedCircle width={40} height={40} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TraineeRotineNav;
