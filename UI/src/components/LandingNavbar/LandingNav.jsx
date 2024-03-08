import styles from "./LandingNav.module.css";
import { IoLogIn } from "react-icons/io5";
import { RiUserAddFill } from "react-icons/ri";
import { IoBarbellOutline } from "react-icons/io5";
import { PiArrowBendRightDown } from "react-icons/pi";
import { Link as RouterLink } from "react-router-dom";
import logo from '../../assets/main_icon/dumbbell-svgrepo-com (2).png'
// Import Link from react-scroll
import { Link as ScrollLink } from "react-scroll";
const LogoutNav = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg text-light p-3 ${styles.navbar}`}>
        <h3>
          <span className={`navbar-brand text-light ${styles.brand}`}>
            ELGYMAWEYA
            <img src={logo}  style={{width:"40px"}}/>
          </span>
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <ScrollLink
                to="features" // Specify the id of the target section
                spy={true}
                smooth={true}
                duration={200}
                className={`nav-link fs-5 ${styles.item_links}`}
              >
                Features
                <PiArrowBendRightDown size={30} />
              </ScrollLink>
            </li>
            <li className="nav-item ">
              <RouterLink
                to="/register"
                className={`nav-link fs-5 ${styles.item_links}`}
              >
                Register
                <RiUserAddFill size={25} />
              </RouterLink>
            </li>
            <li className="nav-item">
              <RouterLink
                to="/login"
                className={`nav-link fs-5 ${styles.item_links}`}
              >
                Login
                <IoLogIn size={30} />
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default LogoutNav;
