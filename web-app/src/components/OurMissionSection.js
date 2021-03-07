import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";

import {
  StyledHeader,
  StyledParagraph,
  StyledSection,
  FlexContainer,
} from "../styles/GlobalStyles";
import Hands from "../assets/images/Hands.png";
import Swirl from "../assets/images/Swirl.png";

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
      <StyledSwirl src={Swirl} alt="Swirl" />
    </StyledSection>
  );
};

const StyledTextArea = styled.div`
  position: relative;
  margin-top: 2%;
  left: 12%;
  width: 50%;
  @media (max-width: ${devices.mobile}) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    order: 2;
  }
`;

const StyledHands = styled.img`
  object-fit: contain;
  position: relative;
  width: auto;
  max-wodth: 100%;
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

const StyledSwirl = styled.img`
  margin: 40px 0;
  @media (min-width: ${devices.mobile}) {
    display: none;
  }
`;

export default OurMission;
