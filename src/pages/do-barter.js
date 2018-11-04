import React from 'react'
import Layout from '../components/layout'

import Footer from '../components/footer'

const DoBarter = () => {
    return (
    <div>
    <Layout>
    <h1 style={{textAlign: "center",
    marginTop: "50px"}}> Barter Trading </h1>

    <div className="products-to-barter">
      <div className="product">
        <h6>Name of Product:</h6>
        <h6>Info of Product:</h6>
        <h6>State of Product</h6>

        <h4 style={{textAlign: "center"}}>Details of individuals</h4>
        <h6>Name:</h6>
        <h6>Location</h6>
      </div>

      <button className="btn">Barter trade</button>

      <div className="product">
        <h6>Name of Product:</h6>
        <h6>Info of Product:</h6>
        <h6>State of Product</h6>

        <h4 style={{textAlign: "center"}}>Details of individuals</h4>
        <h6>Name:</h6>
        <h6>Location</h6>
      </div>
    </div>
    </Layout>

    <Footer/>
    </div>
    )
}

export default DoBarter