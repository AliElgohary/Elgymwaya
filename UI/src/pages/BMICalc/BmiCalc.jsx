/* eslint-disable no-unused-vars */
import React from 'react'
import CalculatorHeader from '../../components/CalculatorHeader/CalculatorHeader'
import CalculatorForm from '../../components/CalculatorForm/CalculatorForm'
import { Container } from 'react-bootstrap'
import style from './BmiCalc.module.css'
import { useDispatch, useSelector } from 'react-redux'
import BmiClacForm from '../../components/BmiCalcForm/BmiClacForm'
// import {bodyBmi  , weight , height} from '../../store/reducers/bodyInfo'
import {caloriesInDayValue,bodyBmiValue,ageValue,genderValue,heightValue,weightValue} from '../../store/reducers/bodyInfo'
function BmiCalc() {
    const GlobalState = useSelector((state) => state);
    const dispatch = useDispatch();

    const calcBmi = (w , h)=>{
        let doubleH = (h * 0.01) * 2;
        const bmiCalc = (w / doubleH).toFixed(1);
        // add weight , height , bmiCalc to global state 
        dispatch(weightValue(w));
        dispatch(heightValue(h));
        dispatch(bodyBmiValue(bmiCalc));
        // console.log(GlobalState.userBodyInfo.weight)
        // console.log(GlobalState.userBodyInfo.height)
        // console.log(GlobalState.userBodyInfo.Bmi)
      }
    return (
        <div  className={style.wrapper}>
            <Container style={{maxWidth:"800px"}}>
                <CalculatorHeader headerTitle="Calorie Calculator" />
                <BmiClacForm calcBmi={calcBmi}/>
                
                {GlobalState.userBodyInfo.Bmi}
              </Container>
        </div>
      )
    }
    

export default BmiCalc
