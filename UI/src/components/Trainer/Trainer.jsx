import { Image } from "react-bootstrap";
import trainerImage from "../../assets/trainer.png";
import style from "./Trainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
function Trainer() {
  return (
    <>
      <h2>Trainer</h2>
      <div>
        <Image src={trainerImage} className={style.userImage} roundedCircle />
        <span className="text-dark">Ahemd Hani</span>
      </div>
      <div id="contact-info">
        <h5 className={style.infoHead}>contact info</h5>
        <div id="phone">
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          <span className={style.infoSpan}>Phone: 01245789020</span>
        </div>
        <div id="email">
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          <span className={style.infoSpan}>Email: ahdv45@gmail.com</span>
        </div>
      </div>
    </>
  );
}

export default Trainer;
