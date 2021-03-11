import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="footer-comp">
            <Row>
                <Col>
                    <p>Test 1</p>
                    <ul>
                        <li>Test 1</li>
                        <li>Test 1</li>
                        <li>Test 1</li>
                    </ul>
                </Col>
                <Col>
                    <p>Test 2</p>
                    <ul>
                        <li>Test 2</li>
                        <li>Test 2</li>
                        <li>Test 2</li>
                    </ul>
                </Col>
                <Col>
                    <p>Test 3</p>
                    <ul>
                        <li>Test 3</li>
                        <li>Test 3</li>
                        <li>Test 3</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;