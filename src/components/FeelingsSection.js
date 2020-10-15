import React from "react";
import styled from "styled-components";
import colours from "../styles/Colours";

const OurMission = () => {
  return (
    <StyledSection>
      <Wrapper>
        <StyledHeader>Learn more and select the ones that you have experienced</StyledHeader>
        <StyledParagraph>
            Below are flashcards with the most common presentations of traumatic stress.
            Click on those that you have experienced to learn more about your reaction and ways to
            manage.
        </StyledParagraph>
      </Wrapper>
    </StyledSection>
  );
};

const Wrapper = styled.div`
  width: 50%;
  padding: 5rem 1rem;
  margin: 0 12rem;
  background: inherit;
`;

const StyledSection = styled.section`
  background: ${colours.white};
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledHeader = styled.h2`
  font-weight: bold;
  font-size: 20px;
`;

const StyledParagraph = styled.p`
  margin: 0;
  font-size: 14px;
  
`;

export default OurMission;
