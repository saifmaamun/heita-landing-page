import React from 'react';
import { Button, Col, Container, Nav,  Row } from 'react-bootstrap';
import logo from "../../../images/logo/Heita Logo - Final.png"

import playStore from '../../../images/hero/Google_Play_Store_badge_EN.svg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from "./Footer.module.css"
import { NavLink} from 'react-router-dom';


const Footer = () => {
    
    return (
        <div  className="bg-light">

            <div  className={styles.footer_container} >
            <Container>
                <Row className="gy-5">
                        <Col xs={12} md={6}>
                            <div className="d-flex align-items-center justify-content-center">
                                <p></p>
                                <NavLink className={styles.copy} to="/home"><img className="me-3" height="100" src={logo} alt="" /></NavLink>
                                
                                    
                                <h5 className={styles.footer_text}>Follow Us On</h5>

                                <a href="https://www.facebook.com/heitaapp" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="text-light mx-2 fs-3" icon={faFacebook} />

                                </a>
                                <a href="https://twitter.com/hetiaapp" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="text-light mx-2 fs-3" icon={faTwitter} />

                                </a>
                                <a href="https://www.instagram.com/heitaapp/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="text-light mx-2 fs-3" icon={faInstagram} />

                                </a>
                            </div>
                    </Col>
                        <Col xs={12} md={6}>
                            <div className="d-flex align-items-center justify-content-center">

                                <Button variant="light" className={styles.button_text }>Book A Demo</Button>
                                <div className="ms-5">
                                    <h5 className={styles.app_text}>Get The App Now</h5>
                                    <a href="https://play.google.com/store/apps/details?id=com.app.heita" target="_blank" rel="noopener noreferrer">
                                        <p></p>

                                        <img className="w-100 app" src={playStore} alt="" />
                                    </a>
                                </div>
                            </div>
                    </Col>
                    </Row>
            </Container>
            </div>
            <Container className={styles.terms}>
                

                <Row className="text-black mt-2 pt-2 d-flex align-items-center justify-content-center">
                <Col xs={12} md={4}>
                    <h5 className={styles.copy}>Copyright 2022 - All Rights Reserved</h5>
                </Col>
                <Col xs={12} md={4}>
                    
                </Col>
                <Col xs={12} md={4}>
                        <div className="d-flex align-items-center">
                            
                            <NavLink className={styles.copy} to="/terms">Terms & Conditions</NavLink>
                            <NavLink className={styles.copy} to="/policy">Privacy Policy</NavLink>
                           
                            
                            
                    </div>
                </Col>
            </Row>
            </Container>
            
        </div>
    );
};

export default Footer;