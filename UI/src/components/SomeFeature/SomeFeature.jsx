import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/f1.jpg";
import img2 from "../../assets/f2.jpg";
import img3 from "../../assets/f3.jpg";
import style from "./SomeFeature.module.css";
function SomeFeature() {
  return (
    <>
      <Container fluid className="mt-5">
        <Row className="m-3">
          <Col
            lg={{ order: 0 }}
            sm={{ order: 0 }}
            className="col col-lg-6 col-sm-12 p-0 "
          >
            <img src={img1} className="w-100" alt="image1" />
          </Col>
          <Col
            lg={{ order: 1 }}
            sm={{ order: 1 }}
            className="col col-lg-6 col-sm-12 p-0 "
          >
            <div className={style.text_box}>
              <h2 className={`p-0 ${style.featureHeader}`}>
                Personal Training
              </h2>
              <p>
                Reach your fitness goals faster by working with one of our
                expert personal trainers. Your trainer will monitor your
                progress by accessing your profile through Kinective Live to
                create a customized, highly effective training experience.
              </p>
              <button className="btn">LEARN MORE</button>
            </div>
          </Col>
          <Col
            lg={{ order: 2 }}
            sm={{ order: 3 }}
            className="col col-lg-6 col-sm-12 p-0 "
          >
            <div className={style.text_box}>
              <h2 className={`p-0 ${style.featureHeader}`}>
                Cardio & Weight Training
              </h2>
              <p>
                Sync your heart rate monitor to Kinective Live and do your own
                thing in areas designated for free weights and app-connected
                Technogym® selectorized and cardio machines.
              </p>
              <button className="btn">LEARN MORE</button>
            </div>
          </Col>
          <Col
            lg={{ order: 3 }}
            sm={{ order: 2 }}
            className="col col-lg-6 col-sm-12 p-0 "
          >
            <img src={img2} className="w-100" alt="image1" />
          </Col>
          <Col
            lg={{ order: 4 }}
            sm={{ order: 4 }}
            className="col col-lg-6 col-sm-12 p-0 "
          >
            <img src={img3} className="w-100" alt="image1" />
          </Col>
          <Col
            lg={{ order: 5 }}
            sm={{ order: 5 }}
            className="col col-lg-6 col-sm-12 p-0 "
          >
            <div className={style.text_box}>
              <h2 className={`p-0 ${style.featureHeader}`}>
                Upgrade to ultimate value
              </h2>
              <p>
                Our many luxury amenities—from fresh-made smoothies at the Zest
                Café, to complimentary, all-natural bath and body products—make
                Kinective your home away from home.
              </p>
              <button className="btn">LEARN MORE</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SomeFeature;
