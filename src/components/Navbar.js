import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { Routes } from "../App.js";
import colours from "../styles/Colours";

const Navbar = () => {
  return (
    <StyledNav>
      <StyledDiv>
        <LogoImage src={logo} alt="Logo" />
      </StyledDiv>

      <StyledUl>
        <StyledLi>
          <StyledLink to={Routes.HOME}>Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={Routes.HOME}>I’m looking for help</StyledLink>
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
  display: flex;
`;

const LogoImage = styled.img`
  width: 20%;
  height: auto;
`;

const StyledDiv = styled.div`
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledUl = styled.ul`
  display: flex;
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
`;

export default Navbar;
