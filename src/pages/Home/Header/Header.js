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
                                    <Nav.Link className={styles.navbar} href="#features">About Us</Nav.Link>
                                    <Nav.Link className={styles.navbar} href="#pricing">Contact Us</Nav.Link>
                                    <Button className={styles.button} href="#pricing">Book A Demo</Button>
                                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                                    <FontAwesomeIcon className="text-light mx-2 fs-3" icon={faFacebook} />
                                    <FontAwesomeIcon className="text-light mx-2 fs-3" icon={faTwitter} />
                                    <FontAwesomeIcon className="text-light mx-2 fs-3" icon={faInstagram} />
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