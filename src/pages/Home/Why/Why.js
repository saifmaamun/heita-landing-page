import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from "./Why.module.css"
import image1 from '../../../images/why/Group 1.png'
import image2 from '../../../images/why/Group 2.png'
import image3 from '../../../images/why/Group 3.png'
import image4 from '../../../images/why/Group 4.png'

const Why = () => {
    return (
        <Container className="my-5 py-5">
            <div className="text-center">
                <h1 className={styles.heading}>WHY CHOOSE US?</h1>
                <div className={styles.underline}></div>
                <h5 className={styles.sub}>Once you've used a HEITA bell, you'll want to have one of your own.</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center">

                <Row className="gy-5 mb-4">
                    <Col className="" xs={12} lg={6}>
                        <Card className={styles.card} >
                            <div className={styles.card_img_box}>
                                <p></p>
                                <img src={image1} alt="" />
                            </div>
                            <Card.Body className="">
                                <Card.Title className={styles.card_head}>FREE</Card.Title>
                                <p className={styles.card_des}>
                                    No fees for using our application or creating HEITA bells
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className={styles.card} >
                            <div className={styles.card_img_box}>
                                <p></p>
                                <img src={image2} alt="" />
                            </div>
                            <Card.Body className="">
                                <Card.Title className={styles.card_head}>SIMPLE</Card.Title>
                                <p className={styles.card_des}>
                                    3 Simple and easy steps <br /> to get started.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <Row className="gy-5 mb-4">
                    <Col xs={12} lg={6}>
                        <Card className={styles.card} >
                            <div className={styles.card_img_box}>
                                <p></p>
                                <img src={image3} alt="" />
                            </div>
                            <Card.Body className="">
                                <Card.Title className={styles.card_head}>NO DOWNLOADS REQUIRED</Card.Title>
                                <p className={styles.card_des}>
                                    Visitors do not need the HEITA application <br /> to ring the bell. <br /> They simply need to scan a QR-Code
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Card className={styles.card} >
                            <div className={styles.card_img_box}>
                                <p></p>
                                <img src={image4} alt="" />
                            </div>
                            <Card.Body className="">
                                <Card.Title className={styles.card_head}>MORE FEATURES TO COME</Card.Title>
                                <p className={styles.card_des}>
                                    This is only the start of what we know will be a lot more functionality
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </Container>
    );
};

export default Why;