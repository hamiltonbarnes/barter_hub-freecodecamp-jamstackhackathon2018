import React from 'react'
import Layout from '../components/layout'

import Footer from '../components/footer'

<<<<<<< HEAD
const DoBarter = () => {
    return (
    <div>
=======




const DoBarter = () => {
    return (
    <div>
	<div>
	  <p>Before the script...</p>
<script src="https://cdn.jsdelivr.net/faunadb/1.1/faunadb.js"></script>
  <script>
 var q = faunadb.query;
  var client = new faunadb.Client({
	secret: 'fnAC--V2ZKACCDdHS-KtiV5aG8HWuuonUIUMUlgK'
});
 

client.query(q.Get(q.Match(q.Index("posts_by_price"), "iphone"))).then(  (num) => myFunc(num) );

function myFunc(elem) {
  console.log(Object.values(elem));
  
  var p = document.createElement("p");
  	p.innerText = Object.values(elem);
  	document.body.appendChild(p)
}

  </script>

  <p>...After the script.</p>
  
  </div>
>>>>>>> 868e405fc713125ce85d5f30b749a74deef140e0
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