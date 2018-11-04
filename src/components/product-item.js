import React from 'react'
import Link from 'gatsby'
import PropTypes from 'prop-types';


const ProductItem = ({ item,price,link }) => {
  price = price ? " - "+ price: price
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={item.img} alt={item.value} />
      </div>
      <div className="product-description">
        <a href={link}>{item.value}  {price}</a>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  price: PropTypes.string,

  
};

ProductItem.defaultProps = {
  price: '',
  link: "/productpage"
  
};
export default ProductItem
