import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";

import Card from "../components/Card";
import { Routes } from "../App.js";
import { StyledSection } from "../styles/GlobalStyles";
import People from "../assets/images/People.svg";

const WellbeingSection = () => {
  return (
    <StyledSection>
      <FlexContainer>
        <StyledPeople src={People} />

        <IllustrationAndCard>
          <ChallengeCard>
            <Card
              secondary="true"
              disabled
              title="Try our 14 days of wellbeing"
              path={Routes.HOME}
              buttonText="Coming soon"
            >
              <Paragraph>
                Keep your mind and body engaged by joining our 14 days of
                wellbeing. Created by our team of mental health experts, these
                exercises offer simple daily tasks which will help you manage
                negative emotions and reach a more positive and calmer mindset.
              </Paragraph>
            </Card>
          </ChallengeCard>
        </IllustrationAndCard>
      </FlexContainer>
    </StyledSection>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
  }
`;

const StyledPeople = styled.img`
  max-width: 100%;
  object-fit: contain;
  width: auto;
  margin: 2%;

  @media (max-width: ${devices.ipad}) {
    width: 80%;
  }
  @media (max-width: ${devices.mobile}) {
    width: 100%;
    max-width: 100%;
    padding-left: 0rem;
  }
`;

const Paragraph = styled.p`
  font-family: Raleway;
  font-style: normal;

  font-size: 16px;
  line-height: 150%;
  color: #262626;
`;

const ChallengeCard = styled.div`
  display: flex;
  width: 85%;
  @media (max-width: ${devices.ipadpro}) {
    width: 50%;
    right: 0;
  }
  @media (max-width: ${devices.mobile}) {
    position: static;
    width: 100%;
  }
`;

const IllustrationAndCard = styled.div`
  @media (min-width: ${devices.mobile}) {
    display: flex;
    position: relative;
  }
`;

export default WellbeingSection;
