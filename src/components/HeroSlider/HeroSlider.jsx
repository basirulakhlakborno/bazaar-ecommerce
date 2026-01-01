import React, { useState, useEffect } from 'react'
import './HeroSlider.less'

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: 'Discover Amazing Products',
      subtitle: 'Browse thousands of products with exclusive deals and discounts',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Shop Anytime, Anywhere',
      subtitle: 'Fast delivery and secure payment - Your favorite products delivered to your door',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Up to 50% OFF',
      subtitle: 'Limited time offers on electronics, fashion, home & kitchen, and more',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=600&fit=crop',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="hero-slider">
      <div className="hero-slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-slide-overlay"></div>
            <div className="hero-slide-content">
              <h2 className="hero-slide-title">{slide.title}</h2>
              <p className="hero-slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        <button className="hero-slider-nav hero-slider-prev" onClick={goToPrevious} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button className="hero-slider-nav hero-slider-next" onClick={goToNext} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="hero-slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSlider




