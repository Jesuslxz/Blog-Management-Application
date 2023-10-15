import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-white mt-5" style={{flexShrink: 0}}>
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Blog Post App
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Made by Jesus Lozano
                        <br />
                        Using React and MockApi
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
