import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import devices from "../styles/Devices";
import colours from "../styles/Colours";

const Card = (props) => {
  return (
    <StyledCard>
      <CardTitle>{props.title}</CardTitle>
      <p>{props.text}</p>
      <StyledLink to={props.path}>Learn More</StyledLink>
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
  font-weight: bold;
  width: auto;
  padding 0 0.5rem;
`;

const StyledCard = styled.fieldset`
  border: 1px solid ${colours.blue};
  width: 25%;
  padding: 1rem;
  margin: 3rem 1rem;
  height: 20%;
  @media (max-width: ${devices.mobile}) {
    width: 90%;
    margin: 1rem auto;
  }
`;

export default Card;
