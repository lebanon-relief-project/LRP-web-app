import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";

import Card from "../components/Card";
import { Routes } from "../App.js";
import { PageContainer } from "../styles/GlobalStyles";
import People from "../assets/images/People.svg";

const WellbeingSection = () => {
  return (
    <StyledSection>
      <PageContainer>
        <StyledGridContainer>
          <StyledPeople src={People} />

          <ChallengeCard>
            <Card
              secondary="false"
              disabled
              title="Try our 14 days of wellbeing"
              path={Routes.HOME}
              buttonText="Coming soon"
            >
              <StyledParagraph>
                Keep your mind and body engaged by joining our 14 days of
                wellbeing. Created by our team of mental health experts, these
                exercises offer simple daily tasks which will help you manage
                negative emotions and reach a more positive and calmer mindset.
              </StyledParagraph>
            </Card>
          </ChallengeCard>
        </StyledGridContainer>
      </PageContainer>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 2rem 3rem 0rem 3rem;
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 25vw 1fr;
  grid-gap: 1rem;

  @media (max-width: ${devices.ipadpro}) {
    grid-template-columns: 1fr;
  }
`;

const StyledPeople = styled.img`
  max-width: 19rem;
  margin: auto;

  @media (max-width: ${devices.ipadpro}) {
    max-width: 40%;
    margin-top: 1rem;
    max-height: 100%;
  }
`;

const ChallengeCard = styled.div`
  display: flex;
`;

const StyledParagraph = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  margin: 0.75rem 0rem 2rem 0;
  color: black;
  z-index: 1;
`;

export default WellbeingSection;
