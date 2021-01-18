import React from "react";
import styled from "styled-components";
import colours from "../../styles/Colours";
import devices from "../../styles/Devices";
import resultsPageLoadingBar from "../../assets/images/resultsPageLoadingBar.svg";
import {FlashCardResultContainer} from "./FlashCardResultContainer"

const tempCards = { results: [
  {
    _id: "9851d5f91b9f896b097acdd32a5dfed8",
    title: "Allow yourself to feel",
    body:
      "As hard as this might sound, the healthiest way to deal with feelings is to notice them, accept them as a reaction to what has happened, and let them be. Emotions are like waves, they subside once they peak, let them do so, or else they will keep trying to resurface.",
  },
  {
    _id: "b5f070b7a6567c96432f9668f6d72046",
    title: "Talk about it",
    body:
      "Share your experience, thoughts, and feelings. It's important that you only do so when you feel ready to. This can be a gradual process. Take your time and do it at whatever pace feels comfortable for you.",
  },
  {
    _id: "e5e8bcbdabeef5bc57de9213dde014ad",
    title: "Try these excercises",
    body: "Lorem ipsum...",
  },
]};

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

          <FlashCardResultContainer results={tempCards}/>

        </ContentWrapper>
      </Wrapper>
    </StyledSection>
  );
};

const ResultCardWrapper = styled.div`
  max-width: 632;
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
