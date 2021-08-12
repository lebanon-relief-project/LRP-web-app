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

      <br />
      {props.externalPath ? (
        <StyledAnchor
          href={props.externalPath}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonText}
        </StyledAnchor>
      ) : (
        <StyledLink {...rest} to={path}>
          {buttonText}
        </StyledLink>
      )}
    </StyledCard>
  );
};

const StyledAnchor = styled.a`
  position: ${(props) => (props.secondary ? "static" : "absolute")};
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(${(props) => (props.secondary ? "0" : "-50%")});
  background-color: ${(props) =>
    props.disabled ? `${colours.grey}` : `${colours.yellow}`};
  color: black;
  font-style: normal;
  font-weight: bold;
  padding: 0.5rem;
  justify-content: center;
  display: flex;
  width: ${(props) => (props.secondary ? "30%" : "90%")};
  @media (max-width: ${devices.mobile}) {
    width: ${(props) => (props.secondary ? "50%" : "90%")};
  }
  margin-bottom: 5%;
`;

const StyledLink = styled(Link)`
  position: ${(props) => (props.secondary ? "static" : "absolute")};
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(${(props) => (props.secondary ? "0" : "-50%")});
  background-color: ${(props) =>
    props.disabled ? `${colours.grey}` : `${colours.yellow}`};
  color: black;
  font-style: normal;
  font-weight: bold;
  justify-content: center;
  display: flex;
  text-align: center;
  min-width: ${(props) => (props.secondary ? "25%" : "90%")};
  width: 50%;
  @media (max-width: ${devices.mobile}) {
    width: ${(props) => (props.secondary ? "50%" : "90%")};
    max-width: ${(props) => (props.secondary ? "100%" : "90%")};
  }
  margin-bottom: 5%;
  padding: 0.5rem;
`;

const CardTitle = styled.legend`
  font-family: Playfair Display;
  font-weight: ${(props) => (props.secondary ? 900 : "bold")};
  font-size: ${(props) => (props.secondary ? "38px" : "24px")};
  min-width: auto;
  line-height: 100%;
  padding: ${(props) => (props.secondary ? "0" : "0 0.5rem")};
  text-align: ${(props) => (props.secondary ? "left" : "center")};
  margin-bottom: 0;
  @media (max-width: ${devices.mobile}) {
    font-size: 30px;
    line-height: 38px;
  }
`;

const StyledCard = styled.fieldset`
  position: relative;
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
  min-width: 360px;

  @media (max-width: ${devices.ipadpro}) {
    width: ${(props) => (props.secondary ? "100%" : "40%")};
    min-width: 0;
  }
  @media (max-width: ${devices.ipad}) {
    margin: ${(props) => (props.secondary ? "3rem 0" : "3rem 1rem")};
  }
  @media (max-width: ${devices.mobile}) {
    width: 90%;
    margin: 1rem auto;
  }
`;

export default Card;
