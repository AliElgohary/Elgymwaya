/* eslint-disable no-unused-vars */
import React from 'react'
import CalculatorHeader from '../../components/CalculatorHeader/CalculatorHeader'
import CalculatorForm from '../../components/CalculatorForm/CalculatorForm'
import { Container } from 'react-bootstrap'
import style from './BmiCalc.module.css'
import { useDispatch, useSelector } from 'react-redux'
import BmiClacForm from '../../components/BmiCalcForm/BmiClacForm'

function BmiCalc() {
    const GlobalState = useSelector((state) => state);
    const dispatch = useDispatch();

    const calcBmi = (weight , height)=>{
        console.log(weight , height)
        let h = (height * 0.01) * 2;
        const bmiCalc = (weight / h).toFixed(1);
        dispatch()
      }
    return (
        <div  className={style.wrapper}>
            <Container style={{maxWidth:"800px"}}>
                <CalculatorHeader headerTitle="Calorie Calculator" />
                <BmiClacForm calcBmi={calcBmi}/>
            </Container>
        </div>
      )
    }
    

export default BmiCalc
