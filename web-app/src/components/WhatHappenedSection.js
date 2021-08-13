import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";
import Tree from "../assets/images/Tree.svg";
import colours from "../styles/Colours";
import { StyledParagraph, FlexContainer } from "../styles/GlobalStyles";

const WhatHappened = () => {
  return (
    <StyledSection padded grey>
      <PageContainer>
        <StyledFlexContainer>
          <StyledTree src={Tree} alt="Tree" />
          <StyledTextArea>
            <Title>Lebanon Relief Network</Title>
            <StyledParagraph>
              Lebanon’s troubled history has contributed to a growing mental
              health crisis in the country. 70% of Lebanon’s residents and
              diaspora community have experienced symptoms of trauma, at some
              point in their life. <br /> <br /> Lebanon Relief Network provides
              a safe space for trauma-related dialogue, and offers tools and
              resources to improve the lives of people affected by all types of
              trauma – big or small.
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
  padding: 0 3rem;
  width: calc(100vw);
  margin: 20px 0 0 50%;
  transform: translateX(-50%);
`;

const Title = styled.h2`
  font-family: Raleway;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px;
  color: ${colours.blue};
`;

const PageContainer = styled.div`
  max-width: 1440px;
`;

const StyledTextArea = styled.div`
  position: relative;
  width: 50%;
  margin: 2%;
  @media (max-width: ${devices.mobile}) {
    width: 100%;
  }
`;

const StyledFlexContainer = styled(FlexContainer)`
  padding-top: 7rem;
  @media (max-width: ${devices.ipad}) {
    padding-top: 3rem;
  }
  @media (max-width: ${devices.mobile}) {
    padding-top: 25%;
  }
`;

const StyledTree = styled.img`
  object-fit: contain;
  margin: 2%;
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
