import React, { useRef } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import devices from "../styles/Devices";
import Burger from "./Burger";

const MobileNavbar = ({ open, setOpen }) => {
  const node = useRef();
  return (
    <StyledNav open={open}>
      <StyledDiv>
        <LogoImage src={logo} alt="Logo" />
      </StyledDiv>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  @media (min-width: ${devices.mobile}) {
    display: none;
  }

  height: 10vh;
  width: 100%;
  z-index: 2;
`;

const LogoImage = styled.img`
  max-height: 80%;
`;

const StyledDiv = styled.div`
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MobileNavbar;
