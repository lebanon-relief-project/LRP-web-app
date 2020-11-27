import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";
import City from "../assets/images/City.png";
import {
  ResponsiveStyledHeader,
  StyledParagraph,
  StyledSection,
  StyledTextArea,
  ReversableFlexContainer,
  FlexContainer,
} from "../styles/GlobalStyles";

const WhatHappened = () => {
  return (
    <StyledSection padded>
      <FlexContainer>
        <ReversableFlexContainer>
          <StyledCity src={City} alt="City" />
          <ResponsiveStyledHeader mobile>What happened</ResponsiveStyledHeader>
        </ReversableFlexContainer>
        <StyledTextArea>
          <ResponsiveStyledHeader>What happened</ResponsiveStyledHeader>
          <StyledParagraph>
            On August 4 an explosion shook Beirut. It was the largest
            non-nuclear explosion ever recorded. That day 200 people died, 6,500
            were injured, and 300,000 were left homeless. This project was
            developed to support those affected and provide a platform for the
            community to come together and help each other heal.
          </StyledParagraph>
        </StyledTextArea>
      </FlexContainer>
    </StyledSection>
  );
};

const StyledCity = styled.img`
  @media (max-width: ${devices.mobile}) {
    width: 50%;
    max-width: 100%;
    padding-left: 0rem;
  }
`;

export default WhatHappened;
