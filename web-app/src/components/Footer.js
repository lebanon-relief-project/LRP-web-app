import React from "react";
import styled from "styled-components";
import FooterLink from "./FooterLink";
import colours from "../styles/Colours";
import devices from "../styles/Devices";
import Instagram from "../assets/images/Instagram.svg";
import Facebook from "../assets/images/Facebook.svg";
import Twitter from "../assets/images/Twitter.svg";

const Footer = () => {
  return (
    <StyledSection>
      <CardWrapper>
        <FooterLink
          title="Lebanon Relief Network"
          links={["Terms & Conditions", "Privacy policy"]}
        />

        <CircularLinkWrapper>
          <StyledAnchor
            href="https://www.instagram.com/lebanonreliefnetwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage src={Instagram} alt="Instagram" />
          </StyledAnchor>
          <StyledAnchor
            href="https://www.facebook.com/Lebanonreliefnetwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage src={Facebook} alt="Facebook" />
          </StyledAnchor>
          <StyledAnchor
            href="https://twitter.com/LebReliefNet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage src={Twitter} alt="Twitter" />
          </StyledAnchor>
          <p>contact@lebanonreliefnetwork.org</p>
        </CircularLinkWrapper>
      </CardWrapper>
    </StyledSection>
  );
};

const StyledAnchor = styled.a`
  margin: 5%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const CircularLinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem 0;
  margin: 2rem;
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
