import React from 'react'
import LogoutNav from '../../LandingNavbar/LandingNav'
import SlideShow from '../../HomeSections/SlideShow'
import { ButtonGroup ,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from "./LandingSec1.module.css";
function LandingSec1() {
  return (
    <div className={styles.sec1}>
        <LogoutNav />
        <SlideShow />
        <ButtonGroup vertical  className={styles.button_group}>
            <Link to={'bmiCalc'}>
            <Button variant="outline-primary">
                Bmi
            </Button>
            </Link>
            <Link to={'caloriesCalculator'}>
            <Button variant="outline-primary">
                Calories
            </Button>
            </Link>
        </ButtonGroup>
    </div>
  )
}

export default LandingSec1
