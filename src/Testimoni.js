import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Testimoni = () => {
  return (
    <Container id="diskusi">
      <Row>
        <Col className="h-25">
            <h1>Apa saja yang dipelajari?</h1>
            <div className="pt-4">
            <Button className="mr-2">HTML</Button>
            <Button variant="warning" className="mr-2">CSS</Button>
            <Button variant="success" className="mr-2">JS</Button>
            <Button variant="danger" className="mr-2">UI/UX</Button>
            <Button variant="dark" className="mr-2">PHP</Button>
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
        <h1>Disediakan forum diskusi</h1>
        <p>Anda merasa kebingungan dalam mempelajari fundamental? Tenang, kami sediakan forum diskusi</p>
        <Button variant="success" className="mr-2">Bergabung</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimoni;
