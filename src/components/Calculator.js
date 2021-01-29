import React, { useEffect, useState } from "react";
import rates from "./Data/rates";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Calculator = (props) => {
  const [calcType, setCalcType] = useState(props);
  useEffect(() => {
    setCalcType(props);
  }, [props]);

  let calcBody;
  if (calcType === "l2o") {
    calcBody = l2o_body;
  }
  if (calcType === "rental") {
    calcBody = rental;
  }

  return {};
};
