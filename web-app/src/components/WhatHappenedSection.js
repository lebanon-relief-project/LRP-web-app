import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";
import Tree from "../assets/images/Tree.svg";
import colours from "../styles/Colours";
import {
  StyledHeader,
  StyledParagraph,
  FlexContainer,
} from "../styles/GlobalStyles";

const WhatHappened = () => {
  return (
    <StyledSection padded grey>
      <PageContainer>
        <StyledFlexContainer>
          <StyledTree src={Tree} alt="Tree" />
          <StyledTextArea>
            <StyledHeader>What happened</StyledHeader>
            <StyledParagraph>
              On August 4th, 2020 a massive explosion shook the port of Beirut
              in Lebanon. 170 people died. Thousands were injured. Even more
              were traumatized. <br /> <br /> Lebanon Relief Network was founded
              in the aftermath of the explosion to improve the lives of people
              affected by all types of trauma.
            </StyledParagraph>
          </StyledTextArea>
        </StyledFlexContainer>
      </PageContainer>
    </StyledSection>
  );
};

// The width, margin-left and transform fields are to allow the background colour to escape the
// page max-width of 1440px
const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  background: ${colours.lightGrey};
  margin: 0;
  padding: 0 3rem;
  width: calc(100vw - 20px);
  margin-left: 50%;
  transform: translateX(-50%);
`;

const PageContainer = styled.div`
  max-width: 1440px;
`;

const StyledTextArea = styled.div`
  position: relative;
  width: 50%;
  margin: 2%;
  @media (max-width: ${devices.ipad}) {
    right: 10%;
  }
  @media (max-width: ${devices.mobile}) {
    right: 0;
    width: 100%;
  }
`;

const StyledFlexContainer = styled(FlexContainer)`
  padding-top: 7rem;
  @media (max-width: ${devices.ipad}) {
    padding-top: 3rem;
  }
  @media (max-width: ${devices.mobile}) {
    padding-top: 0;
  }
`;

const StyledTree = styled.img`
  object-fit: contain;
  margin: 2%;
  @media (max-width: ${devices.ipad}) {
    width: 80%;
  }
  @media (max-width: ${devices.mobile}) {
    width: 100%;
    max-width: 100%;
    padding-left: 0rem;
  }
`;

export default WhatHappened;
