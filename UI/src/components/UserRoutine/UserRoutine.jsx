import { Col, Row } from 'react-bootstrap'
import style from './UserRoutine.module.css'

function UserRoutine() {
  return (
    <Col className={style.routineContainer}>
      <h2>User Routine</h2>
      <Row className='justify-content-between'>
        <Col sm={6} md={2}>
            <div className={style.DaysBoxs}>
            <span className={style.day}>Day 1</span>
            <p>push</p>
            </div>
        </Col>
        <Col sm={6} md={2}>
            <div className={style.DaysBoxs}>
            <span className={style.day}>Day 1</span>
            <p>pull</p>
            </div>
        </Col>
        <Col sm={6} md={2}>
            <div className={style.DaysBoxs}>
            <span className={style.day}>Day 1</span>
            <p>leg</p>
            </div>
        </Col>
        <Col sm={6} md={2}>
        <div className={style.DaysBoxs}>
        <span className={style.day}>Day 1</span>
        <p>fitness</p>
        </div>
        </Col>
        <Col sm={6} md={2}>
            <div className={style.DaysBoxs}>
            <span className={style.day}>Day 1</span>
            <p>sonaaa</p>
            </div>
        </Col>
      </Row>
    </Col>
  )
}

export default UserRoutine
