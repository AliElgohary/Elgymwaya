import { useState } from "react";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function CalculatorForm({caloriesCalc}) {
  const [weight , setWeight] = useState("");
  const [height , setHeight] = useState("");
  const [age , setAge] = useState("");
  const [gender, setGender] = useState('male'); // State variable to hold selected gender
  const [activityLevel, setActivityLevel] = useState('sedentary'); // State variable to hold selected activity level

  const handelSubmit=(e)=>{
    e.preventDefault();
    caloriesCalc({weight , height , age , gender , activityLevel});
  }
  // Event handler function to update state variable when radio button is clicked
  const handleRadioChange = (event) => {
    setGender(event.target.value); // Update the selected gender
  };
  return (
    <>
    {console.log(activityLevel)}
    <Form onSubmit={handelSubmit}>
      
        <Row className="align-items-center">
          <Col sm={12} md={4}>
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              weight
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control id="inlineFormInputGroup" placeholder="Weight" value={weight} onChange={(e)=>setWeight(e.target.value)} />
            </InputGroup>
          </Col>
          <Col sm={12} md={4}>
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              height
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control id="inlineFormInputGroup" placeholder="Height" value={height} onChange={(e)=>setHeight(e.target.value)} />
            </InputGroup>
          </Col>

          <Col sm={12} md={4}>
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Username
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control id="inlineFormInputGroup" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            </InputGroup>
          </Col>
        </Row>
      <div className="d-flex  justify-content-center gap-3 m-2">
      <Form.Check
      type="radio"
      id="male-radio"
      name="gender"
      label="Male"
      value="male"
      checked={gender === 'male'} // Set checked attribute based on selected gender
      onChange={handleRadioChange} // Call event handler function on change
    />
    <Form.Check
      type="radio"
      id="female-radio"
      name="gender"
      label="Female"
      value="female"
      checked={gender === 'female'} // Set checked attribute based on selected gender
      onChange={handleRadioChange} // Call event handler function on change
    />
    </div>

    <Form.Group controlId="activityLevelSelect">
    <Form.Label>Activity Level:</Form.Label>
    <Form.Select
      value={activityLevel} // Set value based on selected activity level
      onChange={(event)=>setActivityLevel(event.target.value)} 
    >
      <option value="sedentary">Sedentary (little to no exercise)</option>
      <option value="lightlyActive">Lightly Active (light exercise/sports 1-3 days/week)</option>
      <option value="moderatelyActive">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
      <option value="veryActive">Very Active (hard exercise/sports 6-7 days a week)</option>
      <option value="extraActive">Extra Active (very hard exercise/sports & physical job or 2x training)</option>
    </Form.Select>
  </Form.Group>

      <div className="d-flex justify-content-center">
        <Button
          type="submit"
          className="px-4 mx-2"
          style={{ backgroundColor: "#9852f8" }}
        >
          Calculate
        </Button>
      </div>
     </Form>     
    </>
  )
}

export default CalculatorForm
