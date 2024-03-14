import React from 'react'
import style from './sec4.module.css'
import karate from "../../../assets/carate.avif"
import power from "../../../assets/power.webp"
import cycle from "../../../assets/cycle.jpg"
import box from "../../../assets/box.webp"
import workOut from "../../../assets/workout.webp"
import img from '../../../assets/medetaion.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons'
import boxIcon from "../../../assets/box.png"
import boxIconRed from "../../../assets/boxRed.png"
import calma from "../../../assets/calma.png"
import calmaRed from "../../../assets/calmaRed.png"
import karateIcon from "../../../assets/karate.png"
import karateIconRed from "../../../assets/karateRed.png"
import dumbleRed from "../../../assets/dumbleRed.png"
import dumble from "../../../assets/dumble.png"
import bike from "../../../assets/cycle.png"
import bikeRed from "../../../assets/cycleRed.png"
import hadeed from "../../../assets/hadeed.png"
import hadeedRed from "../../../assets/hadeedRed.png"
import brush from "../../../assets/brush.png"
function Sec4() {
    const hoverEffect = (e, img) => {

        e.target.previousElementSibling.children[0].src = img
    }
    const leaveEffect = (e, img) => {
        e.target.previousElementSibling.children[0].src = img;
    }

    return (
        <div className='container mt-5 my-5'>
            <div className={style.headerOne}>
                <h4>OUR FEATURED CLASS</h4>
                <img src={brush} alt="" />
            </div>
            <h3 className='fs-1 fw-bolder text-center m-4 mb-5'>We Are Offering Best Flexible Classes</h3>
            <div className='row justify-content-center gap-4' style={{ position: "relative" }}>
                <div onMouseEnter={(e) => hoverEffect(e, bikeRed)} onMouseLeave={(e) => leaveEffect(e, bike)} className={`col col-lg-5 col-12  ${style.col}`}>
                    <span className={style.cartIcons}>
                        <img className={style.imgIcons} src={bike} alt="" />
                    </span>
                    <img className={style.image} src={img} alt="image" />
                    <div className={style.boxText}>
                        <h3>Cycling</h3>
                        <p>Wednesday: 9:00am-10:00am</p>
                    </div>
                </div>
                <div onMouseEnter={(e) => hoverEffect(e, karateIconRed)} onMouseLeave={(e) => leaveEffect(e, karateIcon)} className={`col col-lg-3  col-12  ${style.col}`}>
                    <span className={style.cartIcons}>
                        <img className={style.imgIcons} src={karateIcon} alt="" />
                    </span>
                    <img className={style.image} src={karate} alt="image" />
                    <div className={style.boxText}>
                        <h3>Karate</h3>
                        <p>Friday: 10:00am-11:00am</p>
                    </div>
                </div>
                <div onMouseEnter={(e) => hoverEffect(e, dumbleRed)} onMouseLeave={(e) => leaveEffect(e, dumble)} className={`col col-lg-3 col-12   ${style.col}`}>
                    <span className={style.cartIcons}>
                        <img src={dumble} alt="" className={style.imgIcons} />
                    </span>
                    <img className={style.image} src={power} alt="image" />
                    <div className={style.boxText}>
                        <h3>Power</h3>
                        <p>Saturday: 9:00am-10:00am</p>
                    </div>
                </div>
                <div onMouseEnter={(e) => hoverEffect(e, calmaRed)} onMouseLeave={(e) => leaveEffect(e, calma)} className={`col col-lg-3 col-12   ${style.col}`}>
                    <span className={style.cartIcons}>
                        <img className={style.imgIcons} src={calma} alt="" />
                    </span>
                    <img className={style.image} src={cycle} alt="image" />
                    <div className={style.boxText}>
                        <h3 style={{ backgroundColor: "#0000005c" }}>Meditation</h3>
                        <p>Friday: 1:00pm-2:00pm</p>
                    </div>
                </div>
                <div onMouseEnter={(e) => hoverEffect(e, boxIconRed)} onMouseLeave={(e) => leaveEffect(e, boxIcon)} className={`col col-lg-3  col-12  ${style.col}`}>
                    <span className={style.cartIcons}>
                        <img className={style.imgIcons} src={boxIcon} alt="" />
                    </span>
                    <img className={style.image} src={box} alt="image" />
                    <div className={style.boxText}>
                        <h3> Martial Arts</h3>
                        <p>Sunday: 6:00pm-7:00pm</p>
                    </div>
                </div>
                <div onMouseEnter={(e) => hoverEffect(e, hadeedRed)} onMouseLeave={(e) => leaveEffect(e, hadeed)} className={`col col-lg-5  col-12  ${style.col}`}>
                    <span className={style.cartIcons}>
                        <img className={style.imgIcons} src={hadeed} />
                    </span>
                    <img className={style.image} src={workOut} alt="image" />
                    <div className={style.boxText}>
                        <h3>Workout</h3>
                        <p>Saturday: 9:00am-10:00am</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Sec4
