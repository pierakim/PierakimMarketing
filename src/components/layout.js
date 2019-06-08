import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
// import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap.css';
import "./layout.css"

import Container from 'react-bootstrap/Container';

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
        <Container className="mainContainer" fluid={true} >
            {/* <Header siteTitle={data.site.siteMetadata.title}/> */}
              {children}
            {/* <Footer/> */}
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
