import React from "react";
import styled from "styled-components";
import FooterLink from "./FooterLink";
import colours from "../styles/Colours";
import devices from "../styles/Devices";
import Instagram from "../assets/images/Instagram.svg";
import Facebook from "../assets/images/Facebook.svg";
import Twitter from "../assets/images/Twitter.svg";
var platform = require("platform");

const Footer = () => {
  return (
    <StyledSection>
      <CardWrapper>
        <FooterLink
          title="Lebanon Relief Network"
          links={[
            { title: "Terms of Use", href: "/terms" },
            { title: "Privacy policy", href: "/privacy" },
          ]}
        />

        <CircularLinkWrapper>
          <StyledAnchor
            href="https://www.instagram.com/lebanonreliefnetwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage src={Instagram} alt="Instagram" />
          </StyledAnchor>
          <FBAnchor />
          <StyledAnchor
            href="https://twitter.com/LebReliefNet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage src={Twitter} alt="Twitter" />
          </StyledAnchor>
          <Email href="mailto:contact@lebanonreliefnetwork.org" target="_blank">
            contact@lebanonreliefnetwork.org
          </Email>
        </CircularLinkWrapper>
      </CardWrapper>
    </StyledSection>
  );
};

const FBAnchor = () => {
  const os = platform.os.toString();
  const isAndroid = os.match(/android/i);
  const isIOS = os.match(/iOS/i);
  if (isIOS) {
    return (
      <StyledAnchor
        href="fb://page/?id=100368885336321"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledImage src={Facebook} alt="Facebook" />
      </StyledAnchor>
    );
  } else if (isAndroid) {
    return (
      <StyledAnchor
        href="intent://page/100368885336321?referrer=app_link#Intent;package=com.facebook.katana;scheme=fb;end"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledImage src={Facebook} alt="Facebook" />
      </StyledAnchor>
    );
  } else {
    return (
      <StyledAnchor
        href="https://www.facebook.com/Lebanonreliefnetwork"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledImage src={Facebook} alt="Facebook" />
      </StyledAnchor>
    );
  }
};

const Email = styled.a`
  color: ${colours.black};
`;

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
