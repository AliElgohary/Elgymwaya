import Carousel from "react-bootstrap/Carousel";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpeg";
import vandik from "../../assets/football.jpg";
import bigRamy from "../../assets/big ramy.jpeg";
import salah from "../../assets/salah.jpeg";
import { Link } from "react-router-dom";

import style from "./HomeSections.module.css";

function SlideShow() {
  return (
    <div style={{position:"relative"}}>
    
      <section
        className="slider container mb-3 position-relative"
        style={{ minHeight: "100vh" }}
      >
        <Carousel interval={3000} className={style.carousel}>
          {/****************/}
          <Carousel.Item className="slide position-relative ">
            <h1 className={style.mainHeader}>Find your Energy</h1>
            <div className="wrapper d-flex  flex-column flex-lg-row flex-xs-column  justify-content-center">
              <div className="align-self-start w-50">
                <Link
                  to="/"
                  className="text-light text-decoration-none fw-bold"
                >
                  01. PUSH NEW LEVEL OF PERFORMANCE.
                </Link>
                <img className="d-block w-75" src={s1} alt="Third slide" />
              </div>
              <div className="align-self-center w-25">
                <img className="d-block w-100" src={s2} alt="Third slide" />
                <Link
                  to="/"
                  className="text-light text-decoration-none fw-bold"
                >
                  02. IMPROVE YOUR BODY, MIND AND SPIRIT.
                </Link>
              </div>
              <div className="align-self-end w-25">
                <img
                  className="d-block w-75 ms-auto"
                  src={vandik}
                  alt="Third slide"
                />
                <Link
                  to="/"
                  className="text-light text-decoration-none fw-bold"
                >
                  02. IMPROVE YOUR BODY, MIND AND SPIRIT.
                </Link>
              </div>
            </div>
          </Carousel.Item>
          {/****************/}
          <Carousel.Item className="slide">
            <div className="wrapper d-flex flex-column flex-lg-row justify-content-center">
              <div className="align-self-start w-50">
                <img className="d-block w-75" src={s4} alt="Third slide" />
                <Link
                  to="/"
                  className="text-light text-decoration-none fw-bold w-50 d-block"
                >
                  03. EXPERIENCE UNMISTAKABLE VALUE AND LIMITLESS OPPORTUNITIES.
                </Link>
              </div>

              <div className="align-self-end w-50">
                <Link
                  to="/"
                  className="text-light text-decoration-none fw-bold"
                >
                  03. EXPERIENCE UNMISTAKABLE VALUE AND LIMITLESS
                  OPPORTUNITIES..
                </Link>
                <img className="d-block w-100" src={s5} alt="Third slide" />
              </div>
            </div>
          </Carousel.Item>
          {/****************/}
          <Carousel.Item className="slide">
            <h1 className={style.mainHeader}>Start your dream</h1>
            <div className="wrapper d-flex flex-column flex-lg-row justify-content-center">
              <div className="align-self-start w-50">
                <Link
                  to="/"
                  className="text-light text-decoration-none fw-bold"
                >
                  03. Programs for football players
                </Link>
                <img className="d-block w-75" src={salah} alt="Third slide" />
              </div>

              <div className="align-self-center w-50">
                <Link
                  to="/"
                  className="text-light text-decoration-none fw-bold"
                >
                  03. Champions preparation programmes
                </Link>
                <img className="d-block w-75" src={bigRamy} alt="Third slide" />
              </div>
            </div>
            　　　
          </Carousel.Item>
          　　　
        </Carousel>
        　　　
      </section>
    </div>
  );
}

export default SlideShow;
