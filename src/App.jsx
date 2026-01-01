import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx'
import BottomNav from './components/BottomNav/BottomNav.jsx'
import Home from './pages/Home/Home.jsx'
import Auth from './pages/Auth/Auth.jsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import './App.less'

function AppContent() {
  const location = useLocation()
  const isAuthPage = location.pathname === '/auth' || location.pathname === '/login' || location.pathname === '/register'

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Update page title based on route
  useEffect(() => {
    const baseTitle = 'Bazaar E-Commerce'
    
    if (location.pathname === '/') {
      document.title = `${baseTitle} - Shop Online`
    } else if (isAuthPage) {
      const authType = location.pathname === '/login' ? 'Login' : location.pathname === '/register' ? 'Register' : 'Login or Register'
      document.title = `${authType} - ${baseTitle}`
    }
    // Product details title is handled in ProductDetails component
  }, [location.pathname, isAuthPage])

  return (
    <div className={`app ${isAuthPage ? 'auth-page-wrapper' : ''}`}>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/product/:id/:name" element={<ProductDetails />} />
      </Routes>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <BottomNav />}
    </div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Wait for fonts to load
    const loadFonts = async () => {
      try {
        await document.fonts.ready
        // Additional wait to ensure all resources are loaded
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      } catch (error) {
        // Fallback if fonts API is not available
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      }
    }

    // Also wait for window load event
    if (document.readyState === 'complete') {
      loadFonts()
    } else {
      window.addEventListener('load', loadFonts)
      return () => window.removeEventListener('load', loadFonts)
    }
  }, [])

  return (
    <>
      <LoadingScreen className={isLoading ? '' : 'loaded'} />
      <AppContent />
    </>
  )
}

export default App

