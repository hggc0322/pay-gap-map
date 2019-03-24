import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav}from "react-bootstrap"

const Header = ({ siteTitle }) => {
  let linkStyle = {margin:'20px'};
  return(
   <header>
    <Navbar fixed="top" bg="dark" variant="dark">
    <Navbar.Brand><Link to=''>{siteTitle}</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav >
      
      <Link style ={linkStyle } to="/map" activeStyle={{ color: "#B01E1D" }}> Map </Link>
      <Link style ={linkStyle } to="/search" activeStyle={{ color: "#B01E1D" }} >Company Search</Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
  <br />      
  </header>
  
);
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
