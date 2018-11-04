import React from 'react'
import Link from 'gatsby'
import ProductItem from './product-item'
const ProductsPage = ({ items }) => {
  return (
   <main >
       <h2 style={{textAlign: "center",
       paddingBottom: "20px",
       borderBottom: "2px #111 solid"}}>Products In Laptop Category</h2>
   <section className="product-list">
      
      {items.map(item => {
<<<<<<< HEAD
        return <ProductItem key={item.id} item={item} price={item.price} />
=======
        return <ProductItem key={item.id} item={item} price={item.price} barterpage={item.barterpage} />
>>>>>>> 868e405fc713125ce85d5f30b749a74deef140e0
      })}
    </section>
   </main>
  )
}

export default ProductsPage;
