import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';


const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="light"  collapseOnSelect expand="lg">
                <Container>
                    <Navbar className="header-logo" href="#home">Mental Message</Navbar>
                </Container>
                <Container>
                    <Nav className="me-auto">
                        <NavLink as={Link} to="/" className="header-design">Home</NavLink>
                        <NavLink as={Link} to="/free-consultation" className="header-design">Free Consultation</NavLink>
                        <NavLink as={Link} to="/account" className="header-design">Account</NavLink>
                        <Navbar className="name"> {user.displayName} </Navbar>

                        {
                            user.email ?
                                <button className="logout" onClick={logOut}>Log Out</button> :
                                <Navbar as={Link} to="/register" className="sign-up header-design" >Sign Up</Navbar>
                        }

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;