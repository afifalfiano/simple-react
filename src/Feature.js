import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
const Feature = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <p>Title for feature</p>
          <h1 className="padding-bottom">Hello World</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <i>
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </i>
          <h4 className="pt-3 pb-2">Title</h4>
          <p className="w-75 pb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever
          </p>
        </Col>
        <Col>
          <i>
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </i>
          <h4 className="pt-3 pb-2">Title</h4>
          <p className="w-75 pb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <i>
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </i>
          <h4 className="pt-3 pb-2">Title</h4>
          <p className="w-75 pb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever
          </p>
        </Col>
        <Col>
          <i>
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </i>
          <h4 className="pt-3 pb-2">Title</h4>
          <p className="w-75 pb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center padding-button">
          <Button varian="primary">More Info</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;
