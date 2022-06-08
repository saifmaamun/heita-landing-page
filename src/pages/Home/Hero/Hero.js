import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import playStore from '../../../images/hero/Google_Play_Store_badge_EN.svg.png'
import banner from '../../../images/hero/Website Banner.png'
import styles from './Hero.module.css'


const Hero = () => {
    return (

        <Container className="my-5">
            <Row className="d-flex justify-content-center align-items-center">
                <Col sm={12} md={12} lg={5}>
                    <div className="text-left">

                        <h4 className={styles.title} >Knock, Knock....</h4>
                        <h1 className={styles.heading}>Whos's <br /> There ?</h1>
                        <h3 className={styles.subheading}>With HEITA You'll Know!!</h3>
                        <Button className={`${styles.button}`}>Book A Demo</Button>
                        <div className="me-auto mt-3">
                        <div className="d-flex justify-content-start align-items-center">
                                <h5 className={styles.getapp}>Get The App Now</h5>
                                <a href="https://play.google.com/store/apps/details?id=com.app.heita" target="_blank" rel="noopener noreferrer">

                            <img className="w-100 app" src={playStore} alt="" />
                                </a>
                        </div>
                        </div>
                    </div>
                </Col>

                <Col lg={7}>

                    <img id="mobile" className="w-100 text-left mobile" src={banner} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Hero;