import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";

const SectionWeb = () => {
  return (
    <Container className="mt-4 height-section">
      <Row>
        <Col>
          <h1 className="m-4 text-left font-section">
            Belajar Teknologi Tanpa Harus Bertatap Muka<br/>
            Disinilah Solusinya, Bersama Tech
          </h1>
        </Col>
      </Row>
      <Row className="m-4 text-left">
        <Col className="pl-0">
          <p>
            Bersama tech adalah sebuah platform yang digunakan untuk mempelejari suatu teknologi terutama dibidang website development.
            Disini kita belajar mulai dari nol dan sampai bisa mmebuat suatu project sederhana dan tidak begitu komplek karena fokus kita adalah
            paham akan fundamental.
          </p>
          <div className="pt-4">
            <Button variant="primary" className="mr-3">
              Baca Detail
            </Button>
            <Button variant="light">Manfaat</Button>
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
