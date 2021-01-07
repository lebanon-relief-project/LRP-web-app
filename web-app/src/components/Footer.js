import React from "react";
import styled from "styled-components";
import FooterLink from "./FooterLink";
import colours from "../styles/Colours";
import devices from "../styles/Devices";
import Instagram from "../assets/images/Instagram.png";
import Facebook from "../assets/images/Facebook.png";
import Twitter from "../assets/images/Twitter.png";

const Footer = () => {
  return (
    <StyledSection>
      <CardWrapper>
        <FooterLink
          title="Lebanon Relief Network"
          links={["Terms & Conditions", "Privacy policy"]}
        />

        <CircularLinkWrapper>
          <StyledImage src={Instagram} alt="Instagram" />
          <StyledImage src={Facebook} alt="Facebook" />
          <StyledImage src={Twitter} alt="Twitter" />
          <p>hello@lrn.com</p>
        </CircularLinkWrapper>
      </CardWrapper>
    </StyledSection>
  );
};

const StyledImage = styled.img`
  width: 20%;
  height: 40%;
`;

const CircularLinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem 0;
  margin: 2rem 0;
  @media (max-width: ${devices.mobile}) {
    padding: 0;
    margin: 1rem 0;
    order: 1;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledSection = styled.section`
  background: ${colours.grey};
  margin: 0;
  min-height: 5%;
`;

export default Footer;
