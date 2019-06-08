import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap.css';
import "./layout.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
          <Row>
            <Header siteTitle={data.site.siteMetadata.title}/>
              {children}
            {/* <Footer/> */}
          </Row>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
