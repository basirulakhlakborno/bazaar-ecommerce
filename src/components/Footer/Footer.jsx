import React from 'react'
import './Footer.less'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Bazaar E-Commerce Logo" className="footer-logo-img" />
          </div>
          <p className="footer-text">
            Your trusted platform for shopping online.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">Products</a></li>
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-links">
            <li>Email: info@bazaar.com</li>
            <li>Phone: +1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bazaar E-Commerce. All rights reserved.</p>
        <p className="footer-credits">
          Made by <a href="https://basirulakhlak.tech/" target="_blank" rel="noopener noreferrer" className="footer-credit-link">Basirul Akhlak Borno</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer

