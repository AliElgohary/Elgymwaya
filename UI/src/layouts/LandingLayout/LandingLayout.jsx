import LandingFooter from "../../components/LandingFooter/LandingFooter";
import LogoutNav from "../../components/LandingNavbar/LandingNav";
import Landing from "../../pages/Landing/Landing";
import styles from "./LandingLayout.module.css";

const LandingLayout = () => {
  return (
    <>
      <div className={styles.back}>
        <LogoutNav />
        <Landing />
        <LandingFooter />
      </div>
    </>
  );
};

export default LandingLayout;
