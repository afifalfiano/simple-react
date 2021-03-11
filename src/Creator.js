import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Creator = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={require("./assets/image/creator.jpg")} width="500" />
        </Col>
        <Col>
          <p className="text-primary">Hello world for categories</p>
          <h1>Hello World Hello World Hello World Hello World Hello World</h1>
          <div className="pt-4">
            <Button variant="primary">Check now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Creator;
