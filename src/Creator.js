import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Creator = () => {
  return (
    <Container id="tentang">
      <Row>
        <Col>
          <Image src={require("./assets/image/creator.jpg")} width="500" />
        </Col>
        <Col>
          <p className="text-primary">Tentang Website</p>
          <h1>Merasa tertinggal dalam mempelejari teknologi web? Pelajari sekarang di Bersama Tech</h1>
          <div className="pt-4">
            <Button variant="primary">Detail</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Creator;
