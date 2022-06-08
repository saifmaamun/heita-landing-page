import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import mobile from '../../../images/3steps/Phone_perspective_matte.png'
import bell from '../../../images/3steps/Bell_perspective_matte_s.png'
import door from '../../../images/3steps/perspective_matte.png'
import styles from './Steps.module.css'

const Steps = () => {
    return (
        <div>
            <Container className="my-5 pb-5">
                <div className="text-center">
                    <h1 className={styles.heading}>EASY TO START IN 3 STEPS</h1>
                    <div className={styles.underline}></div>
                </div>
                <Row className="g-3 my-5 ">
                    <Col  xs={12} sm={6} md={4}>
                        <Card className={`${styles.card}`} >
                            <div className={styles.card_img_box}>
                                <p></p>
                            <img src={mobile}  alt=""/>
                            </div>
                            <Card.Body className="p-3">
                                <Card.Title className={styles.card_head}>Download The App</Card.Title>
                                <p className={styles.card_des}>
                                    Download the Heita App from your favourite app store.
                                </p>
                            </Card.Body>
                        </Card>
                        </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card className={`${styles.card}`} >
                            <div className={styles.card_img_box}>
                                <p></p>
                                <img src={bell}  alt=""/>
                            </div>
                            <Card.Body className="p-3">
                                <Card.Title className={styles.card_head}>Create Your Bell</Card.Title>
                                <p className={styles.card_des}>
                                    Register on the app and create your first HEITA bell to be used by any person with a smart phone.
                                </p>
                            </Card.Body>
                        </Card>
                        </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card className={`${styles.card}`} >
                            <div className={styles.card_img_box}>
                                <p></p>
                                <img  src={door}  alt=""/>
                            </div>
                            <Card.Body className="p-3">
                                <Card.Title className={styles.card_head}>Know Who's There!</Card.Title>
                                <p className={styles.card_des}>
                                    Even if the visitor does not have the app installed, he can scan the QR-Code of your HEITA bell, and you will know who is at the door no matter where you are
                                </p>
                            </Card.Body>
                        </Card>
                        </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Steps;