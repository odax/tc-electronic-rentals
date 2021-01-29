import React, { useEffect, useState } from "react";
import rates from "./Data/rates";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Calculator = (props) => {
  const [calcType, setCalcType] = useState(props);

  useEffect(() => {
    setCalcType(props);
  }, [props]);

  return (
    <Container fluid>
      <Row>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>MSRP Price Online, After Tax</Form.Label>
            <Form.Control type="number" placeholder="0.00" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Length of Rental</Form.Label>
            <Form.Control as="select">
              <option>3 Months</option>
              <option>6 Months</option>
              <option>12 Months</option>
              <option>18 Months</option>
              <option>24 Months</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Down Payment</Form.Label>
            <Form.Control type="number" placeholder="0.00" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Credit Score</Form.Label>
            <Form.Control as="select">
              <option>Poor/Fair (less than 620)</option>
              <option>Good (Between 620 and 700)</option>
              <option>Great (Above 700)</option>
            </Form.Control>
          </Form.Group>
          <Button variant="secondary" size="lg">
            Get Price
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
