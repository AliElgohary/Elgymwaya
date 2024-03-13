import React from 'react'
import logo from '../../../../assets/main_icon/logo_light.png'
import style from './Sec2.module.css'
function Sec2() {
  return (
    <div className={` ${style.container}`}>
      <h2 className={style.header}>Achieve the healthiest, happiest you</h2>
      <div className={`d-flex flex-column flex-lg-row ${style.textBox}`}>
            <div className={`align-self-center align-self-lg-start ${style.logoBox}`}>
                <img src={logo} className={` align-self-center align-self-lg-start ${style.logo}`} alt="logo"/>
            </div>
            <p className={`text-dark-emphasis ${style.ptext}`}>
                Kinective combines the best equipment with limitless
                specialty classes and luxurious amenities for a rewarding,
                all-inclusive fitness experience. Your membership includes 
                access to our dedicated studios and 215 weekly classes covering
                more than 20 types of training disciplines. You’ll also have access 
                to the industry’s best strength and cardio equipment (Technogym®), 
                in addition to supportive and knowledgeable personal trainers to help
                you reach your goals.
            </p>
      </div>
    </div>
  )
}

export default Sec2
