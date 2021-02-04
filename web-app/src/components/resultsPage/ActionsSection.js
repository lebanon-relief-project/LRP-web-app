import React from "react";
import styled from "styled-components";
import devices from "../../styles/Devices";
import { Routes } from "../../App.js";
import Card from "../Card";
import PDF from "../../assets/downloads/temp.pdf";

export const ActionSection = () => {
  return (
    <Wrapper>
      <Title>Some actions you can take</Title>
      <CardWrapper>
        <StyledCard
          title="Support"
          buttonText="Visit Embrace"
          externalPath="https://embracelebanon.org/"
        >
          <StyledParagraph>
            Surround yourself with supportive individuals. You can always reach
            out ...
          </StyledParagraph>
        </StyledCard>
        <StyledCard
          title="Useful exercise"
          buttonText="View exercises"
          externalPath={PDF}
        >
          <StyledParagraph>
            Exercing helps...Here are some exercises that you can do on your own
            to help yourself manage.
          </StyledParagraph>
        </StyledCard>
        <StyledCard
          title="14 days of wellbeing"
          disabled
          path={Routes.HELP}
          buttonText="Coming Soon"
        >
          <StyledParagraph>
            We put together a 14 day plan to ...
          </StyledParagraph>
        </StyledCard>
      </CardWrapper>
    </Wrapper>
  );
};

const StyledParagraph = styled.p`
  min-height: 7rem;
`;

const Wrapper = styled.div`
  width: 60%;
  min-width: 960px;

  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0 16.7%;
  background: inherit;

  @media (max-width: ${devices.mobile}) {
    margin: 25px 18px;
    padding-top: 0px;
    padding-bottom: 0px;
    width: auto;
  }
`;

const Title = styled.h2`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
`;

const StyledCard = styled(Card)`
  height: auto;
  width: 30%;
  margin: 5% 0;
  legend {
    min-width: 100%;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ActionSection;
