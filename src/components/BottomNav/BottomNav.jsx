import React from 'react'
import { Link } from 'react-router-dom'
import './BottomNav.less'

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <a href="#" className="bottom-nav-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="bottom-nav-label">Categories</span>
      </a>
      <a href="#" className="bottom-nav-item bottom-nav-item-center">
        <img 
          src={`${import.meta.env.BASE_URL}logo-small.svg`} 
          alt="Home" 
          className="bottom-nav-home-icon" 
        />
        <span className="bottom-nav-label">Home</span>
      </a>
      <Link to="/auth" className="bottom-nav-item">
        <div className="bottom-nav-profile-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="bottom-nav-label">Login</span>
      </Link>
    </nav>
  )
}

export default BottomNav

