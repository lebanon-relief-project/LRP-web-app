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
        </StyledFlexContainer>
      </PageContainer>
    </StyledSection>
  );
};

const StyledTitle = styled.h2`
  display: ${(props) => (props.mobile ? "none" : "block")};
  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  color: ${colours.blue};
`;

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
  max-width: 960px;
`;

const StyledTextArea = styled.div`
  position: relative;
  min-width: 70%;
  right: 150px;

  @media (max-width: ${devices.ipad}) {
    right: 10%;
  }
  margin: 2%;
  @media (max-width: ${devices.mobile}) {
    width: 100%;
  }
`;

const StyledFlexContainer = styled(FlexContainer)`
  padding-top: 7rem;
  justify-content: space-between;
  @media (max-width: ${devices.ipad}) {
    padding-top: 3rem;
  }
  @media (max-width: ${devices.mobile}) {
    padding-top: 25%;
  }
`;

const StyledTree = styled.img`
  object-fit: contain;
  position: relative;
  right: 150px;
  @media (max-width: ${devices.ipad}) {
    width: 50%;
  }
  @media (max-width: ${devices.mobile}) {
    width: 100%;
    max-width: 100%;
    padding-left: 0rem;
  }
`;

export default WhatHappened;
