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
                <h4>Afif Alfiano</h4>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col>
          <Navbar className="justify-content-center">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
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
