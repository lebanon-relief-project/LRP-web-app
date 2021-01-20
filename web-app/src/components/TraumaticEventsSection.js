import React from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import devices from "../styles/Devices";
import HelpPageLeftBackground from "../assets/images/background/HelpPageLeftBackground.svg"
import HelpPageRightBackground from "../assets/images/background/HelpPageRightBackground.svg"

const TraumaticEvents = () => {
  return (
    <StyledSection>
      <HeaderWrapper>
        <HeaderLeftImageWrapper>
          <img src={HelpPageLeftBackground} alt={"background"}/>
        </HeaderLeftImageWrapper>
        
        <HeaderRightImageWrapper>
          <img src={HelpPageRightBackground} alt={"background"}/>
        </HeaderRightImageWrapper>
      </HeaderWrapper>

      <CentralWrapper>
        <CentralContentWrapper>
          <StyledHeader>Traumatic Events</StyledHeader>
          <TextWrapper>
              <StyledParagraph>
                The explosion is a traumatic event. It affected those that were in
                Beirut at the time, people all over Lebanon, the Lebanese abroad,
                and those who know someone that was affected.
              </StyledParagraph>
              <StyledParagraph>
                All these individuals, regardless of whether they were in Beirut at
                the time of the explosion or whether they were directly impacted by
                the explosion can experience traumatic stress as a result of it.
              </StyledParagraph>
              <StyledParagraph>
                Traumatic stress is changes in how one feels, thinks, or behaves as
                a result of trauma. It is a normal reaction to an abnormal event.
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
  max-width: 632px;

  @media (max-width: ${devices.mobile}) {
    margin-left:18px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex; flex: 1; z-index: 1; justify-content: space-between;
`;

const HeaderLeftImageWrapper = styled.div`
  display: flex; flex: 1; justify-content: flex-start; align-items: center;

  @media (max-width: ${devices.ipadpro}) {
    display: none;
  }
`;

const HeaderRightImageWrapper = styled.div`
  display: flex; flex: 1; justify-content: flex-end; align-items: center;

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
  color: ${colours.white};
`;

const StyledParagraph = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 16px;
  color: ${colours.white};
`;

export default TraumaticEvents;
