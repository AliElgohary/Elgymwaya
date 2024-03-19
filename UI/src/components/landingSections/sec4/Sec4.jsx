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
import fitness from "../../../assets/fitness.jpg"
import bike from "../../../assets/cycle.png"
import bikeRed from "../../../assets/cycleRed.png"
import hadeed from "../../../assets/hadeed.png"
import hadeedRed from "../../../assets/hadeedRed.png"
import brush from "../../../assets/brush.png"
import fitnessIcon from "../../../assets/fitnessIcon.png"
import fitnessIconRed from "../../../assets/fitnessRed.png"
import bodyBump from "../../../assets/BodyPump.jpg"
import leg from "../../../assets/legGroup.png"
import legMachine from "../../../assets/legMachine.png"
import legMachineRed from "../../../assets/legMachineRed.png"
import sixpacks from "../../../assets/sixBags.jpg"
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
                <div onMouseEnter={(e) => hoverEffect(e, fitnessIconRed)} onMouseLeave={(e) => leaveEffect(e, fitnessIcon)} className={`col col-lg-5 col-12  ${style.col}`}>
                    <span className={style.cartIcons}>
                        <img className={style.imgIcons} src={fitnessIcon} alt="" />
                    </span>
                    <img className={style.image} src={fitness} alt="image" />
                    <div className={style.boxText}>
                        <h3>Cardio</h3>
                        <p>Wednesday: 9:00am-10:00am</p>
                    </div>
                </div>
                <div onMouseEnter={(e) => hoverEffect(e, legMachineRed)} onMouseLeave={(e) => leaveEffect(e, legMachine)} className={`col col-lg-3  col-12  ${style.col}`}>
                    <span className={style.cartIcons}>
                        <img className={style.imgIcons} src={legMachine} alt="" />
                    </span>
                    <img className={style.image} src={leg} alt="image" />
                    <div className={style.boxText}>
                        <h3>Leg Time Group</h3>
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
                <div onMouseEnter={(e) => hoverEffect(e, bikeRed)} onMouseLeave={(e) => leaveEffect(e, bike)} className={`col col-lg-3 col-12   ${style.col}`}>
                    <span className={style.cartIcons}>
                        <img className={style.imgIcons} src={bike} alt="" />
                    </span>
                    <img className={style.image} src={cycle} alt="image" />
                    <div className={style.boxText}>
                        <h3 style={{ backgroundColor: "#0000005c" }}>Cycling</h3>
                        <p>Friday: 1:00pm-2:00pm</p>
                    </div>
                </div>
                <div onMouseEnter={(e) => hoverEffect(e, boxIconRed)} onMouseLeave={(e) => leaveEffect(e, boxIcon)} className={`col col-lg-3  col-12  ${style.col}`}>
                    <span className={style.cartIcons}>
                        <img className={style.imgIcons} src={boxIcon} alt="" />
                    </span>
                    <img className={style.image} src={sixpacks} alt="image" />
                    <div className={style.boxText}>
                        <h3> Six Packs class</h3>
                        <p>Sunday: 6:00pm-7:00pm</p>
                    </div>
                </div>
                <div onMouseEnter={(e) => hoverEffect(e, hadeedRed)} onMouseLeave={(e) => leaveEffect(e, hadeed)} className={`col col-lg-5  col-12  ${style.col}`}>
                    <span className={style.cartIcons}>
                        <img className={style.imgIcons} src={hadeed} />
                    </span>
                    <img className={style.image} src={bodyBump} alt="image" />
                    <div className={style.boxText}>
                        <h3 style={{ backgroundColor: "#0000005c" }}>Body Pump</h3>
                        <p>Saturday: 9:00am-9:30am</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Sec4
