/*
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
*/
import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi {isLoggedIn() ? getUser().name : "people"}</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
    </Layout>
  )
}

export default IndexPage