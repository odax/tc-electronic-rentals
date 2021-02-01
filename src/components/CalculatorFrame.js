import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import { Calculator } from "./Calculator";

export const CalculatorFrame = () => {

  const [monthlyPrice, setMonthlyPrice] = useState(0);

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
                <div style={{marginTop: '10px'}}>
                {monthlyPrice !== 0 && (
                    <h4>Monthly Payment: ${monthlyPrice} + Tax</h4>
                )}
                </div>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <Calculator calcType="l2o" setMonthlyPrice={setMonthlyPrice} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <Calculator calcType="rental" setMonthlyPrice={setMonthlyPrice} />
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
