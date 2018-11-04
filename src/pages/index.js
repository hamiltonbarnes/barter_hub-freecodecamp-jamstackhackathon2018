
import React from 'react'
import { Link } from 'gatsby'
import { getUser, isLoggedIn } from '../services/auth'
import Footer from '../components/footer'
import Layout from '../components/layout'
import './index.css'
import ProductList from '../components/product-list'
import {itemCategoriesList} from '../constants/constants'

const IndexPage = () => {
  return (
    <div>
    <Layout>
      <h1>Welcome, {isLoggedIn() ? getUser().name : 'Barter-Hub'}</h1>
      <p>
        {isLoggedIn() ? (
		
		
          <>
            You are logged in, so check your <Link to="/profile">profile</Link>
          </>
        ) : (
          <>
		  
		  <br></br>
            You should <Link to="/login">log in</Link> to see restricted content
			
		
			<br></br>
			
			<h3>An Ecommerce site with a barter that helps you use less money.</h3>
			
            <br></br>
			Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          
			
			
			
			
			
          </>
		  
		  
		  
        )}
      </p>
      <ProductList items={itemCategoriesList}/>
    </Layout>
    <Footer />
    </div>
  )
}

export default IndexPage
