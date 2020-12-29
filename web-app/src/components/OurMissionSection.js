import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";

import {
  ResponsiveStyledHeader,
  StyledParagraph,
  StyledSection,
  ReversableFlexContainer,
  FlexContainer,
} from "../styles/GlobalStyles";
import Hands from "../assets/images/Hands.png";

const OurMission = () => {
  return (
    <StyledSection>
      <FlexContainer>
        <OrderedStyledTextArea>
          <ResponsiveStyledHeader>Our mission</ResponsiveStyledHeader>
          <StyledParagraph>
            <span>
              Our mission is to help the residents of Lebanon and individuals
              from the Lebanese diaspora who experienced a traumatic event
              regardless of their political and religious affiliations by
              connecting them to volunteers, to professionals and to each other
              while suggesting tools that can help them get the support and care
              they need.
            </span>
            <br /> <br />
            <span>
              Through our platform, we aim to create a healthier, more
              trauma-informed and resilient Lebanon where those who need help
              can access self-help solutions and connect with professionals and
              available support systems.
            </span>
          </StyledParagraph>
        </OrderedStyledTextArea>
        <ReversableFlexContainer reverse>
          <ResponsiveStyledHeader mobile isLeft>
            Our Mission
          </ResponsiveStyledHeader>
          <StyledHands src={Hands} alt="Hands" />
        </ReversableFlexContainer>
      </FlexContainer>
    </StyledSection>
  );
};

const OrderedStyledTextArea = styled.div`
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
  right: 10%;

  @media (max-width: ${devices.ipad}) {
    width: 80%;
    right: 0;
  }
  @media (max-width: ${devices.mobile}) {
    margin-right: 0rem;
    max-width: 100%;
    width: 50%;
    padding-left: 0rem;
  }
`;

export default OurMission;
