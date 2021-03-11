import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Testimoni = () => {
  return (
    <Container>
      <Row>
        <Col className="h-25">
            <h1>Hello World Hello World</h1>
            <div className="pt-4">
            <Button className="mr-2">Test</Button>
            <Button variant="light" className="mr-2">Test</Button>
            <Button variant="light" className="mr-2">Test</Button>
            </div>
        </Col>
        <Col>
        <Image src={require("./assets/image/creator.jpg")} width="500" />
        </Col>
      </Row>
      <Row>
        <Col className="testimoni-2">
        <Image src={require("./assets/image/creator.jpg")} width="500" />
        </Col>
        <Col className="testimoni-3">
        <h1>Hello World Hello World</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever
        </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimoni;
