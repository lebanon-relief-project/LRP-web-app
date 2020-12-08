import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";

const FooterLink = (props) => {
  const links = props.links.map((link, index) => (
    <StyledListLink key={index}>{link}</StyledListLink>
  ));
  return (
    <StyledFooterLink>
      <FooterLinkTitle>{props.title}</FooterLinkTitle>
      <StyledList>{links}</StyledList>
    </StyledFooterLink>
  );
};

const FooterLinkTitle = styled.h2`
  font-weight: bold;
`;

const StyledFooterLink = styled.div`
  padding: 1rem;
  margin: 2rem 0;
  @media (max-width: ${devices.mobile}) {
    width: 75%;
    padding: 0;
    margin: 0;
    order: 2;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledListLink = styled.li`
  text-decoration-line: underline;
`;

export default FooterLink;
