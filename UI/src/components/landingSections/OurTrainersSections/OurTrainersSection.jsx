import React from 'react'
import style from './OurTrainersSection.module.css'
import brush from "../../../assets/brush.png"
import coach from "../../../assets/Coaching_Page_Header_Image.png"
import { Link } from 'react-router-dom'
function OurTrainersSection() {
    return (
        <div className={`container mt-5 ${style.coachBox}`}>
            <div className={style.headerOne}>
                <h4>COACHING AT ELGYMAWEYA GYM</h4>
                <img src={brush} alt="" />
            </div>
            <p className='w-75 m-auto mt-4 mb-5 fs-5 text-dark text-center'>With the right coach, the impossible becomes possible. Maximize your potential with our elite coaches. You’ll be equipped with a program designed to meet your unique needs and a partner who will push you to go further and go faster.</p>
            <div style={{position:"relative"}}>
                <img src={coach} alt=""  className=''/>
                <div className={style.showAllTrainerWrapper}>
                    <Link to="allTrainers">Show All Trainers</Link>
                </div>
            </div>
       </div>
    )
}

export default OurTrainersSection
