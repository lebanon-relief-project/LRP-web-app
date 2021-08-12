import React from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import devices from "../styles/Devices";
import HelpPageLeftBackground from "../assets/images/background/HelpPageLeftBackground.svg";
import HelpPageRightBackground from "../assets/images/background/HelpPageRightBackground.svg";

const TraumaticEvents = () => {
  return (
    <StyledSection>
      <HeaderWrapper>
        <HeaderLeftImageWrapper>
          <img src={HelpPageLeftBackground} alt={"background"} />
        </HeaderLeftImageWrapper>

        <HeaderRightImageWrapper>
          <img src={HelpPageRightBackground} alt={"background"} />
        </HeaderRightImageWrapper>
      </HeaderWrapper>
      
      <CentralWrapper>
        <WidthConstraint>
          <CentralContentWrapper>
            <StyledHeader>Traumatic Events</StyledHeader>
            <TextWrapper>
              <StyledParagraph>
                Trauma derives from an exposure to an event resulting in changes
                of feelings, thoughts or behaviors. These emotional and physical
                changes accompanying the symptoms of a traumatic experience
                constitute a normal reaction to an abnormal event.
              </StyledParagraph>
              <StyledParagraph>
                Trauma is unique, and any distressing event can result in it. It
                can be widespread, and it can be personal, varying from pandemics,
                to economic crises, death and abuse.
              </StyledParagraph>
              <StyledParagraph>
                Trauma can also be experienced by watching or helping someone who
                has been affected by a traumatic event. Each person lives trauma
                differently, and symptoms or modifications in thoughts, behaviors
                and emotions vary from one person to another.
              </StyledParagraph>
            </TextWrapper>
          </CentralContentWrapper>
        </WidthConstraint>
      </CentralWrapper>
    </StyledSection>
  );
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: ${devices.mobile}) {
    margin-top: 15px;
  }
`;

const WidthConstraint = styled.div`
  width: inherit;
  max-width: 960px;
`

const CentralWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 2;
  background-color: transparent;
  justify-content: center;
  position: absolute;
  align-items: center;
  height: 363px;
  width: 100%;

  @media (max-width: ${devices.mobile}) {
    height: 542px;
  }
`;

const CentralContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;

  max-width: 632px;

  @media (max-width: ${devices.ipadpro}){
    margin: 0 12.5%;
  }

  @media (max-width: ${devices.ipad}) {
    margin-left: 30px;
    margin-right: 30px;
  }

  @media (max-width: ${devices.mobile}) {
    margin-left: 18px;
    margin-right: 18px;
    flex: 1;
    margin-top: 20px;
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
    display:none
  }

  @media (max-width: ${devices.ipadprolandscape}) {
    opacity: 0.3;
  }
`;

const HeaderRightImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${devices.ipadpro}) {
    display:none
  }

  @media (max-width: ${devices.ipadprolandscape}) {
    opacity: 0.3;
  }

`;

const StyledSection = styled.div`
  display: flex;
  background: ${colours.darkBlue};
  margin: 0;
  margin-top: 64px;
  padding: 0;
  width: 100vw;
  height: 363px;
  z-index: 0;

  @media (max-width: ${devices.mobile}) {
    height: 542px;
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

const StyledParagraph = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 16px;
  color: ${colours.white};
`;

export default TraumaticEvents;
