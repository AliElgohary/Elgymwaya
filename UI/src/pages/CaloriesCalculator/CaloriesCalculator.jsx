import CalculatorHeader from "../../components/CalculatorHeader/CalculatorHeader";
import CalculatorForm from "../../components/CalculatorForm/CalculatorForm";
import { Card, Container } from "react-bootstrap";
import style from "./CaloriesCalculator.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from '../../assets/main_icon/dumbbell-svgrepo-com (2).png'
// For men: BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)
// For women: BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)
function CaloriesCalculator() {
  const [calories, setCalories] = useState(null);
  const caloriesCalc = ({ weight, height, age, gender, activityLevel }) => {
    let Bmr = 1;
    if (gender == "male") {
      Bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      Bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }
    calcCalories(Bmr, activityLevel);
  };
  const calcCalories = (Bmr, activityLevel) => {
    let calorieIntake = 0;
    switch (activityLevel) {
      case "sedentary":
        calorieIntake = Bmr * 1.2;
        break;
      case "lightlyActive":
        calorieIntake = Bmr * 1.375;
        break;
      case "moderatelyActive":
        calorieIntake = Bmr * 1.55;
        break;
      case "veryActive":
        calorieIntake = Bmr * 1.725;
        break;
      case "extraActive":
        calorieIntake = Bmr * 1.9;
        break;
      default:
        // eslint-disable-next-line no-unused-vars
        calorieIntake = Bmr;
    }
    if (calorieIntake > 0) {
      setCalories(calorieIntake.toFixed(1));
    }
  };
  return (
    <div className={style.wrapper}>
      <Container style={{ maxWidth: "800px" }}>
        <Link
          to="/BmiCalc"
          type="button"
          className={`btn btn-secondary ${style.routesBtn}`}
        >
          Bmi Calculator
        </Link>

        <Link to='/'type="button"  className={`btn text-light ${style.routesHomeBtn}`}>
              Home <img src={logo} />
        </Link>

        <CalculatorHeader headerTitle="Calorie Calculator" />
        <CalculatorForm caloriesCalc={caloriesCalc} />
        {calories && (
          <Card className="bg-dark text-light">
            <Card.Body>
              your body normal calories in day is :{" "}
              <span className="text-info fs-5">{calories}</span>
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  );
}

export default CaloriesCalculator;
