import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LandingFooter.module.css";
import { IoBarbellOutline } from "react-icons/io5";
import { faFacebook, faGithub, faInstagram, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

const LandingFooter = () => {
  return (
        <div className="">
         <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#1c2331'}}>
          {/* Section: Social media */}
          <section className="d-flex justify-content-between p-4" style={{backgroundColor: '#000'}}>
            {/* Left */}
            <div className="me-5 text-light">
              <span className="text-light">Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="https://www.facebook.com" className="text-primary me-4">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" className="text-primary me-4">
                  <FontAwesomeIcon icon={faTwitter} />  
              </a>
              <a href="https://github.com/AliElgohary/Elgymwaya" className="text-white me-4">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="text-danger me-4">
              <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.instagram.com" className="text-danger me-4">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://web.whatsapp.com/" className="text-success me-4">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className>
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">ELGYMAWEYA</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
                  <p>
                    Let's start together with a great start for you and a better future for a better body
                  </p>
                </div>
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Weekly schedule</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
                  <div>
                    <h6 className="text-danger mb-0">FITNESS CLUB HOURS</h6>
                    <p className="mb-0">Mon – Fri 4:45am – 11:00pm</p>
                    <p>Sat – Sun 7:00am – 7:00pm</p>
                  </div>
                  <div>
                    <h6 className="text-danger mb-0">KINECTIVE KIDS</h6>
                    <p className="mb-0"> Mon – Thur 7am – 1pm & 3pm – 9pm</p>
                    <p className="mb-0">Fri 7am – 1pm & 3pm – 6pm</p>
                    <p>Sat – Sun 8am – 1pm</p>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
                  <p><i className="fas fa-envelope mr-3" /> info@example.com</p>
                  <p className=" mb-0"><i className="fas fa-home mr-3" /> Cairo</p>
                  <p><i className="fas fa-phone mr-3" /> + 20 1006094157</p>
                  <p className=" mb-0"><i className="fas fa-home mr-3" /> Alex</p>
                  <p><i className="fas fa-print mr-3" /> + 20 1277319020</p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2024 Copyright: Elgymwaya dev team
          </div>
  </footer>
</div>


    );
  };

export default LandingFooter;

  // <footer className={`py-5 mt-5`}>
  //   <div className="container">
  //     <div className="row justify-content-between">
  //       <div className="mb-4 col-md-4 mb-md-0">
  //         <div
  //           className={`d-flex align-items-center mb-4 ${styles.responsive}`}
  //         >
  //           <h4 className="align-items-center">ELGYMAWEYA</h4>
  //           <IoBarbellOutline size="40" className="me-2" />
  //         </div>
  //       </div>
  //       <div className="col-md-8">
  //         <div className="row row-cols-1 row-cols-md-3  d-flex justify-content-end text-center">
  //           {/* Resources */}
  //           <div className="col">
  //             <h3 className="mb-4 text-sm font-semibold text-dark">
  //               Resources
  //             </h3>
  //             <ul className="list-unstyled text-muted font-medium">
  //               <li className="mb-2">
  //                 <a
  //                   href="https://discord.gg/wVpqdpzv"
  //                   className={`text-decoration-none ${styles.link}`}
  //                   target="_blank"
  //                 >
  //                   ELGYMAWEYA
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="https://getbootstrap.com/"
  //                   className={`text-decoration-none ${styles.link}`}
  //                   target="_blank"
  //                 >
  //                   Bootstrap
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>

  //           {/* Follow us */}
  //           <div className="col">
  //             <h3 className="mb-4 text-sm font-semibold text-dark">
  //               Follow us
  //             </h3>
  //             <ul className="list-unstyled text-muted font-medium">
  //               <li className="mb-2">
  //                 <a
  //                   href="https://github.com/AliElgohary/Elgymwaya"
  //                   className={`text-decoration-none ${styles.link}`}
  //                   target="_blank"
  //                 >
  //                   Github
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="https://discord.gg/wVpqdpzv"
  //                   className={`text-decoration-none ${styles.link}`}
  //                   target="_blank"
  //                 >
  //                   Discord
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <hr className="my-6" />
  //     <div className={`row justify-content-between ${styles.responsive}`}>
  //       <span className="text-muted text-sm">© 2024 ELGYMAWEYA TEAM.</span>
  //     </div>
  //   </div>
  // </footer>