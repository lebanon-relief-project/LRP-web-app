import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";

import {
  StyledHeader,
  StyledParagraph,
  StyledSection,
  FlexContainer,
} from "../styles/GlobalStyles";
import Hands from "../assets/images/Hands.svg";

const OurMission = () => {
  return (
    <StyledSection>
      <FlexContainer>
        <StyledTextArea>
          <StyledHeader>Our mission</StyledHeader>
          <StyledParagraph>
            Our mission is to support the residents of Lebanon and individuals
            from the Lebanese diaspora who experienced a traumatic event by
            connecting them to professionals, to volunteers and to each other,
            while helping them get the support and care they need. <br /> <br />{" "}
            Our dream is to help build a healthier, more resilient and
            trauma-aware Lebanese community.
          </StyledParagraph>
        </StyledTextArea>
        <StyledHands src={Hands} alt="Hands" />
      </FlexContainer>
    </StyledSection>
  );
};

const StyledTextArea = styled.div`
  position: relative;
  margin: 2%;
  left: 12%;
  width: 50%;
  @media (max-width: ${devices.mobile}) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    order: 2;
    margin-bottom: 5%;
  }
`;

const StyledHands = styled.img`
  object-fit: contain;
  position: relative;
  width: auto;
  max-width: 100%;
  margin-top: 10%;
  @media (max-width: ${devices.ipadpro}) {
    top: 10%;
  }

  @media (max-width: ${devices.ipad}) {
    width: 60%;
  }
  @media (max-width: ${devices.mobile}) {
    margin-right: 0rem;
    max-width: 100%;
    width: 100%;
    padding-left: 0rem;
  }
`;

export default OurMission;
