import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import { Calculator } from "./Calculator";

export const CalculatorFrame = () => {
  return (
    <Container fluid style={{ background: "white" }}>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Row>
            <Col></Col>
            <Col>
              <h5>Rental Price Calculator (Estimate):</h5>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Tab.Container
              id="list-group-tabs-example"
              defaultActiveKey="#link1"
            >
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    Lease-To-Own
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Regular
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <Calculator type="l2o" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <Calculator type="rental" />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Tab.Container>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
