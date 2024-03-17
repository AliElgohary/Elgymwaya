import { Button, Col, Container, Row } from 'react-bootstrap'
import style from './SelectTrainer.module.css'
import coauch from '../../assets/trainersImages/fitness1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
function SelectTrainer() {
    return (
        <div className={style.AllTrainersPages}>
            <Container>
                <div className={`text-center mb-5 ${style.header}`}>
                    <h1>Meet Our Couchs</h1>
                    <p>cdccc cdcsc cdcdc cdcd cdcdc cdcdc</p>
                </div>
                <Row className={style.gridBox}>
                    <Col sm={12} md={6} lg={4}>
                        <div className={`${style.imgCard}`}>
                            <img src={coauch} alt="coauch" />
                            <div className={style.Coauchinfo}>
                                <h4>Ahmed Hani</h4>
                                <p>fitness trainer</p>
                                <div className={style.selectBtn}>
                                  <Button>Select</Button>  
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className={`${style.imgCard}`}>
                            <img src={coauch} alt="coauch" />
                            <div className={style.Coauchinfo}>
                                <h4>Ahmed Hani</h4>
                                <p>fitness trainer</p>
                                <div className={style.selectBtn}>
                                  <Button>Select</Button>  
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className={`${style.imgCard}`}>
                            <img src={coauch} alt="coauch" />
                            <div className={style.Coauchinfo}>
                                <h4>Ahmed Hani</h4>
                                <p>fitness trainer</p>
                                <div className={style.selectBtn}>
                                <Button>Select</Button>  
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className={`${style.imgCard}`}>
                            <img src={coauch} alt="coauch" />
                            <div className={style.Coauchinfo}>
                                <h4>Ahmed Hani</h4>
                                <p>fitness trainer</p>
                                <div className={style.selectBtn}>
                                  <Button>Select</Button>  
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SelectTrainer