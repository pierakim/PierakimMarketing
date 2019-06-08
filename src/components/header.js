import PropTypes from "prop-types"
import React from "react"

import Navbar from 'react-bootstrap/Navbar';

const Header = ({ siteTitle }) => (
  <Navbar className="justify-content-end NavBarFluid">
    <Navbar.Brand href="#">{siteTitle}</Navbar.Brand>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
