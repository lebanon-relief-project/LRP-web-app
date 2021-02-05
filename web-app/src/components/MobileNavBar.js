import React, { useRef } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import devices from "../styles/Devices";
import Burger from "./Burger";
import { Routes } from "../App.js";
import { NavLink } from "react-router-dom";

const MobileNavbar = ({ open, setOpen }) => {
  const node = useRef();
  return (
    <StyledNav open={open}>
      <LogoLink exact to={Routes.HOME}>
        <LogoImage src={logo} alt="Logo" />
      </LogoLink>
      <BurgerWrapper ref={node}>
        <Burger open={open} setOpen={setOpen} />
      </BurgerWrapper>
    </StyledNav>
  );
};

const BurgerWrapper = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
`;

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  @media (min-width: ${devices.mobile}) {
    display: none;
  }

  height: 64px;
  max-height: 64px;
  width: 100%;
  z-index: 100;
`;

const LogoImage = styled.img`
  max-height: 80%;
`;

const LogoLink = styled(NavLink)`
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MobileNavbar;
