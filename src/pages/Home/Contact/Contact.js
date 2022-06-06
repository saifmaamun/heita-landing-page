import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import call from '../../../images/about/7830799_phone_actions_ring_icon.svg'
import mail from '../../../images/about/icons.svg'
import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <Container className="mb-5 pb-5">
            <div className="text-center mb-5">
                <h1 className={styles.heading}>CONTACT US</h1>
                <div className={styles.underline}></div>
                <h5 className={styles.sub}>Have any queries, or doubts? We are happy to help anytime!</h5>
            </div>
            <div className=" d-flex justify-content-center">
                <Row className="g-5  ">
                    <Col xs={12} md={6}>
                        <div className="d-flex justify-content-start align-items-center">
                            <div className={styles.box}>
                                <p></p>
                                <img  src={call} alt="" srcset="" />
                            </div>
                            <div className="mx-3">
                                <h3 className={styles.box_text}>+27 73 77 65695</h3>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="d-flex justify-content-start align-items-center">
                            <div className={styles.box}>
                                <p></p>
                                    <img src={mail} alt="" srcset="" />
                                </div>
                                <div className="mx-3">
                                    <h3 className={styles.box_text}>support@heita.app</h3>
                                </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </Container>
    );
};

export default Contact;