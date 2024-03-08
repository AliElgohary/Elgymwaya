import LandingFooter from "../../components/LandingFooter/LandingFooter";
import LogoutNav from "../../components/LandingNavbar/LandingNav";
import Landing from "../../pages/Landing/Landing";
import styles from "./LandingLayout.module.css";
import "../../styles/vars.css";
import { Outlet } from "react-router-dom";
import SlideShow from "../../components/HomeSections/SlideShow";
const LandingLayout = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.sec1}>
          <LogoutNav />
          <SlideShow/>
        </div>
        <Outlet />
        <LandingFooter />
      </div>
    </>
  );
};

export default LandingLayout;
