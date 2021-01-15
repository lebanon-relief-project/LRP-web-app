import React from "react";
import styled from "styled-components";
import colours from "../../styles/Colours";
import devices from "../../styles/Devices";
import ResultsPageLeftBackground from "../../assets/images/background/ResultsPageLeftBackground.svg";
import ResultsPageRightBackground from "../../assets/images/background/ResultsPageRightBackground.svg";
import ResultsPagePeopleIcons from "../../assets/images/background/ResultsPagePeopleIcons.svg";
import ResultsPageStatistics from "../../assets/images/background/ResultsPageStatistics.svg";

const ExperiencesSection = () => {
  return (
    <StyledSection>
      <HeaderWrapper>
        <HeaderLeftImageWrapper>
          <img src={ResultsPageLeftBackground} alt={"background"} />
        </HeaderLeftImageWrapper>

        <HeaderRightImageWrapper>
          <img src={ResultsPageRightBackground} alt={"background"} />
        </HeaderRightImageWrapper>
      </HeaderWrapper>

      <CentralWrapper>
        <CentralContentWrapper>
          <StyledHeader>From the experiences you've shared...</StyledHeader>
          <TextWrapper>
            <StyledParagraph>
              We have pulled together some tailored advice and exercises to help
              you cope with trauma and how you are feeling.
            </StyledParagraph>
            <StyledParagraph>
              <img src={ResultsPagePeopleIcons} alt={"76%"} />
            </StyledParagraph>
            <StyledParagraph>
              <img src={ResultsPageStatistics} alt={"people"} />
            </StyledParagraph>
          </TextWrapper>
        </CentralContentWrapper>
      </CentralWrapper>
    </StyledSection>
  );
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const CentralWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 2;
  background-color: transparent;
  justify-content: center;
  position: absolute;
  align-items: flex-start;
  height: 363px;
  width: 100%;

  @media (max-width: ${devices.mobile}) {
    margin-top: 20px;
    height: 371px;
  }
`;

const CentralContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-left: 16.7%;
  max-width: 765px;

  @media (max-width: ${devices.mobile}) {
    margin-left: 18px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex: 1;
  z-index: 1;
  justify-content: space-between;
`;

const HeaderLeftImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${devices.ipadpro}) {
    display: none;
  }
`;

const HeaderRightImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${devices.ipadpro}) {
    display: none;
  }
`;

const StyledSection = styled.div`
  display: flex;
  background: ${colours.darkBlue};
  margin: 0;
  margin-top: 64px;
  padding: 0;
  width: 100%;
  height: 363px;
  z-index: 0;

  @media (max-width: ${devices.mobile}) {
    height: 416px;
  }
`;

const StyledHeader = styled.h2`
  font-weight: bold;
  font-size: 38px;
  margin: 0;
  width: inherit;
  color: ${colours.white};
`;

const StyledParagraph = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 16px;
  color: ${colours.white};
`;

export default ExperiencesSection;
