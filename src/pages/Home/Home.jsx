import React, { useEffect } from 'react'
import HeroSlider from '../../components/HeroSlider/HeroSlider.jsx'
import CategorySidebar from '../../components/CategorySidebar/CategorySidebar.jsx'
import ProductSection from '../../components/ProductSection/ProductSection.jsx'
import './Home.less'

function Home() {
  useEffect(() => {
    document.title = 'Bazaar E-Commerce - Shop Online'
  }, [])

  return (
    <main className="home">
      <div className="home-hero-section">
        <CategorySidebar />
        <HeroSlider />
      </div>
      <ProductSection />
    </main>
  )
}

export default Home

