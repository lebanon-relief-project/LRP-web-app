import React from "react";
import styled from "styled-components";

import colours from "../styles/Colours";
import devices from "../styles/Devices";

export const PrivacyPage = () => {
  return (
    <>
      <StyledPage>
        <StyledSection>
          <CentralContentWrapper>
            <StyledHeader>Privacy Policy</StyledHeader>

            <TextWrapper>
              <StyledParagraph>Last updated Febuary 2021</StyledParagraph>
            </TextWrapper>
          </CentralContentWrapper>
        </StyledSection>
      </StyledPage>
    </>
  );
};

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSection = styled.div`
  display: flex;
  background: ${colours.darkBlue};
  margin: 0;
  margin-top: 64px;
  padding: 0;
  width: 100%;
  height: 166px;
  z-index: 0;

  @media (max-width: ${devices.mobile}) {
    height: 482px;
  }
`;

const CentralContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-left: 16.7%;
  margin-top: 41px;
  max-width: 632px;

  @media (max-width: ${devices.mobile}) {
    margin-left: 18px;
    margin-right: 18px;
    flex: 1;
    margin-top: 20px;
  }
`;

const StyledHeader = styled.h2`
  font-weight: bold;
  font-size: 38px;
  margin: 0;
  color: ${colours.white};
  @media (max-width: ${devices.mobile}) {
    font-size: 30px;
    line-height: 38px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: ${devices.mobile}) {
    margin-top: 15px;
  }
`;

const StyledParagraph = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 16px;
  color: ${colours.white};
`;

export default PrivacyPage;
