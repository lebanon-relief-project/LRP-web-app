import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/images/logo.svg";
import { Routes } from "../App.js";
import colours from "../styles/Colours";
import devices from "../styles/Devices";
import LikeToHelpModal from "./LikeToHelpModal";

const Navbar = ({ open }) => {
  const [likeToHelpModalVisible, setLikeToHelpModalVisible] = useState(false);
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
            <StyledButton
              exact
              to={"#"}
              onClick={() => setLikeToHelpModalVisible(true)}
              data-testid={"id-like-to-help"}
            >
              I’d like to help
            </StyledButton>
          </StyledLi>
        </StyledUl>
      </StyledNav>
      {likeToHelpModalVisible && (
        <LikeToHelpModal
          closeModal={() => {
            setLikeToHelpModalVisible(false);
          }}
        />
      )}
    </>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  min-width: 100%;
  max-height: 64px;
  height: 64px;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  z-index: 100;
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
    padding: 2rem;
    position: fixed;
    transition: transform 0.3s ease-in-out;

    a {
      font-family: Playfair Display;
      font-size: 30px;
      font-style: normal;
      font-weight: normal;
      line-height: 38px;
      letter-spacing: 0em;
      text-align: left;
      letter-spacing: 0.5rem;
      text-decoration: none;
      transition: color 0.3s linear;
    }
  }
`;

const LogoImage = styled.img`
  width: 20%;
  height: 90%;
  @media (max-width: ${devices.mobile}) {
    display: none;
  }
`;

const LogoLink = styled(NavLink)`
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledUl = styled.ul`
  display: flex;
  @media (max-width: ${devices.mobile}) {
    margin-top: 104px;
    flex-direction: column;
  }
  list-style-type: none;
  margin: 0;
  padding: 0;
  min-width: 40%;
`;

const StyledLi = styled.li`
  max-width: 100%;
  min-width: 50%;
  @media (max-width: ${devices.mobile}) {
    margin-bottom: 60px;
  }

  @media (max-width: ${devices.ipad}) {
    padding: 0 0.5rem;
  }
`;

const StyledButton = styled(NavLink)`
  border: none;
  background: none;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
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
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
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
  }
`;

export default Navbar;
