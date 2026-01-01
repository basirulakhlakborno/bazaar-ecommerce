import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products.js'
import './ProductSection.less'

// Helper function to create URL-friendly slug from product name
const createSlug = (name) => {
  return encodeURIComponent(
    name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
  )
}

function ProductSection() {
  return (
    <section className="product-section">
      <div className="product-section-container">
        <h2 className="product-section-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}/${createSlug(product.name)}`} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                {product.originalPrice && (
                  <span className="product-discount-badge">
                    {Math.round(((parseFloat(product.originalPrice.replace(/[^\d.]/g, '')) - parseFloat(product.price.replace(/[^\d.]/g, ''))) / parseFloat(product.originalPrice.replace(/[^\d.]/g, ''))) * 100)}% OFF
                  </span>
                )}
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-brand">{product.brand}</p>
                <div className="product-price-wrapper">
                  <span className="product-price">{product.price}</span>
                  {product.originalPrice && (
                    <span className="product-original-price">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection

