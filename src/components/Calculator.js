import React, { useEffect, useState } from "react";
import { rates } from "./Data/rates";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Calculator = (props) => {
  const [calcType, setCalcType] = useState(props);
  const [displayPrice, setDisplayPrice] = useState(false);
  const [msrp, setMsrp] = useState(0);
  const [length, setLength] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [credit, setCredit] = useState(0);
  const [calcPayment, setCalcPayment] = useState(0);
  const [calcBuyOut, setCalcBuyout] = useState(0);
  const [calcTotal, setCalcTotal] = useState(0);

  useEffect(() => {
    setCalcType(props);
  }, [props]);

  useEffect(() => {
    if (msrp !== 0 && length !== 0 && credit !== 0) {
      calculateFields();
      setDisplayPrice(true);
    } else {
      if (displayPrice === true) {
        setDisplayPrice(false);
      }
    }
  }, [msrp, length, downPayment, credit, displayPrice]);

  function calculateFields() {
    let totalPriceHolder;
    let monthlyPaymentHolder;
    let buyoutHolder = 0;
    if (calcType === "l2o") {
      if (credit === 1) {
        //lowest credit
        totalPriceHolder = msrp * rates["l20"]["low"][length];
      }
      if (credit === 2) {
        //medium credit
        totalPriceHolder = msrp * rates["l20"]["medium"][length];
      }
      if (credit === 1) {
        //high credit
        totalPriceHolder = msrp * rates["l20"]["high"][length];
      }
      monthlyPaymentHolder = totalPriceHolder / length;
      console.log(monthlyPaymentHolder);
      setCalcPayment(monthlyPaymentHolder);
      setCalcTotal(totalPriceHolder);
      setCalcBuyout(0);
    } else if (calcType === "rental") {
      if (credit === 1) {
        //lowest credit
        monthlyPaymentHolder = msrp * rates["rental"]["low"]["month"];
      }
      if (credit === 2) {
        //medium credit
        monthlyPaymentHolder = msrp * rates["rental"]["medium"]["month"];
      }
      if (credit === 1) {
        //high credit
        monthlyPaymentHolder = msrp * rates["rental"]["high"]["month"];
      }
      let buyoutHolder = msrp * rates["rental"]["low"]["buyout"];
      // all buyout prices are the same, not using this now, however.
      setCalcPayment(monthlyPaymentHolder);
      setCalcTotal(0);
    }
  }

  return (
    <Container fluid>
      msrp: {msrp}
      down: {downPayment}
      credit: {credit}
      length: {length}
      <Row>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>MSRP Price Online, After Tax</Form.Label>
            <Form.Control
              type="number"
              placeholder="0.00"
              onChange={(e) => setMsrp(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Length of Rental</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setLength(e.target.value)}
            >
              <option value="0"></option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
              <option value="18">18 Months</option>
              <option value="24">24 Months</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Down Payment</Form.Label>
            <Form.Control
              type="number"
              placeholder="0.00"
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Credit Score</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setCredit(e.target.value)}
            >
              <option value="0"></option>
              <option value="1">Poor/Fair (less than 620)</option>
              <option value="2">Good (Between 620 and 700)</option>
              <option value="3">Great (Above 700)</option>
            </Form.Control>
          </Form.Group>
          {/* <Button variant="secondary" size="lg">
            Get Price
          </Button> */}
        </Form>
        {displayPrice === true && (
          <div>
            <h2>Monthly Payment: {calcPayment} + Tax</h2>
            <h2>Total Cost: {calcTotal} + Tax</h2>
          </div>
        )}
      </Row>
    </Container>
  );
};
