import styles from "./LandingFooter.module.css";
import { IoBarbellOutline } from "react-icons/io5";

const LandingFooter = () => {
  return (
    <footer className={`py-5 mt-5`}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="mb-4 col-md-4 mb-md-0">
            <div
              className={`d-flex align-items-center mb-4 ${styles.responsive}`}
            >
              <h4 className="align-items-center">ELGYMAWEYA</h4>
              <IoBarbellOutline size="40" className="me-2" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="row row-cols-1 row-cols-md-3  d-flex justify-content-end text-center">
              {/* Resources */}
              <div className="col">
                <h3 className="mb-4 text-sm font-semibold text-dark">
                  Resources
                </h3>
                <ul className="list-unstyled text-muted font-medium">
                  <li className="mb-2">
                    <a
                      href="https://discord.gg/wVpqdpzv"
                      className={`text-decoration-none ${styles.link}`}
                      target="_blank"
                    >
                      ELGYMAWEYA
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://getbootstrap.com/"
                      className={`text-decoration-none ${styles.link}`}
                      target="_blank"
                    >
                      Bootstrap
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow us */}
              <div className="col">
                <h3 className="mb-4 text-sm font-semibold text-dark">
                  Follow us
                </h3>
                <ul className="list-unstyled text-muted font-medium">
                  <li className="mb-2">
                    <a
                      href="https://github.com/AliElgohary/Elgymwaya"
                      className={`text-decoration-none ${styles.link}`}
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/wVpqdpzv"
                      className={`text-decoration-none ${styles.link}`}
                      target="_blank"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className={`row justify-content-between ${styles.responsive}`}>
          <span className="text-muted text-sm">© 2024 ELGYMAWEYA TEAM.</span>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
