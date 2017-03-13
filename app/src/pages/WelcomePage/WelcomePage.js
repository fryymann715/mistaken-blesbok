import React from 'react'
import { WelcomeBooks } from '../../components'

const WelcomePage = () => {
    return (
      <div className="welcome page">
        <div className="welcome title">
          <h2>Mistaken-Blesbooks</h2>
          <span>Recent Additions:</span>
        </div>
        <WelcomeBooks />
      </div>
    )
  }

export default WelcomePage
