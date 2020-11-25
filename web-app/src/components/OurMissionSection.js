import React from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import devices from "../styles/Devices";
import { ReactComponent as Illustration2 } from "../assets/images/Illustration2.svg";

const OurMission = () => {
  return (
    <StyledSection>
      <Wrapper>
        <FlexContainer>
          <StyledTextArea>
            <StyledHeader>Our mission</StyledHeader>
            <StyledParagraph>
              Our mission is to help the residents of Lebanon and individuals 
              from the Lebanese diaspora who experienced a traumatic event regardless 
              of their political and religious affiliations by connecting them to volunteers, 
              to professionals and to each other while suggesting tools that can help them get 
              the support and care they need. Through our platform, we aim to create a healthier, 
              more trauma-informed and resilient Lebanon where those who need help can access 
              self-help solutions and connect with professionals and available support systems..
            </StyledParagraph>
          </StyledTextArea>
          <div>
            <StyledIllustration />
          </div>
        </FlexContainer>
      </Wrapper>
    </StyledSection>
  );
};

const StyledTextArea = styled.div`
  max-width: 40rem;   
  @media (max-width: ${devices.mobile}) {
    order: 2;
   max-width: 100%;
  }

`;

const StyledIllustration = styled(Illustration2)`
  margin-right: 20rem;
  @media (max-width: ${devices.mobile}) {
    margin-right: 0rem;
    max-width: 100%;
    order: 1;
  }
`;

const Wrapper = styled.div`
  background: inherit;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 23rem;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
    padding-left: 0rem;
  }
`;

const StyledSection = styled.section`
  background: ${colours.white};
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledHeader = styled.h2`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  color: ${colours.black};
`;

const StyledParagraph = styled.p`
  margin: 0;
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${colours.black};
`;

export default OurMission;
