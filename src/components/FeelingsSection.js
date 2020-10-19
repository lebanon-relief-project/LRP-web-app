import React from "react";
import styled from "styled-components";
import colours from "../styles/Colours";

const OurMission = () => {
  return (
    <StyledSection>
      <Wrapper>
        <StyledHeader>Learn more about trauma</StyledHeader>
        <TextWrapper>
          <StyledParagraph>
            Below are flashcards with the most common presentations of traumatic
            stress.
          </StyledParagraph>
          <StyledParagraph>
            Click on those that you have experienced to learn more about your
            reaction and ways to manage, then select the ones that apply.
          </StyledParagraph>
        </TextWrapper>
      </Wrapper>
    </StyledSection>
  );
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 1rem;
  width: 50%;
`;

const Wrapper = styled.div`
  width: 50%;
  padding-top: 2rem;
  padding-bottom: 2rem;
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
  font-size: 24px;
`;

const StyledParagraph = styled.p`
  margin: 0;
  font-size: 16px;
`;

export default OurMission;
