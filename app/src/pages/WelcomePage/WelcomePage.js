import React from 'react'
import { WelcomeBooks } from '../../components'
import './WelcomePage.css'


const WelcomePage = () => {
    return (
      <div className="welcome-container">

        <div className="welcome-title">
          <h2>WELCOME PAGE</h2>
        </div>

        <WelcomeBooks />

      </div>
    )
  }

export default WelcomePage
