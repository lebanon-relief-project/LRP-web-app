import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import devices from "../styles/Devices";
import colours from "../styles/Colours";

const Card = (props) => {
  const { children, title, path, buttonText, ...rest } = props;
  return (
    <StyledCard {...rest}>
      <CardTitle {...rest}>{title}</CardTitle>
      {children}
      <StyledLink {...rest} to={path}>
        {buttonText}
      </StyledLink>
    </StyledCard>
  );
};

const StyledLink = styled(Link)`
  background-color: ${(props) =>
    props.disabled ? `${colours.grey}` : `${colours.yellow}`};
  color: black;
  font-style: normal;
  font-weight: bold;
  padding: 0.5rem;
  justify-content: center;
  display: flex;
  width: ${(props) => (props.secondary ? "30%" : "100%")};
  @media (max-width: ${devices.mobile}) {
    width: ${(props) => (props.secondary ? "50%" : "100%")};
  }
`;

const CardTitle = styled.legend`
  font-family: Playfair Display;
  font-weight: ${(props) => (props.secondary ? 900 : "bold")};
  font-size: ${(props) => (props.secondary ? "38px" : "24px")};
  width: auto;
  padding: ${(props) => (props.secondary ? "0" : "0 0.5rem")};
  text-align: ${(props) => (props.secondary ? "left" : "center")};
  margin-bottom: 0;
  @media (max-width: ${devices.mobile}) {
    font-size: 30px;
    line-height: 38px;
  }
`;

const StyledCard = styled.fieldset`
  border: ${(props) =>
    props.secondary ? "none" : `1px solid ${colours.blue}`};
  width: ${(props) => (props.secondary ? "100%" : "25%")};
  padding: ${(props) => (props.secondary ? "1rem 0" : "1rem 1.2rem")};
  margin: 3rem 1rem;
  height: 20%;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

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
