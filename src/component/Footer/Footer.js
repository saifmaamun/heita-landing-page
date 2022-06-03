import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import door from '../../images/3steps/perspective_matte.png'

import playStore from '../../images/hero/Google_Play_Store_badge_EN.svg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div fluid className="bg-light">

            <div fluid className={styles.footer_container} >
            <Container>
                <Row className="g-5">
                        <Col xs={12} md={6}>
                            <div className="d-flex align-items-center justify-content-center">
                                    
                                <img className="me-3 " src={door} alt="" />
                                    
                                <h5 className={styles.footer_text}>Follow Us On</h5>

                                    <FontAwesomeIcon className="text-center ms-3 fs-2" icon={faFacebook} />
                                <FontAwesomeIcon className="text-light ms-3 fs-2" icon={faTwitter} />
                                <FontAwesomeIcon className="text-light ms-3 fs-2" icon={faInstagram} />
                            </div>
                    </Col>
                        <Col xs={12} md={6}>
                            <div className="d-flex align-items-center justify-content-center">

                                <Button variant="light" className={styles.button_text }>Book A Demo</Button>
                                <div className="ms-5">
                                    <h5 className={styles.app_text}>Get The App Now</h5>
                                    <img className="w-100" src={playStore} alt="" />
                                </div>
                            </div>
                    </Col>
                    </Row>
            </Container>
            </div>
            <Container>

                <Row className="text-black mt-2 pt-2 d-flex align-items-center justify-content-center">
                <Col xs={12} md={4}>
                    <h5 className={styles.copy}>Copyright 2022 - All Rights Reserved</h5>
                </Col>
                <Col xs={12} md={4}>
                    
                </Col>
                <Col xs={12} md={4}>
                    <div className="d-flex align-items-center">

                            <h5 className={styles.copy}>Terms & Conditions</h5>
                            <h5 className={styles.copy}>Privacy Policy</h5>
                    </div>
                </Col>
            </Row>
            </Container>
            
        </div>
    );
};

export default Footer;