
import CalculatorHeader from '../../components/CalculatorHeader/CalculatorHeader'
import CalculatorForm from '../../components/CalculatorForm/CalculatorForm'
import { Container } from 'react-bootstrap'
import style from './CaloriesCalculator.module.css'
function CaloriesCalculator() {
  return (
    <div  className={style.wrapper}>
        <Container style={{maxWidth:"800px"}}>
            <CalculatorHeader headerTitle="Calorie Calculator" />
            <CalculatorForm/>
        </Container>
    </div>
  )
}

export default CaloriesCalculator
