import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import devices from "../styles/Devices";
import colours from "../styles/Colours";

const Card = (props) => {
  return (
    <StyledCard {...props}>
      <CardTitle {...props}>{props.title}</CardTitle>
      {props.children}
      <StyledLink to={props.path}>{props.buttonText}</StyledLink>
    </StyledCard>
  );
};

const StyledLink = styled(Link)`
  background-color: ${colours.yellow};
  color: black;
  font-style: normal;
  font-weight: bold;
  padding: 0.5rem 6rem;
  justify-content: center;
  display: flex;
`;

const CardTitle = styled.legend`
  font-family: Playfair Display;
  font-weight: ${(props) => (props.secondary ? 900 : "bold")};
  font-size: ${(props) => (props.secondary ? "38px" : "24px")};
  width: auto;
  padding: ${(props) => (props.secondary ? "0" : "0 0.5rem")};
  text-align: ${(props) => (props.secondary ? "left" : "center")};
`;

const StyledCard = styled.fieldset`
  border: ${(props) =>
    props.secondary ? "none" : `1px solid ${colours.blue}`};
  width: ${(props) => (props.secondary ? "100%" : "30%")};
  padding: 1rem;
  margin: 3rem 1rem;
  height: 20%;
  background-color: white;
  @media (max-width: ${devices.ipadpro}) {
    width: ${(props) => (props.secondary ? "100%" : "40%")};
  }
  @media (max-width: ${devices.mobile}) {
    width: 90%;
    margin: 1rem auto;
  }
`;

export default Card;
