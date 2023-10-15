import React from "react";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



export default function Navigation() {
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Navbar.Brand as={Link} to="/" className="m-3">J-blogger</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Read me</Nav.Link>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                <Nav.Link as={Link} to="/post/">Blog list</Nav.Link>
            </Nav>
        </Navbar>
        </>

    );
}
