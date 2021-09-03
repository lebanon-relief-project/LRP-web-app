import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { Routes } from "../App.js";
import colours from "../styles/Colours";
import devices from "../styles/Devices";

const Navbar = ({ open }) => {
  return (
    <>
      <StyledNav open={open}>
        <LogoLink exact to={Routes.HOME}>
          <LogoImage src={logo} alt="Logo" />
        </LogoLink>

        <StyledUl>
          <StyledLi>
            <StyledLink exact to={Routes.HOME}>
              Home
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink exact to={Routes.HELP}>
              I’m looking for help
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink exact to={Routes.ABOUT}>
              About us
            </StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  min-width: 100%;
  height: 80px;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  z-index: 100;
  justify-content: center;
  @media (max-width: ${devices.ipad}) {
    padding: 1rem 0;
  }
  @media (max-width: ${devices.mobile}) {
    width: 100%;
    max-height: 100%;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: ${colours.white};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 100%;
    position: fixed;
    transition: transform 0.3s ease-in-out;

    a {
      font-family: Playfair Display;
      font-size: 30px;
      font-style: normal;
      font-weight: normal;
      line-height: 38px;
      text-align: left;
      text-decoration: none;
      transition: color 0.3s linear;
    }
  }
`;

const LogoImage = styled.img`
  height: 90%;
  max-height: 68px;
  @media (max-width: ${devices.mobile}) {
    display: none;
  }
`;

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledUl = styled.ul`
  display: flex;
  @media (max-width: ${devices.mobile}) {
    margin-top: 104px;
    margin-left: 20px;
    flex-direction: column;
  }
  list-style-type: none;
  padding: 0;
  margin-left: auto;
  margin-right: 0;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const StyledLi = styled.li`

  text-align: center;

  @media (max-width: ${devices.mobile}) {
    margin-bottom: 60px;
    text-align: left;
    width: 100%;
  }

  @media (max-width: ${devices.ipad}) {
    padding: 0 0.5rem;
  }
`;

const StyledButton = styled(NavLink)`
  border: none;
  background: none;
  margin: 0;

  transform: translateY(-50%);
  color: ${colours.black};
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  @media (max-width: ${devices.ipad}) {
    font-size: 12px;
    line-height: 11px;
  }
  @media (max-width: ${devices.mobile}) {
    color: ${(props) => (props.disabled ? `${colours.grey}` : `#002766`)};
    position: relative;
    top: 0;
  }
`;

const StyledLink = styled(NavLink)`
  margin: 0;

  color: ${colours.black};
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  &.active {
    font-weight: bold;
    border-bottom: 2px solid ${colours.yellow};
  }
  @media (max-width: ${devices.ipad}) {
    font-size: 12px;
    line-height: 11px;
  }
  @media (max-width: ${devices.mobile}) {
    color: ${(props) => (props.disabled ? `${colours.grey}` : `#002766`)};
    position: relative;
    top: 0;
    &.active {
      font-weight: bold;
    }
    margin-left: 0px;
  }

  margin: 20px;
`;

const StyledNavContentWrapper = styled.div`
  width: calc(100vw - 20px);
  max-width: 960px;
  display: flex;
  min-width: ${devices.mobile};
`

export default Navbar;
