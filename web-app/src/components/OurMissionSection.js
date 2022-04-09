import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";
import colours from "../styles/Colours";

import {
  StyledHeader,
  StyledParagraph,
  PageContainer,
} from "../styles/GlobalStyles";
import Hands from "../assets/images/Hands.svg";

const OurMission = () => {
  return (
    <StyledSection>
      <PageContainer>
        <StyledGridContainer>
          <StyledTextArea>
            <StyledHeader>Our mission</StyledHeader>
            <StyledParagraph>
              Our mission is to support the residents of Lebanon and individuals
              from the Lebanese diaspora who experienced a traumatic event by
              connecting them to professionals, to volunteers and to each other,
              while helping them get the support and care they need. <br />{" "}
              <br /> Our dream is to help build a healthier, more resilient and
              trauma-aware Lebanese community.
            </StyledParagraph>
          </StyledTextArea>
          <StyledHands src={Hands} alt="Hands" />
        </StyledGridContainer>
      </PageContainer>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  background: ${colours.white};
  margin: 0;
  padding: 0rem 3rem 3rem 3rem;
`;

const StyledGridContainer = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 25vw;
  grid-gap: 1rem;

  @media (max-width: ${devices.ipadpro}) {
    grid-template-columns: 1fr;
  }
`;

const StyledTextArea = styled.div``;

const StyledHands = styled.img`
  width: 100%;
  margin: auto;

  @media (max-width: ${devices.ipadpro}) {
    width: 50%;
    min-width: 400px;
  }
`;

export default OurMission;
