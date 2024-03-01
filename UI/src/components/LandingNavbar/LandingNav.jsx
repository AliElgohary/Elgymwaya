import styles from "./LandingNav.module.css";
import { IoLogIn } from "react-icons/io5";
import { RiUserAddFill } from "react-icons/ri";
import { IoBarbellOutline } from "react-icons/io5";
import { PiArrowBendRightDown } from "react-icons/pi";

import { Link } from "react-scroll";
const LogoutNav = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  ${styles.navbar}`}>
        <a className="text-decoration-none">
          <span className={`navbar-brand  ${styles.brand}`}>
            ELGYMAWEYA
            <IoBarbellOutline size={35} />
          </span>
        </a>
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
              <Link
                to="features" // Specify the id of the target section
                spy={true}
                smooth={true}
                duration={200}
                className={`nav-link fs-5 ${styles.item_links}`}
              >
                Features
                <PiArrowBendRightDown size={30} />
              </Link>
            </li>
            <li className="nav-item ">
              <a className={`nav-link fs-5 ${styles.item_links}`}>
                Register
                <RiUserAddFill size={25} />
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link fs-5 ${styles.item_links}`}>
                Login
                <IoLogIn size={30} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default LogoutNav;
