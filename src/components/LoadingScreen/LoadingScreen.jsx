import React from 'react'
import './LoadingScreen.less'

function LoadingScreen({ className = '' }) {
  return (
    <div className={`loading-screen ${className}`}>
      <div className="loading-content">
        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Bazaar E-Commerce Logo" className="loading-logo" />
      </div>
    </div>
  )
}

export default LoadingScreen

