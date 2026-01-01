import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Auth.less'

function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  // Update page title based on auth type
  useEffect(() => {
    const authType = location.pathname === '/login' ? 'Login' : location.pathname === '/register' ? 'Register' : 'Login or Register'
    document.title = `${authType} - Bazaar E-Commerce`
  }, [location.pathname])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(isLogin ? 'Login' : 'Register', 'submitted')
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <button className="auth-back-button" onClick={() => navigate('/')} aria-label="Back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>back</span>
        </button>
        <div className="auth-logo">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Bazaar E-Commerce Logo" className="auth-logo-img" />
        </div>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`auth-tab ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <button 
          type="button" 
          className="auth-google-button"
          onClick={() => console.log('Login with Google')}
        >
          <svg className="google-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span>{isLogin ? 'Login' : 'Register'} with Google</span>
        </button>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="auth-field">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required={!isLogin}
              />
            </div>
          )}

          <div className="auth-field">
            <label htmlFor="email">{isLogin ? 'Email / Phone' : 'Email'}</label>
            <input
              type={isLogin ? 'text' : 'email'}
              id="email"
              name="email"
              placeholder={isLogin ? 'email / number' : 'email'}
              required
            />
          </div>

          {!isLogin && (
            <div className="auth-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required={!isLogin}
              />
            </div>
          )}

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {!isLogin && (
            <div className="auth-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required={!isLogin}
              />
            </div>
          )}

          {isLogin && (
            <div className="auth-options">
              <label className="auth-checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="auth-link">Forgot password?</a>
            </div>
          )}

          <button type="submit" className="auth-submit">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        {isLogin && (
          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <button
                className="auth-link-button"
                onClick={() => setIsLogin(false)}
              >
                Register here
              </button>
            </p>
          </div>
        )}

        {!isLogin && (
          <div className="auth-footer">
            <p>
              Already have an account?{' '}
              <button
                className="auth-link-button"
                onClick={() => setIsLogin(true)}
              >
                Login here
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Auth

