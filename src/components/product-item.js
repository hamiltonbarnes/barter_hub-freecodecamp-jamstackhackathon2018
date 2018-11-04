import React from 'react'
import Link from 'gatsby'
import PropTypes from 'prop-types'

<<<<<<< HEAD
const ProductItem = ({ item, price, link }) => {
=======
const ProductItem = ({ item, price, link,link2 }) => {
>>>>>>> 868e405fc713125ce85d5f30b749a74deef140e0
  price = price ? ' - ' + price : price
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={item.img} alt={item.value} />
      </div>
      <div className="product-description">
        <a href={link}>
          {item.value} {price}
        </a>
<<<<<<< HEAD
=======
		 <a href={link2}>
         barter
        </a>
>>>>>>> 868e405fc713125ce85d5f30b749a74deef140e0
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  price: PropTypes.string,
  link: PropTypes.string,
}

ProductItem.defaultProps = {
  price: '',
<<<<<<< HEAD
  link: '/productpage',
=======
  link: '/productpage/',
   link2: '/do-barter/'
  
>>>>>>> 868e405fc713125ce85d5f30b749a74deef140e0
}
export default ProductItem
