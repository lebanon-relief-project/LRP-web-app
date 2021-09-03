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
            You are not alone, if you feel that you are experiencing changes
            after a traumatic event. The cards below will help you to better
            understand how you are feeling and why. Select the card or cards
            that applies best to your situation. Once you are done, you can
            click on "Give me advice" at the bottom of the page to access
            self-help information on how to cope with the feelings you may be
            experiencing.
            <br />
            <br />
            Don’t worry, this bit is completely anonymous: your selections will
            not be recorded nor shared, and you will not be asked to talk to
            anyone.
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
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: auto;
  background: inherit;
  max-width: 960px;

  @media (max-width: ${devices.ipadpro}) {
    width: auto;
    width: 75%;
    margin: 0 12.5%;
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
