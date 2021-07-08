import React from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import devices from "../styles/Devices";

const FeelingsSection = () => {
  return (
    <StyledSection>
      <Wrapper>
        <StyledHeader>Something feels different</StyledHeader>
        <TextWrapper>
          <StyledParagraph>
            If you feel that you are experiencing emotional and physical changes
            since a distressing event, know that you are not alone, and that it
            is normal to be wanting to understand your changes after a traumatic
            event. The cards below give you a brief description of what you may
            be experiencing. Please read them and select those that apply to
            you. Once you are done, and want to know more about why you are
            experiencing those feelings and how to cope with them, click on give
            me advice at the bottom of the page.
          </StyledParagraph>
        </TextWrapper>
      </Wrapper>
    </StyledSection>
  );
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  width: 60%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0 20%;
  background: inherit;

  @media (max-width: ${devices.ipadpro}) {
    width: auto;
    width: 75%;
    margin: 0 12.5%
  }

  @media (max-width: ${devices.ipad}) {
    margin: 0 30px;
    width: 90%;
  }

  @media (max-width: ${devices.mobile}) {
    margin: 25px 18px;
    padding-top: 0px;
    padding-bottom: 0px;
    width: auto;
  }
`;

const StyledSection = styled.section`
  background: ${colours.white};
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledHeader = styled.h2`
  font-weight: bold;
  font-size: 24px;
`;

const StyledParagraph = styled.p`
  margin: 0;
  font-size: 16px;
`;

export default FeelingsSection;
