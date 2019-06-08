import React from "react"
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => (
    <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark" className="justify-content-end NavBarFluid">
        <Navbar.Brand href="#">
            © {new Date().getFullYear()}, Lamba Dev
        </Navbar.Brand>
    </Navbar>
)
export default Footer
