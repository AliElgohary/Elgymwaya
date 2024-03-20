import React, { useState } from 'react'
import TraineeRotineNav from '../../components/TraineeRotineNav/TraineeRotineNav'
import { Button, Col, Image, Row } from 'react-bootstrap'
import styles from './TraineeRotine.module.css'
import user from '../../assets/user.png'
import { date } from 'joi'
import { FaFontAwesome } from 'react-icons/fa6'
import { faCircleInfo, faCirclePlus, faCircleXmark, faFileCirclePlus, faPlugCirclePlus, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function TraineeRotine() {
  const [showInfo , setShowInfo] = useState(false);


  const handelShowInfo = ()=>{
    setShowInfo((showInfo)=>!showInfo)
  }
  return (
    <div>
      <TraineeRotineNav trainerName="Ahmed Hani" />
      <Row>
        <Col sm={12}>
          <div className={styles.routineBox}>
            <h5 className='fw-bold'>Trainee need Routine :<span className=' text-danger-emphasis fw-light'> __Count********** </span> </h5>

            <div className={styles.cart}>
              <div className={styles.imgBox}>
                <Image src={user} roundedCircle width="30px" />
              </div>
              <div className={styles.info}>
                <p className=' fw-bold m-0'>trainee Name</p>
                <p className=' m-0  text-dark-emphasis'>selected date</p>
              </div>
              <Button variant="success">
                <FontAwesomeIcon icon={faPlus} className='me-2' />
                ADD
              </Button>
            </div>

          </div>
        </Col>


        {/** ----------------------------------------------- **/}
        <Col sm={12}>
          <div className={styles.routineBox}>
            <h5 className='fw-bold'>My Trainee : <span className=' text-danger-emphasis fw-light'>**********__all trainee have have routine with tis trainer Count</span>  </h5>

            <div className={styles.cart}>
              <div className={styles.imgBox}>
                <Image src={user} roundedCircle width="30px" />
              </div>
              <div className={styles.info}>
                <p className=' fw-bold m-0'>trainee Name</p>
                <p className=' m-0  text-dark-emphasis'>selected date</p>
              </div>
              <Button variant="success" onClick={handelShowInfo}>
                <FontAwesomeIcon icon={faCircleInfo} className='me-2' />
                View
              </Button>
            </div>
          </div>
        </Col>
      </Row>

        {/** ---------------------show Info-------------------------- **/}
      {showInfo&&<>

        <div className={styles.bgFilter}>

          <div on={handelShowInfo} className={styles.selctedTreaineeInfo}>
            <button onClick={handelShowInfo}> <FontAwesomeIcon icon={faCircleXmark} /> </button>
            <h4 className='fs-5'> Naaaaaaame </h4>
            <div className={styles.imgBox_selcted}>
              <Image src={user} roundedCircle width="60px" />
            </div>
            <div className={styles.sec}>
              <h5>Health Status</h5>
              <div className='d-flex'>
                <p className=' text-dark-emphasis'>Height : ___ ,</p>
                <p className=' text-dark-emphasis'>Weight : ___ ,</p>
                <p className=' text-dark-emphasis'>Age : __ ,</p>
              </div>
            </div>

            <div className={styles.sec}>
              <h5>Contact</h5>
              <p className=' text-dark-emphasis'>Email : example@example.com</p>
              <p className=' text-dark-emphasis'>Phone : example@example.com</p>
            </div>

            <div className={styles.sec}>
              <h5>Routine</h5>

            </div>
          </div>

        </div>
        </>}
    </div>
  )
}

export default TraineeRotine
