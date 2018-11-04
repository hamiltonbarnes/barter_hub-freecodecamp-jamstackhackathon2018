
import React from 'react'
import { Link } from 'gatsby'
import { getUser, isLoggedIn } from '../services/auth'
import Footer from '../components/footer'
import Layout from '../components/layout'
import './index.css'
import ProductsPage from '../components/productpageComp'
import {productPageItems} from '../constants/constants'

const IndexPage = () => {
  
  return (
    <Layout>
      <h1>Hi {isLoggedIn() ? getUser().name : 'people'}</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your <Link to="/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/login">log in</Link> to see restricted content
          </>
        )}
      </p>
      <ProductsPage items={productPageItems}/>
      <Footer />
    </Layout>
  )
}

export default IndexPage
