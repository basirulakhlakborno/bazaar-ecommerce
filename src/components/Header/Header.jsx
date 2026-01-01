import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu.jsx'
import './Header.less'

function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const searchInputRef = useRef(null)

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Searching for:', searchQuery)
  }

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen)
  }

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Focus input when mobile search opens
  useEffect(() => {
    if (isMobileSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isMobileSearchOpen])

  return (
    <>
      <header className={`header ${isMobileSearchOpen ? 'mobile-search-open' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="header-container">
          <button 
            className={`menu-button ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="menu-icon">
              <span className="menu-line menu-line-1"></span>
              <span className="menu-line menu-line-2"></span>
              <span className="menu-line menu-line-3"></span>
            </span>
          </button>
        <Link to="/" className="logo">
          <img src="/logo.svg" alt="Bazaar E-Commerce Logo" className="logo-img" />
        </Link>
        <button 
          className="mobile-search-toggle"
          onClick={toggleMobileSearch}
          aria-label="Toggle search"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            ref={searchInputRef}
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
        <Link to="/auth" className="auth-button">
          <div className="auth-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="auth-text">
            <span className="auth-text-line1">Login or</span>
            <span className="auth-text-line2">Registration</span>
          </div>
        </Link>
      </div>
      </header>
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

export default Header

