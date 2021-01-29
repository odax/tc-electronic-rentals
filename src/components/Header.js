import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Header = () => {
  return (
    <Container fluid style={{ background: "white" }}>
      <Row>
        <Col style={{ border: "1px solid red" }}></Col>
        <Col xs={6} style={{ border: "2px solid green" }}>
          <img
            alt="TC Electronic Rental Text with laptop icon"
            src={process.env.PUBLIC_URL + "/logo.png"}
            style={{ height: 250 }}
          />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
