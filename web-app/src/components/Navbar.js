import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { Routes } from "../App.js";
import colours from "../styles/Colours";
import devices from "../styles/Devices";

const Navbar = ({ open }) => {
  return (
    <StyledNav open={open}>
      <StyledDiv>
        <LogoImage src={logo} alt="Logo" />
      </StyledDiv>

      <StyledUl>
        <StyledLi>
          <StyledLink to={Routes.HOME}>Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={Routes.HELP}>I’m looking for help</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={Routes.HOME}>I’d like to help</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={Routes.ABOUT}>About us</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  min-width: 100%;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  z-index: 2;

  @media (max-width: ${devices.mobile}) {
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${colours.white};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 100%;
    padding: 2rem;
    position: fixed;
    transition: transform 0.3s ease-in-out;

    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      text-decoration: none;
      transition: color 0.3s linear;
    }
  }
`;

const LogoImage = styled.img`
  width: 20%;
  height: 90%;
`;

const StyledDiv = styled.div`
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledUl = styled.ul`
  display: flex;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
  }
  list-style-type: none;
  margin: 0;
  padding: 0;
  min-width: 50%;
`;

const StyledLi = styled.li`
  padding: 1rem;
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: ${colours.black};
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
`;

export default Navbar;
