import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Information = () => {
  return (
    <Container fluid style={{ background: "white" }}>
      <Row>
        <Col></Col>
        <Col xs={12} md={6} >Call Us: <a href="tel:231-303-1133">231-303-1133</a> | Our <a href="https://www.facebook.com/TC-Electronic-Rentals-107055251357324/">Facebook!</a></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={12} md={6}>
          <p>
            TC Electronic Rentals was established January of 2021. We offer
            custom short-term rentals, lease-to-own rentals, and long term
            rentals with the option to buy. We serve Traverse City, MI and are a
            mobile shop, so we do not have a brick and morter location. If you
            are interested in a rental, please use the calculator below to
            determine how much you can expect to pay. Please feel free to give
            us a call or send us a message on facebook! Thanks!
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
