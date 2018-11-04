
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
    <div className="text-welcome">
      <h1>Hi {isLoggedIn() ? getUser().name : 'people'}</h1>
      <span>
        {isLoggedIn() ? (
          <p>
            You are logged in, so check your <Link to="/profile">profile</Link>
          </p>
        ) : (
          <p>
            You should <Link to="/login">log in</Link> to see restricted content
          </p>
        )}
      </span>
    </div>
      <ProductList items={itemCategoriesList}/>
    </Layout>
    <Footer />
    </div>
  )
}

export default IndexPage
