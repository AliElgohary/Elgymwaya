import React, { useState } from 'react'
import { Button, Col, Image, InputGroup, Row } from 'react-bootstrap';
import cc from "../../assets/user.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEnvelope, faPhone, faRuler, faUser, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import style from './EditProfile.module.css'
import { Link } from 'react-router-dom';
function EditProfile() {
    const [imgSrc, setImgSrc] = useState(cc);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [phone, setPhone] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the first selected file
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Set the image data as state
                setImgSrc(reader.result);
            };
            reader.readAsDataURL(file); // Read the file as a data URL
            console.log(imgSrc);
        }
    };
    const handelSubmit = (event) => {
        event.preventDefault();
        console.log("fname");
        console.log(fname);
        console.log(lname);
        console.log(email);
        console.log(age);
        console.log(height);
        console.log(weight);
        console.log(phone);
    }
    return (
        <div className={` d-flex flex-column justify-content-center align-items-center text-center ${style.parent}`}>
            <Image src={imgSrc} roundedCircle style={{ width: "100px", height: "100px" }} />
            <input class="form-control mb-4 mt-2 w-25" type="file" id="formFileMultiple" multiple onChange={handleFileChange} />
            <form onSubmit={handelSubmit} className='w-50'>
                <div>
                    <label className="sr-only" htmlFor="firstName">first name</label>
                    <div className="input-group mb-2 w-50 w-lg-25 m-auto">
                        <div className="input-group-prepend">
                            <div className="input-group-text h-100"><FontAwesomeIcon icon={faUser} /></div>
                        </div>
                        <input type="text" className="form-control" id="firstName" value={fname} placeholder="first name" onChange={(e) => setFname(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label className="sr-only" htmlFor="lastName">last name</label>
                    <div className="input-group mb-2 w-50 w-lg-25 m-auto">
                        <div className="input-group-prepend">
                            <div className="input-group-text h-100"><FontAwesomeIcon icon={faUser} /></div>
                        </div>
                        <input type="text" className="form-control" id="lastName" placeholder="last name" value={lname} onChange={(e) => setLname(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label className="sr-only" htmlFor="email">Your Email</label>
                    <div className="input-group mb-2 w-50 w-lg-25 m-auto">
                        <div className="input-group-prepend">
                            <div className="input-group-text h-100"><FontAwesomeIcon icon={faEnvelope} /></div>
                        </div>
                        <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <Row className='justify-content-center m-auto w-75'>
                    <Col className='col-12 col-md-6 col-lg-4'>
                        <div>
                            <label className="sr-only" htmlFor="age">age</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text h-100"><FontAwesomeIcon icon={faCalendarDays} /></div>
                                </div>
                                <input type="number" className="form-control" id="age" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} />
                            </div>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4'>
                        <div>
                            <label className="sr-only" htmlFor="height">Height</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text h-100"><FontAwesomeIcon icon={faRuler} /></div>
                                </div>
                                <input type="number" className="form-control" id="height" placeholder="height" value={height} onChange={(e) => setHeight(e.target.value)} />
                            </div>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4'>
                        <div>
                            <label className="sr-only" htmlFor="email">Weight</label>
                            <div className="input-group mb-2 ">
                                <div className="input-group-prepend">
                                    <div className="input-group-text h-100"><FontAwesomeIcon icon={faWeightScale} /></div>
                                </div>
                                <input type="number" className="form-control" id="weight" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <div>
                    <label className="sr-only" htmlFor="phone">Your phone</label>
                    <div className="input-group mb-2 w-50 w-lg-25 m-auto">
                        <div className="input-group-prepend">
                            <div className="input-group-text h-100"><FontAwesomeIcon icon={faPhone} /></div>
                        </div>
                        <input type="text" className="form-control" id="phone" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className=''>
                    <Link to="/userHome" className='btn btn-dark w-25'>back</Link>
                    <input type="submit" className='btn w-25 text-light fw-bold' style={{backgroundColor:"#a14df4"}} value={"Update"} />
                </div>
            </form>


        </div>
    )
}

export default EditProfile
