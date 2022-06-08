import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styles from './Header.module.css'
import logo from "../../../images/logo/Heita Logo - Final.png"

import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Container className="mt-4">
                <>
                    <Navbar collapseOnSelect expand="sm" variant="dark">
                        <Container>
                            <Navbar.Brand href="/home">
                                <img
                                    alt=""
                                    src={logo}
                                    
                                    height="100"
                                    className="d-inline-block align-top"
                                />{' '}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">

                                <Nav className="ms-auto d-flex align-items-center justify-content-around">
                                    <Nav.Link className={styles.navbar} href="/home">Home</Nav.Link>
                                    <Nav.Link className={styles.navbar} href="#aboutus">About Us</Nav.Link>
                                    <Nav.Link className={styles.navbar} href="#contact">Contact Us</Nav.Link>
                                    <Button className={styles.button} href="#book">Book A Demo</Button>
                                    <a href="https://www.facebook.com/heitaapp" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="text-light mx-2 fs-3" icon={faFacebook} />
                                        
                                    </a>
                                    <a href="https://twitter.com/hetiaapp" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="text-light mx-2 fs-3" icon={faTwitter} />

                                    </a>
                                    <a href="https://www.instagram.com/heitaapp/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="text-light mx-2 fs-3" icon={faInstagram} />

                                    </a>
                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
            </Container>
        </div>
    );
};

export default Header;