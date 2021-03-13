import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { faChalkboardTeacher, faCheck, faDollarSign } from "@fortawesome/fontawesome-free-solid";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
const Feature = () => {
  return (
    <Container id="manfaat">
      <Row>
        <Col className="text-center">
          <p className="text-primary">Manfaat Belajar Bersama Tech</p>
          <h1 className="padding-bottom">Manfaat</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <i>
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue"/>
          </i>
          <h4 className="pt-3 pb-2">Mudah</h4>
          <p className="w-75 pb-3">
            Mudah dalam mengakses materi-materi yang telah disediakan oleh Bersama Tech. Selain itu
            materi juga bisa didownload.
          </p>
        </Col>
        <Col>
          <i>
            <FontAwesomeIcon icon={faDollarSign} size="2x" color="red"/>
          </i>
          <h4 className="pt-3 pb-2">Gratis</h4>
          <p className="w-75 pb-3">
            Tidak perlu mengeluarkan sepeser pun untuk bisa belajar hal baru di Bersama Tech.
            Satu hal yang harus persiapkan adalah niat untuk mempelajari hal baru.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <i>
            <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" color="green" />
          </i>
          <h4 className="pt-3 pb-2">Dibimbing oleh ahlinya</h4>
          <p className="w-75 pb-3">
            Materi disampaikan oleh orang yang memang berkompeten dibidang tersebut.
            Materi yang dibawakan akan selalu up to date.
          </p>
        </Col>
        <Col>
          <i>
            <FontAwesomeIcon icon={faLaptopCode} size="2x" color="brown" />
          </i>
          <h4 className="pt-3 pb-2">Pedalam Fundamental</h4>
          <p className="w-75 pb-3">
            Untuk bisa lebih mendalam suatu hal kita harus perkuat dulu fundamental kita supaya kita tidak kesulitan untuk berinovasi.
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
