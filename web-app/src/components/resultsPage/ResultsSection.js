import React from "react";
import styled from "styled-components";
import colours from "../../styles/Colours";
import devices from "../../styles/Devices";
import { ResultCard } from "./ResultCard";
import resultsPageLoadingBar from "../../assets/images/resultsPageLoadingBar.svg";

const tempCards = [
  {
    title: "Allow yourself to feel",
    body:
      "As hard as this might sound, the healthiest way to deal with feelings is to notice them, accept them as a reaction to what has happened, and let them be. Emotions are like waves, they subside once they peak, let them do so, or else they will keep trying to resurface.",
  },
  {
    title: "Talk about it",
    body:
      "Share your experience, thoughts, and feelings. It's important that you only do so when you feel ready to. This can be a gradual process. Take your time and do it at whatever pace feels comfortable for you.",
  },
  {
    title: "Try these excercises",
    body: "Lorem ipsum...",
  },
];

const ResultsSection = () => {
  return (
    <StyledSection>
      <Wrapper id={"wrapper"}>
        <StyledHeader>Here’s some things that can help</StyledHeader>

        <ContentWrapper id={"content"}>
          <ResultCardWrapper>
            <div>
              <img src={resultsPageLoadingBar} />
            </div>
          </ResultCardWrapper>

          <div>
            <StyledFlashCardTitle>Feeling guilty</StyledFlashCardTitle>
          </div>

          <ResultCardWrapper>
            <ResultCard title={tempCards[0].title} body={tempCards[0].body} />
            <ResultCard title={tempCards[1].title} body={tempCards[1].body} />
            <ResultCard title={tempCards[2].title} body={tempCards[2].body} />
          </ResultCardWrapper>
        </ContentWrapper>
      </Wrapper>
    </StyledSection>
  );
};

const ResultCardWrapper = styled.div`
  max-width: 632;
`;

const StyledFlashCardTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  min-width: 270px;
  text-align: left;
  padding-left: 24px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 652px;
  min-width: 960px;
`;

const Wrapper = styled.div`
  width: 60%;
  min-width: 960px;
  min-height: 730px;
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

export default ResultsSection;
