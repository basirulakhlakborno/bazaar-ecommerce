import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../../data/products.js'
import './ProductDetails.less'

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

function ProductDetails() {
  const { id } = useParams()
  const productId = parseInt(id)

  // Find current product
  const currentProduct = products.find(product => product.id === productId) || products[0]

  // Get more products (exclude current product)
  const moreProducts = products.filter(product => product.id !== productId).slice(0, 6)

  // Update page title with product name
  useEffect(() => {
    if (currentProduct) {
      document.title = `${currentProduct.name} - ${currentProduct.brand} - Bazaar E-Commerce`
    }
  }, [currentProduct])

  // Generate star rating
  const getStarRating = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    
    return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '') + '☆'.repeat(emptyStars)
  }

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        <div className="product-details-main">
          <div className="product-image-section">
            <img src={currentProduct.image} alt={currentProduct.name} className="product-detail-image" />
            {currentProduct.originalPrice && (
              <span className="product-discount-badge">
                {Math.round(((parseFloat(currentProduct.originalPrice.replace(/[^\d.]/g, '')) - parseFloat(currentProduct.price.replace(/[^\d.]/g, ''))) / parseFloat(currentProduct.originalPrice.replace(/[^\d.]/g, ''))) * 100)}% OFF
              </span>
            )}
          </div>
          <div className="product-info-section">
            <h1 className="product-detail-name">{currentProduct.name}</h1>
            <p className="product-detail-brand">by {currentProduct.brand}</p>
            <div className="product-detail-meta">
              <span className="product-meta-item">{currentProduct.category}</span>
              <span className="product-meta-item">In Stock: {currentProduct.stock}</span>
              <span className="product-meta-item">Rating: {currentProduct.rating}</span>
            </div>
            <div className="product-rating">
              <span className="rating-stars">{getStarRating(currentProduct.rating)}</span>
              <span className="rating-value">{currentProduct.rating}</span>
            </div>
            <p className="product-detail-description">{currentProduct.description}</p>
            <div className="product-detail-price-section">
              <div className="product-price-wrapper">
                <span className="product-detail-price">{currentProduct.price}</span>
                {currentProduct.originalPrice && (
                  <span className="product-detail-original-price">{currentProduct.originalPrice}</span>
                )}
              </div>
              <button className="product-add-to-cart-button" disabled={!currentProduct.inStock}>
                {currentProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>

        <section className="more-products-section">
          <h2 className="more-products-title">More Products</h2>
          <div className="more-products-grid">
            {moreProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}/${createSlug(product.name)}`} className="more-product-card">
                <div className="more-product-image-wrapper">
                  <img src={product.image} alt={product.name} className="more-product-image" />
                  {product.originalPrice && (
                    <span className="more-product-discount-badge">
                      {Math.round(((parseFloat(product.originalPrice.replace(/[^\d.]/g, '')) - parseFloat(product.price.replace(/[^\d.]/g, ''))) / parseFloat(product.originalPrice.replace(/[^\d.]/g, ''))) * 100)}% OFF
                    </span>
                  )}
                </div>
                <div className="more-product-info">
                  <h3 className="more-product-name">{product.name}</h3>
                  <p className="more-product-brand">{product.brand}</p>
                  <div className="more-product-price-wrapper">
                    <span className="more-product-price">{product.price}</span>
                    {product.originalPrice && (
                      <span className="more-product-original-price">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetails

