import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs={12} md={6}>
          <img
            alt="TC Electronic Rental Text with laptop icon"
            src={process.env.PUBLIC_URL + "/logo.png"}
            style={{ height: 250, width: '100%', objectFit: 'cover' }}
          />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
