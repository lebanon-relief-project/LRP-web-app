import React from "react";
import styled from "styled-components";
import FooterLink from "./FooterLink";
import colours from "../styles/Colours";
import devices from "../styles/Devices";

const Footer = () => {
  return (
    <StyledSection>
      <CardWrapper>
        <FooterLink
          title="Lebanon Relief Network"
          links={["Terms & Conditions", "Privacy policy"]}
        />
        <FooterLink title="About us" links={["What we do", "Contact us"]} />
        <FooterLink
          title="Partnerships"
          links={["How to partner with us", "Working with us"]}
        />
        <CircularLinkWrapper>
          <CircularLink />
          <CircularLink />
          <CircularLink />
        </CircularLinkWrapper>
      </CardWrapper>
    </StyledSection>
  );
};

const CircularLink = styled.span`
  height: 2.5rem;
  width: 2.5rem;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin: 0.5rem;
`;

const CircularLinkWrapper = styled.div`
  display: flex;
  padding: 1rem;
  margin: 2rem 0;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

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
