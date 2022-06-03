import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from "./AboutUs.module.css";
import mobile from "../../images/about/Mobile-App-Mockup.png";

const AboutUs = () => {
    return (
        <Container className=" ">
            <div className="text-center mb-5">
                <h1 className={styles.heading}>ABOUT US</h1>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.relative}>

                <Card className={styles.box} >
                    <Card.Body>
                        <Row>
                            <Col sm={12} lg={5}>

                                <Card.Text className={styles.box_text}>
                                    3 Peas in a pot... <br /> <br /> Simply put, 3 everyday guys with the vision of having a doorbell that costs nothing to install, easy and safe to operate, and a bell you can answer no matter where you are. <br /> <br /> Even if you are in the most remote places in the world... We want you to know there is a visitor at your door. The only snag, if you can call it one, is mobile phone reception.
                                </Card.Text>
                            </Col>
                            <Col sm={4}></Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className={styles.box}>
                    <Card.Body>
                        <Row>
                            <Col sm={12} lg={5}>

                                <Card.Text className={styles.box_text}>
                                    Where does the name come from? <br /> HEITA - An urban and rural greeting used by South Africans. <br /> A cheery slang form of 'Hello' . And receiving visitors must always be a cheerful experience. <br /> <br />  With business operations in Cape Town | South Africa and Chennai | India, HEITA aims to be the global leader in bell notifications. Starting small, however, we have some great ideas to follow, just watch this space.
                                </Card.Text>
                            </Col>
                            <Col sm={4}></Col>
                        </Row>
                    </Card.Body>
                </Card>
                <div className={styles.img_box}>
                <img className="" src={mobile} alt="" />
                </div>
            </div>

        </Container>
    );
};

export default AboutUs;