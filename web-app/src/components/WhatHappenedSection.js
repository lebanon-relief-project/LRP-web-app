import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";
import Tree from "../assets/images/Tree.svg";
import colours from "../styles/Colours";
import {
  StyledParagraph,
  PageContainer
} from "../styles/GlobalStyles";

const WhatHappened = () => {
  return (
    <StyledSection>
      <PageContainer>
        <StyledGridContainer>
          <StyledTree src={Tree} alt="Tree" />
          <StyledTextArea>
            <StyledTitle>Lebanon Relief Network</StyledTitle>
            <StyledParagraph>
              On August 4th, 2020 a massive explosion shook the port of Beirut
              in Lebanon. 170 people died. Thousands were injured. Even more
              were traumatized.
            </StyledParagraph>
            <br />
            <StyledParagraph>
              Lebanon Relief Network was founded in the aftermath of the
              explosion to improve the lives of people affected by all type of
              trauma.
            </StyledParagraph>
          </StyledTextArea>
        </StyledGridContainer>
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
  padding: 0rem 3rem 3rem 3rem;
`;

const StyledGridContainer = styled.div`
  padding-top: 8rem;
  display: grid;
  grid-template-columns: 25vw 1fr;
  grid-gap: 16px;

  @media (max-width: ${devices.ipadpro}) {
    grid-template-columns: 1fr;
  }  
`;

const StyledTextArea = styled.div`
`;

const StyledTitle = styled.h2`
  display: ${(props) => (props.mobile ? "none" : "block")};
  font-family: Raleway;
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
  color: ${colours.blue};
`;


const StyledTree = styled.img`
  max-width: 90%;
  margin: auto;

  @media (max-width: ${devices.ipadpro}) {
    
    width: 50%;
    min-width: 400px;
  }
`;

export default WhatHappened;
