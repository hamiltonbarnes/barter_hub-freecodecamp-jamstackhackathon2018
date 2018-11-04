import React from 'react'
import Link from 'gatsby'
import ProductItem from './product-item'
const ProductList = ({ items }) => {
  return (
   <div className="products">
       <h2 style={{textAlign: "center",
       paddingBottom: "20px",
       borderBottom: "2px #111 solid"}}>All Our Products</h2>
   <section className="product-list">
      
      {items.map(item => {
        return <ProductItem key={item.id} item={item} />
      })}
    </section>
   </div>
  )
}

export default ProductList
