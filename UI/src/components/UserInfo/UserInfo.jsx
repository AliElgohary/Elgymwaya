import Image from 'react-bootstrap/Image'; 
import style from './UserInfo.module.css'
import userImage from '../../assets/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEnvelope, faPhone, faRuler, faUser, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-bootstrap';

function UserInfo() {
  return (
    <Col md={6} xs={12} className={style.UserInfoBox}>
      <h2>user Information</h2>
      <div>
         <Image src={userImage} className={style.userImage} roundedCircle />
         <span className='text-dark'>Ahemd Hani</span>
      </div>
      <div id="body-info" className={style.bodyInfo}>
            <h5 className={style.infoHead}>body info</h5>
            <div id='age'>
                <FontAwesomeIcon icon={faUser} className='me-2'/>
                <span className={style.infoSpan}>Age: 30</span>
            </div>
            <div id='height'>
                <FontAwesomeIcon icon={faRuler} className='me-2' />
                <span className={style.infoSpan}>Height: 160</span>
             </div>
            <div id='weight'>
                <FontAwesomeIcon icon={faWeightScale} className='me-2' />
                <span className={style.infoSpan}>Weight: 90</span>
            </div>
      </div>
      <div id='contact-info'>
            <h5 className={style.infoHead}>contact info</h5>
            <div id='phone'>
                <FontAwesomeIcon icon={faPhone} className='me-2'/>
                <span className={style.infoSpan}>Phone: 01245789020</span>
            </div>
            <div id='email'>
            <FontAwesomeIcon icon={faEnvelope} className='me-2'/>
            <span className={style.infoSpan}>Email: ahdv45@gmail.com</span>
            </div>
      </div>
      <div id='registration-info'>
            <h5 className={style.infoHead}>Registration info</h5>
            <div id='registration-date'>
                <FontAwesomeIcon icon={faCalendarDays} className='me-2'/>
                <span className={style.infoSpan}>Registration Date : 8/5/2023</span>    
            </div>
      </div>
    </Col>
  )
}

export default UserInfo
