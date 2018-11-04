import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import NavBar from "./navBar";
import Header from "./Header";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        >
          <html lang="en" />
        </Helmet>
<<<<<<< HEAD
        {/*<Header /> */}
=======
        <Header />
>>>>>>> 868e405fc713125ce85d5f30b749a74deef140e0
        <div
          style={{
            margin: "0 auto",
            maxWidth: "95%",
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0
          }}
        >
          <NavBar />
          {children}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
