import React from 'react'
import Link from 'gatsby'

const ProductItem = ({ item }) => {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={item.img} alt={item.category} />
      </div>
      <div className="product-description">
        <a href="#">{item.category}</a>
      </div>
    </div>
  )
}

export default ProductItem
