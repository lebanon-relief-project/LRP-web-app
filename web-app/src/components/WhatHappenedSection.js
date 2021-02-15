import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";
import City from "../assets/images/City.png";
import {
  StyledHeader,
  StyledParagraph,
  StyledSection,
  FlexContainer,
} from "../styles/GlobalStyles";

const WhatHappened = () => {
  return (
    <StyledSection padded>
      <StyledFlexContainer>
        <StyledCity src={City} alt="City" />
        <StyledTextArea>
          <StyledHeader>What happened</StyledHeader>
          <StyledParagraph>
            On August 4th, 2020 a massive explosion shook the port of Beirut in
            Lebanon. 170 people died. Thousands were injured. Even more were
            traumatized. <br /> <br /> Lebanon Relief Network was founded in the
            aftermath of the explosion to improve the lives of people affected
            by all type of trauma.
          </StyledParagraph>
        </StyledTextArea>
      </StyledFlexContainer>
    </StyledSection>
  );
};

const StyledTextArea = styled.div`
  position: relative;
  margin-top: 12%;
  right: 10%;
  width: 40%;
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

const StyledCity = styled.img`
  object-fit: contain;

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
