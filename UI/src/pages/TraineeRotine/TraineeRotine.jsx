import React from 'react'
import TraineeRotineNav from '../../components/TraineeRotineNav/TraineeRotineNav'
import { Button, Col, Image, Row } from 'react-bootstrap'
import styles from './TraineeRotine.module.css'
import user from '../../assets/user.png'
import { date } from 'joi'
import { FaFontAwesome } from 'react-icons/fa6'
import { faCirclePlus, faFileCirclePlus, faPlugCirclePlus, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function TraineeRotine() {
  return (
    <div>
      <TraineeRotineNav />
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
              <Button variant="success">
                <FontAwesomeIcon icon={faPlus} className='me-2' />
                ADD
              </Button>
            </div>

          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TraineeRotine
