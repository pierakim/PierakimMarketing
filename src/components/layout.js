import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
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
              {children}
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
