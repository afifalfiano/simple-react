import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

const NavigationWeb = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar className="justify-content-start">
            <Nav>
              <Nav.Link>
                <h4>Belajar Tech</h4>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col>
          <Navbar className="justify-content-center">
            <Nav>
              <Nav.Link href="#home">Beranda</Nav.Link>
              <Nav.Link href="#manfaat">Manfaat</Nav.Link>
              <Nav.Link href="#diskusi">Diskusi</Nav.Link>
              <Nav.Link href="#tentang">Tentang</Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col>
          <Navbar className="justify-content-end">
            <Nav>
              <Nav.Link>
                <Button>Login</Button>
              </Nav.Link>
              <Nav.Link>
                <Button variant="light">Sign Up</Button>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationWeb;
