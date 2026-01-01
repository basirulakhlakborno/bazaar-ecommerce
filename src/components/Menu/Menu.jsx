import React, { useEffect } from 'react'
import './Menu.less'

function Menu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.menu-button') && !event.target.closest('.menu-overlay')) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="menu-content" onClick={(e) => e.stopPropagation()}>
        <button className="menu-close" onClick={onClose}>
          Close
        </button>
        <nav className="menu-nav">
          <a href="#" className="menu-link" onClick={handleLinkClick}>Home</a>
          <a href="#" className="menu-link" onClick={handleLinkClick}>Products</a>
          <a href="#" className="menu-link" onClick={handleLinkClick}>Categories</a>
          <a href="#" className="menu-link" onClick={handleLinkClick}>About</a>
          <a href="#" className="menu-link" onClick={handleLinkClick}>Contact</a>
        </nav>
      </div>
    </div>
  )
}

export default Menu

