import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";

const SectionWeb = () => {
  return (
    <Container className="mt-4 height-section">
      <Row>
        <Col>
          <h1 className="m-4 text-left font-section">
            Hellooo World Hellooo World Hellooo World Hellooo World Hellooo
            World{" "}
          </h1>
        </Col>
      </Row>
      <Row className="m-4 text-left">
        <Col className="pl-0">
          <p>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            }
          </p>
          <div className="pt-4">
            <Button variant="primary" className="mr-3">
              Read More
            </Button>
            <Button variant="light">Details</Button>
          </div>
        </Col>
        <Col>
          <Image src={require("./assets/image/section.png")} width="500" />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionWeb;
