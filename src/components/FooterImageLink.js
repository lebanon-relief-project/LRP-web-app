import React from "react";
import styled from "styled-components";

const FooterImageLink = (props) => {
  return (
    <StyledFooterLink>
      <CircularLink></CircularLink>
      <CircularLink></CircularLink>
      <CircularLink></CircularLink>
      <p>{props.text}</p>
    </StyledFooterLink>
  );
};

const StyledFooterLink = styled.div`
  width: 25%;
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
`;

const CircularLink = styled.span`
  height: 2.5rem;
  width: 2.5rem;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin: 0.5rem;
`;

export default FooterImageLink;
