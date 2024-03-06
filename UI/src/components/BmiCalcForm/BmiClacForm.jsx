/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from "react";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faWeightScale } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
function BmiClacForm({calcBmi}) {
  const [weight , setWeight] = useState(0);
  const [height , setHeight] = useState(0);
  const handelCalcBmi = (e)=>{
    e.preventDefault();
    calcBmi(weight, height);
  }

//   -----------------
  const handelReset = (e)=>{
    e.preventDefault();
    setWeight(0);
    setHeight(0);
    calcBmi(weight ,height);
  }

  return (
     
    <Form onSubmit={handelCalcBmi}>
            <Row className="align-items-center">
            <Col sm={12} md={6}>
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                weight
            </Form.Label>
            <InputGroup className="mb-2">
                <InputGroup.Text><FontAwesomeIcon icon={faWeightScale} /></InputGroup.Text>
                <Form.Control id="inlineFormInputGroup" placeholder="Weight" value={weight>0?weight:""} onChange={(e)=>setWeight(e.target.value)} required />
            </InputGroup>
            </Col>

            <Col sm={12} md={6}>
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                height
            </Form.Label>
            <InputGroup className="mb-2">
                <InputGroup.Text><FontAwesomeIcon icon={faPerson} /></InputGroup.Text>
                <Form.Control id="inlineFormInputGroup" placeholder="Height" value={height>0?height:""}  onChange={(e)=>setHeight(e.target.value)} required />
            </InputGroup>
            </Col>
            </Row>
            <hr/>
            <div className="d-flex justify-content-center">
                <Button
                type="submit"
                className="px-4 mx-2"
                style={{ backgroundColor: "#eee", color: "#000" }}
                onClick={handelReset}
                >
                Clear
                </Button>
                <Button
                type="submit"
                className="px-4 mx-2"
                style={{ backgroundColor: "#9852f8" }}
                >
                Calculate
                </Button>
            </div>
        </Form>
  )
}

export default BmiClacForm
