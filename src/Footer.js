import { faHeart } from '@fortawesome/fontawesome-free-solid';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="footer-comp">
            <Row>
                <Col>
                    <h5>Lokasi</h5>
                    <table className="darklight">
                        <tr>
                            <td>Alamat</td>
                            <td>:</td>
                            <td>Jalan Pelemsari, Yogyakarta</td>
                        </tr>
                        <tr>
                            <td>Telepon</td>
                            <td>:</td>
                            <td>08123123</td>
                        </tr>
                        <tr>
                            <td>Kode Pos</td>
                            <td>:</td>
                            <td>55172</td>
                        </tr>
                    </table>
                </Col>
                <Col>
                    <h5>Ingin Donasi?</h5>
                    <p className="darklight"><a href="#">Klik disini untuk donasi kepada pemateri</a></p>
                </Col>
                <Col>
                    <p>Kritik dan Saran</p>
                    <p className="darklight"><a href="#">Klik untuk kritik dan saran</a></p>
                </Col>
            </Row>
            <Row className="copyright">
                <Col>
                    Created by afif with <FontAwesomeIcon icon={faHeart} color="red"></FontAwesomeIcon>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;