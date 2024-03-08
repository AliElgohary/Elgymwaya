/* eslint-disable no-unused-vars */
import React from "react";
import CalculatorHeader from "../../components/CalculatorHeader/CalculatorHeader";
import CalculatorForm from "../../components/CalculatorForm/CalculatorForm";
import { Card, Container } from "react-bootstrap";
import style from "./BmiCalc.module.css";
import { useDispatch, useSelector } from "react-redux";
import BmiClacForm from "../../components/BmiCalcForm/BmiClacForm";
// import {bodyBmi  , weight , height} from '../../store/reducers/bodyInfo'
import bmiRangesImage from '../../assets/bmi.jpg'
import {
  caloriesInDayValue,
  bodyBmiValue,
  ageValue,
  genderValue,
  heightValue,
  weightValue,
} from "../../store/reducers/bodyInfo";
import { Link } from "react-router-dom";




function BmiCalc() {
  const GlobalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const calcBmi = (w, h) => {
    let doubleH = h * 0.01 * 2;
    const bmiCalc = (w / doubleH).toFixed(1);
    // dispatch actions to add weight , height , bmiCalc to global state
    dispatch(weightValue(w));
    dispatch(heightValue(h));
    dispatch(bodyBmiValue(+bmiCalc));
    // console.log(GlobalState.userBodyInfo.weight)
    // console.log(GlobalState.userBodyInfo.height)
    // console.log(GlobalState.userBodyInfo.Bmi)
  };
  
  const cartStyle = {
    backgroundColor:"inherit",
    // display:`${GlobalState.userBodyInfo.Bmi? "block" : "none"}`,
    transition:"1s ease",
  }
  return (
    <div className={style.wrapper}>
      <Container style={{ maxWidth: "800px" }}>
      
      <Link to='/caloriesCalculator' type="button" className={`btn btn-secondary ${style.routesBtn}`}>Calories Calculator</Link>
        <CalculatorHeader headerTitle="Bmi Calculator" />
        <BmiClacForm calcBmi={calcBmi} />
        {GlobalState.userBodyInfo.Bmi>0&&<Card className="mt-3" style={cartStyle}>
        <Card.Body>
          <Card.Text>
            <span>Your Body Mass Index is</span>
            <h2 className="text-light d-inline m-2">{GlobalState.userBodyInfo.Bmi}</h2>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={bmiRangesImage} />
   </Card>
        }
        
        
      </Container>
    </div>
  );
}

export default BmiCalc;
