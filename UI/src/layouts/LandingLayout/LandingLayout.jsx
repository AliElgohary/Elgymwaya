import LandingFooter from "../../components/LandingFooter/LandingFooter";
import LogoutNav from "../../components/LandingNavbar/LandingNav";
import styles from "./LandingLayout.module.css";
import "../../styles/vars.css";
import { Outlet } from "react-router-dom";
import SlideShow from "../../components/HomeSections/SlideShow";
import SomeFeature from "../../components/SomeFeature/SomeFeature";
const LandingLayout = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.sec1}>
          <LogoutNav />
          <SlideShow />
        </div>
        <Outlet />
        <SomeFeature />
        <LandingFooter />
      </div>
    </>
  );
};

export default LandingLayout;
