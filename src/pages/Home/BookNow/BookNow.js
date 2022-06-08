import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './BookNow.module.css'

const BookNow = () => {
    return (
        <Container id="book" className="my-5 py-5">
            <div className="text-center mb-3 pb-5">
            <h1 className={styles.heading}>Have a query? We'll get in touch with you!</h1>
            <div className={styles.underline}></div>

            </div>

            <Form className={styles.csize}>
                <Row className="g-5 mx-3 px-3">

                    <Col   xs={12} sm={12} md={6}>
                        
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control className={styles.fsize} type="text" placeholder="Name" />
                </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" className={styles.fsize} placeholder="Email" />
                </Form.Group>
                    </Col>
                    <Col md={12}>
                        
                        <Form.Group className="mb-3" controlId="formBasicCompanyName">
                            <Form.Control type="text" className={styles.fsize}placeholder="Company Name" />
                </Form.Group>
                    </Col>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Control type="textarea" className={styles.fsize} placeholder="Message" />
                    </Form.Group>

                </Row>
                <div className="text-center py-3">

                <Button className={styles.button}  type="submit">
                    Submit
                </Button>
                </div>
            </Form>
            
        </Container>
    );
};

export default BookNow;