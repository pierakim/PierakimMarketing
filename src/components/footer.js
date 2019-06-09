import React from "react"
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => (
    <Navbar fixed="bottom" className="justify-content-end NavBarFluid">
        <Navbar.Brand href="#">
            © {new Date().getFullYear()}, Lamba Dev
        </Navbar.Brand>
    </Navbar>
)
export default Footer
