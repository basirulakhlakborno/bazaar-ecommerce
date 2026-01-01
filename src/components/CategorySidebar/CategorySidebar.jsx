import React from 'react'
import {
  LaptopOutlined,
  MobileOutlined,
  SkinOutlined,
  HomeOutlined,
  HeartOutlined,
  CarOutlined,
  GiftOutlined,
  ShoppingOutlined,
} from '@ant-design/icons'
import './CategorySidebar.less'

function CategorySidebar() {
  const categories = [
    { id: 1, name: 'Electronics', icon: LaptopOutlined },
    { id: 2, name: 'Mobile & Accessories', icon: MobileOutlined },
    { id: 3, name: 'Fashion', icon: SkinOutlined },
    { id: 4, name: 'Home & Kitchen', icon: HomeOutlined },
    { id: 5, name: 'Health & Beauty', icon: HeartOutlined },
    { id: 6, name: 'Sports & Fitness', icon: CarOutlined },
    { id: 7, name: 'Gifts', icon: GiftOutlined },
    { id: 8, name: 'All Products', icon: ShoppingOutlined },
  ]

  return (
    <aside className="category-sidebar">
      <h3 className="category-sidebar-title">Categories</h3>
      <div className="category-list-wrapper">
        <ul className="category-list">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <li key={category.id} className="category-item">
                <a href="#" className="category-link">
                  <span className="category-icon">
                    <IconComponent />
                  </span>
                  <span className="category-name">{category.name}</span>
                </a>
              </li>
            )
          })}
        </ul>
        <a href="#" className="category-see-more">See more</a>
      </div>
    </aside>
  )
}

export default CategorySidebar

