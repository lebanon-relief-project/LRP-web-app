import React, { useState } from "react";
import styled from "styled-components";
import devices from "../../styles/Devices";
import { Routes } from "../../App.js";
import Card from "../Card";
import PDF from "../../assets/downloads/Self-Help_Exercises.pdf";
import ReachOutModal from "./ReachOutModal";

export const ActionSection = () => {
  const [reachOutModalVisible, setReachOutModalVisible] = useState(false);
  return (
    <>
      <Wrapper>
        <Title>Some actions you can take</Title>
        <CardWrapper>
          <StyledCard
            title="Support"
            buttonText="Reach Out"
            path="#"
            onClick={() => {
              setReachOutModalVisible(true);
            }}
          >
            <StyledParagraph>
              Surround yourself with friends and family. And remember, you can
              always reach out…
            </StyledParagraph>
          </StyledCard>
          <StyledCard
            title="Useful exercises"
            buttonText="View exercises"
            externalPath={PDF}
          >
            <StyledParagraph>
              Here are some exercises to reduce stress and regain control over
              your actions and thoughts.
            </StyledParagraph>
          </StyledCard>
          <StyledCard
            title="14 days of wellbeing"
            disabled
            path={Routes.HELP}
            buttonText="Coming Soon"
          >
            <StyledParagraph>
              Keep your mind and body engaged by joining our 14 days of
              wellbeing.
            </StyledParagraph>
          </StyledCard>
        </CardWrapper>
      </Wrapper>
      {reachOutModalVisible && (
        <ReachOutModal
          closeModal={() => {
            setReachOutModalVisible(false);
          }}
        />
      )}
    </>
  );
};

const StyledParagraph = styled.p`
  min-height: 7rem;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;

  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: auto;
  background: inherit;

  @media (max-width: ${devices.ipadpro}) {
    margin: 25px 18px;
    padding-top: 0px;
    padding-bottom: 0px;
    width: auto;
    min-width: 0;
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
  min-width: 160px;
  margin: 5% 0;
  legend {
    width: auto;
    margin: 0 auto;
  }
  @media (max-width: ${devices.mobile}) {
    width: 100%;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
  }
`;

export default ActionSection;
