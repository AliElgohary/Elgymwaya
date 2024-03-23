import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./FreeUserHomePage.module.css";
import NavBarUserHome from "../../components/NavBarUserHome";
import videoSlide from "../../assets/videos/slide2.mp4";
import Accordion from "react-bootstrap/Accordion";
import { Table } from "react-bootstrap";
import { faPlay, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function FreeUserHomePage() {
  const currentUser = useSelector((state) => state.me.currentUser);
  console.log(currentUser);

  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const handelShowVideo = (url) => {
    setShowVideo((v) => !v);
    if (url) {
      setVideoUrl(url);
    }
  };
  return (
    <div className={styles.Wrabber}>
      <NavBarUserHome />
      <div className={styles.sec1}>
        <div className={styles.videoWrapper}>
          <video className="img-fluid" autoPlay loop muted>
            <source src={videoSlide} type="video/mp4" />
          </video>
        </div>
        <div className={styles.text}>
          <h5 className="fs-1 fw-bold">
            Hello, {currentUser ? currentUser.full_name : "s"}
          </h5>
          <p className="fs-5">
            Welcome to <span style={{ color: "#6365ed" }}>ELGYMWAYA!</span> Get
            ready to kickstart your fitness journey with our free plan. We're
            excited to help you reach your fitness goals!
          </p>
        </div>
      </div>
      <div className=" container">
        <div className={`${styles.sec2}`}>
          <h2 className={styles.mainHeader}>Genral Routine</h2>
          <h4>
            <span>WORKOUT ROUTINES</span> THE COMPLETE 4-WEEK BEGINNER’S WORKOUT
            PROGRAM
          </h4>
          <p>
            Whether you're just starting out―or starting again―this fast-track
            workout plan will help you drastically improve your physique and
            fitness levels.
          </p>
          <div className={styles.glanceRoutine}>
            <h5>BEGINNER’S WORKOUT AT A GLANCE</h5>
            <ul>
              <li>
                <span className=" fw-bold">Week 1</span>: Full-body split
              </li>
              <li>
                <span className=" fw-bold">Week 2</span>: Two-day split: Upper
                body/Lower body
              </li>
              <li>
                <span className=" fw-bold">Week 3</span>: Three-day split:
                Push/Pull/Legs
              </li>
              <li>
                <span className=" fw-bold">Week 4</span>: Four-day split: Full
                body
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.sec3}`}>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item className="bg-dark" eventKey="0">
              <Accordion.Header className={`${styles.accrHead}`}>
                {" "}
                Week 1- <span>Full-Body Split</span>
              </Accordion.Header>
              <Accordion.Body>
                <Table bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th># DAY</th>
                      <th>TRAINING</th>
                      <th>EXERCISE</th>
                      <th className="text-center">VIDEO EXAMPLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sat</td>
                      <td>Full Body</td>
                      <td className={styles.exr}>
                        Bench, Dumbbells , Adjustable Cable , Machine ,
                        Lat,Pulldown Bar
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/etVSDsuQeJM"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr className={styles.rest}>
                      <td>San</td>
                      <td>rest</td>
                      <td className={styles.exr}>_</td>
                      <td>_</td>
                    </tr>
                    <tr>
                      <td>Mon</td>
                      <td>Full Body</td>
                      <td className={styles.exr}>
                        Adjustable Cable Machine, Lat Pulldown Bar
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/g3Ow81GVg-A"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr className={styles.rest}>
                      <td>Tus</td>
                      <td>rest</td>
                      <td className={styles.exr}>_</td>
                      <td>_</td>
                    </tr>
                    <tr>
                      <td>Wed</td>
                      <td>Full Body</td>
                      <td className={styles.exr}>
                        Adjustable Cable Machine, Rope Attachment ,Bench,
                        Dumbbells
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/MLTl30v3huo"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Thr</td>
                      <td>Full Body</td>
                      <td className={styles.exr}>
                        Bench, Dumbbells , Adjustable Cable , Machine
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/MLTl30v3huo"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr className={styles.rest}>
                      <td>fri</td>
                      <td>rest</td>
                      <td className={styles.exr}>_</td>
                      <td>_</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="bg-dark" eventKey="1">
              <Accordion.Header className={`${styles.accrHead}`}>
                Week 2
              </Accordion.Header>
              <Accordion.Body>
                <Table bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th># DAY</th>
                      <th>TRAINING</th>
                      <th>EXERCISE</th>
                      <th className="text-center">VIDEO EXAMPLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sat</td>
                      <td>Upper Body</td>
                      <td className={styles.exr}>
                        BarbellAdjustable Cable,Machine, Lat,Pulldown
                        Bar,Dumbbells
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/3IQVNjWH60A"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr className={styles.rest}>
                      <td>San</td>
                      <td>rest</td>
                      <td className={styles.exr}>_</td>
                      <td>_</td>
                    </tr>
                    <tr>
                      <td>Mon</td>
                      <td>Lower Body</td>
                      <td className={styles.exr}>
                        scoaad , leg Mahine push , dead left
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/8zWDuWKdBZU"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr className={styles.rest}>
                      <td>Tus</td>
                      <td>rest</td>
                      <td className={styles.exr}>_</td>
                      <td>_</td>
                    </tr>
                    <tr>
                      <td>Wed</td>
                      <td>Upper Body</td>
                      <td className={styles.exr}>
                        BarbellAdjustable Cable,Machine, Lat,Pulldown
                        Bar,Dumbbells
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/3IQVNjWH60A"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Thr</td>
                      <td>Lower Body</td>
                      <td className={styles.exr}>
                        scoaad , leg Mahine push , dead left
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/8zWDuWKdBZU"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr className={styles.rest}>
                      <td>fri</td>
                      <td>rest</td>
                      <td className={styles.exr}>_</td>
                      <td>_</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="bg-dark" eventKey="2">
              <Accordion.Header className={`${styles.accrHead}`}>
                Week 3
              </Accordion.Header>
              <Accordion.Body>
                <Table bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th># DAY</th>
                      <th>TRAINING</th>
                      <th>EXERCISE</th>
                      <th className="text-center">VIDEO EXAMPLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sat</td>
                      <td>Push</td>
                      <td className={styles.exr}>
                        {" "}
                        Barbell, Bench - Bench, Dumbbells - Bench, EZ-Bar- Smith
                        Machine
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/b6ouj88iBZs"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>San</td>
                      <td>Pull</td>
                      <td className={styles.exr}>
                        Barbell Dumbbells ,Bench, Dumbbells ,Adjustable Cable
                        ,Machine, EZ-Bar, ,Preacher Bench
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/DXL18E7QRbk"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Mon</td>
                      <td>Leg</td>
                      <td className={styles.exr}>
                        scoaad , leg Mahine push , dead left
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/8zWDuWKdBZU"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Tus</td>
                      <td>Push</td>
                      <td className={styles.exr}>
                        Barbell, Bench - Bench, Dumbbells - Bench, EZ-Bar- Smith
                        Machine
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/b6ouj88iBZs"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Wed</td>
                      <td>Pull</td>
                      <td className={styles.exr}>
                        Adjustable Cable Machine, Rope Attachment ,Bench,
                        Dumbbells
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/DXL18E7QRbk"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Thr</td>
                      <td>Leg</td>
                      <td className={styles.exr}>
                        scoaad , leg Mahine push , dead left
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/H6mRkx1x77k"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr className={styles.rest}>
                      <td>fri</td>
                      <td>rest</td>
                      <td className={styles.exr}>_</td>
                      <td>_</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="bg-dark" eventKey="3">
              <Accordion.Header className={`${styles.accrHead}`}>
                Week 4
              </Accordion.Header>
              <Accordion.Body>
                <Table bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th># DAY</th>
                      <th>TRAINING</th>
                      <th>EXERCISE</th>
                      <th className="text-center">VIDEO EXAMPLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sat</td>
                      <td>Push</td>
                      <td className={styles.exr}>
                        {" "}
                        Barbell, Bench - Bench, Dumbbells - Bench, EZ-Bar- Smith
                        Machine
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/b6ouj88iBZs"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>San</td>
                      <td>Pull</td>
                      <td className={styles.exr}>
                        Barbell Dumbbells ,Bench, Dumbbells ,Adjustable Cable
                        ,Machine, EZ-Bar, ,Preacher Bench
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/DXL18E7QRbk"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Mon</td>
                      <td>Leg</td>
                      <td className={styles.exr}>
                        scoaad , leg Mahine push , dead left
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/8zWDuWKdBZU"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Tus</td>
                      <td>Push</td>
                      <td className={styles.exr}>
                        Barbell, Bench - Bench, Dumbbells - Bench, EZ-Bar- Smith
                        Machine
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/b6ouj88iBZs"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Wed</td>
                      <td>Pull</td>
                      <td className={styles.exr}>
                        Adjustable Cable Machine, Rope Attachment ,Bench,
                        Dumbbells
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/DXL18E7QRbk"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Thr</td>
                      <td>Leg</td>
                      <td className={styles.exr}>
                        scoaad , leg Mahine push , dead left
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary m-auto d-block"
                          onClick={() =>
                            handelShowVideo(
                              "https://www.youtube.com/embed/H6mRkx1x77k"
                            )
                          }
                        >
                          <FontAwesomeIcon color="#595bd3" icon={faPlay} />
                        </button>
                      </td>
                    </tr>
                    <tr className={styles.rest}>
                      <td>fri</td>
                      <td>rest</td>
                      <td className={styles.exr}>_</td>
                      <td>_</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {showVideo && (
            <>
              <div className={styles.videoUp}>
                <span onClick={handelShowVideo}>
                  <FontAwesomeIcon icon={faX} />
                </span>
                <MDBContainer>
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={videoUrl}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </MDBContainer>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FreeUserHomePage;

// https://www.youtube.com/embed/etVSDsuQeJM
// https://www.youtube.com/embed/g3Ow81GVg-A
// https://www.youtube.com/embed/MLTl30v3huo

//UpperBody
// "https://www.youtube.com/embed/3IQVNjWH60A"
//Leg Day
//"https://www.youtube.com/embed/8zWDuWKdBZU"
// "https://www.youtube.com/embed/H6mRkx1x77k"
//Push Day
("https://www.youtube.com/embed/b6ouj88iBZs");
//Pull Day
// "https://www.youtube.com/embed/DXL18E7QRbk"
