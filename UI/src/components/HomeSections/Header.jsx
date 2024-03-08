import React from 'react'
import { Link } from 'react-router-dom'
import style from './HomeSections.module.css'
function Header() {
  return (
    
    <div className="text-center">
        <Link to="/register">
        <button className={`btn mx-2 ${style.customBtn}`}>
            Register Now
        </button>
        </Link>
        <Link to="/login">
        <button className={`btn mx-2 ${style.customBtn}`}>
            Login
        </button>
        </Link>
    </div>
    
  )
}

export default Header
