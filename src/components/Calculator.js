import React, { useEffect, useState } from "react";
import { rates } from "./Data/rates";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

export const Calculator = (props) => {
  const [calcType, setCalcType] = useState(props.calcType);
  const [displayPrice, setDisplayPrice] = useState(false);
  const [msrp, setMsrp] = useState(0);
  const [length, setLength] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [credit, setCredit] = useState(0);
  const [calcPayment, setCalcPayment] = useState(0);
  const [calcBuyOut, setCalcBuyout] = useState(0);
  const [calcTotal, setCalcTotal] = useState(0);

  useEffect(() => {
    setCalcType(props.calcType);
  }, [props.calcType]);

  useEffect(() => {
    console.log('running use effect');
    if (calcType === "l2o") {
      if (msrp !== 0 && length !== 0 && credit !== 0) {
        calculateFields(props);
        setDisplayPrice(true);
      } else {
      if (displayPrice === true) {
        setDisplayPrice(false);
      }
    }
  }
    if (calcType === "rental") {
      console.log('its rental');
      if (msrp !== 0 && credit !== 0) {
        calculateFields(props);
        setDisplayPrice(true);
      } else {
      if (displayPrice === true) {
        setDisplayPrice(false);
        }
      }
    }
  }, [msrp, length, downPayment, credit, displayPrice]);

  function clip(number) {
    return Math.round(number * 100) / 100;
  }

  function calculateFields(props) {
    console.log('running calc fields');
    let totalPriceHolder;
    let monthlyPaymentHolder;
    let buyoutHolder = 0;
    if (calcType === "l2o") {
      console.log("rates: " + rates["l2o"]["low"][length]);
      console.log("msrp: " + msrp);
      console.log(msrp * rates["l2o"]["low"][length]);
      if (credit == 1) {
        //lowest credit
        totalPriceHolder = msrp * rates["l2o"]["low"][length];
        console.log(credit);
      }
      if (credit == 2) {
        //medium credit
        totalPriceHolder = msrp * rates["l2o"]["medium"][length];
      }
      if (credit == 3) {
        //high credit
        totalPriceHolder = msrp * rates["l2o"]["high"][length];
      }
      console.log("meow" + totalPriceHolder);
      totalPriceHolder = totalPriceHolder - downPayment;
      monthlyPaymentHolder = totalPriceHolder / length;
      monthlyPaymentHolder = clip(monthlyPaymentHolder);
      console.log(monthlyPaymentHolder);
      setCalcPayment(monthlyPaymentHolder);
      props.setMonthlyPrice(monthlyPaymentHolder);
      setCalcTotal(totalPriceHolder);
      setCalcBuyout(0);
    } else if (calcType === "rental") {
      if (credit == 1) {
        //lowest credit
        monthlyPaymentHolder = msrp * rates["rental"]["low"]["month"];
      }
      if (credit == 2) {
        //medium credit
        monthlyPaymentHolder = msrp * rates["rental"]["medium"]["month"];
      }
      if (credit == 3) {
        //high credit
        monthlyPaymentHolder = msrp * rates["rental"]["high"]["month"];
      }
      // all buyout prices are the same, not using this now, however.
      monthlyPaymentHolder = clip(monthlyPaymentHolder);
      setCalcPayment(monthlyPaymentHolder);
      props.setMonthlyPrice(monthlyPaymentHolder);
    }
  }

  return (
    <Container fluid>
      {/* type: {calcType}
      msrp: {msrp}
      down: {downPayment}
      credit: {credit}
      length: {length} */}
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
          {calcType === "l2o" && (
            <div>
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
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Down Payment</Form.Label>
            <Form.Control
              type="number"
              placeholder="0.00"
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </Form.Group>
          </div>
          )}
          <Form.Group controlId="exampleForm.ControlSelect2">
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
      </Row>
    </Container>
  );
};
