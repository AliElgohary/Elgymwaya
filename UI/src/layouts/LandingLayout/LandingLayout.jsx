import LandingFooter from "../../components/LandingFooter/LandingFooter";
import LogoutNav from "../../components/LandingNavbar/LandingNav";
import styles from "./LandingLayout.module.css";
import "../../styles/vars.css";
import { Link, Outlet } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import SlideShow from "../../components/HomeSections/SlideShow";
import SomeFeature from "../../components/SomeFeature/SomeFeature";
import LandingSec1 from "../../components/landingSections/LandingSec1/LandingSec1";
import Sec2 from "../../components/landingSections/LandingSec1/sec2/Sec2";
import Sec4 from "../../components/landingSections/sec4/Sec4";
import OurTrainersSection from "../../components/landingSections/OurTrainersSections/OurTrainersSection";
const LandingLayout = () => {
  return (
    <>
      <div className={styles.background}>
        <LandingSec1/>
        <Sec2/>
        <Sec4/>
        <Outlet />
        <SomeFeature />
        <OurTrainersSection/>
        <LandingFooter />
      </div>
    </>
  );
};

export default LandingLayout;
