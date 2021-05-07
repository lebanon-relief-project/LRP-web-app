import React, { useState } from "react";
import styled from "styled-components";
import devices from "../../styles/Devices";
import { ResultCard } from "./ResultCard";
import { getCardTitleFromSessionStorage } from "../../util/util";
import Colours from "../../styles/Colours";

// @param results: ResultsResponse
export const FlashCardResultContainer = ({ results }) => {
  const resultsResponseArray = results.results;

  // Setup state to display first flashcards recommendations
  const setInitialState = (resultsResponseArray) => {
    let initialState = [];

    resultsResponseArray.forEach((result, index) => {
      if (index === 0) {
        initialState.push({ id: result._id, selected: true });
      } else {
        initialState.push({ id: result._id, selected: false });
      }
    });

    return initialState;
  };

  const [selectedFlashCardState, setSelectedFlashCardState] = useState(
    setInitialState(resultsResponseArray)
  );

  // If a new flashcard is clicked update state to render that cards recommendations
  const updateSelectedFlashCardState = (id) => {
    let updatedState = [];

    selectedFlashCardState.forEach((result) => {
      if (result.id === id) {
        updatedState.push({ id: result.id, selected: true });
      } else {
        updatedState.push({ id: result.id, selected: false });
      }
    });

    setSelectedFlashCardState(updatedState);
  };

  // If card is selected make title bold
  const renderTitles = () => {
    return selectedFlashCardState.map((card, index) => {
      if (card.selected) {
        return (
          <SelectedStyledFlashCardTitle
            data-testid={`flashcardTitleButton_${index}`}
            key={`flashcardTitleButton_${index}`}
            onClick={() => updateSelectedFlashCardState(card.id)}
          >
            {getCardTitleFromSessionStorage(card.id)}
          </SelectedStyledFlashCardTitle>
        );
      } else {
        return (
          <UnSelectedStyledFlashCardTitle
            data-testid={`flashcardTitleButton_${index}`}
            key={`flashcardTitleButton_${index}`}
            onClick={() => updateSelectedFlashCardState(card.id)}
          >
            {getCardTitleFromSessionStorage(card.id)}
          </UnSelectedStyledFlashCardTitle>
        );
      }
    });
  };

  // Only render the selected cards recommendations and image
  const renderRecommendations = () => {
    return selectedFlashCardState
      .filter((card) => card.selected)
      .map((card) => {
        const selectedFlashcardResult = resultsResponseArray.filter(
          (result) => result._id === card.id
        );
        return (
          <ResultCardsWrapper key={`resultCards_wrapper`}>
            <ResultCardImage src={selectedFlashcardResult[0].image} />
            <H1>{selectedFlashcardResult[0].expl_title}</H1>
            <P>{selectedFlashcardResult[0].expl_body}</P>
            {selectedFlashcardResult[0].recommendations.map(
              (recommendation, index) => {
                return (
                  <ResultCard
                    title={recommendation.title}
                    body={recommendation.body}
                    key={`flashcard_result_${index}`}
                    data-testid={`${recommendation.title}_flashcard_result_${index}`}
                  />
                );
              }
            )}
          </ResultCardsWrapper>
        );
      });
  };

  return (
    <Container>
      <TitlesContainer>
        <Background />
        <TitlesForeground>{renderTitles()}</TitlesForeground>
      </TitlesContainer>
      {renderRecommendations()}
    </Container>
  );
};

const H1 = styled.h1`
  margin-left: 10px;
  font-weight: bold;

  @media (max-width: ${devices.mobile}) {
    margin: 18px;
  }
`;
const P = styled.p`
  margin: 10px;
  font-size: 16px;

  @media (max-width: ${devices.mobile}) {
    margin: 18px;
  }
`;

const TitlesForeground = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  z-index: 1;
  position: absolute;
  flex-direction: column;
  overflow: auto;

  @media (max-width: ${devices.ipadpro}) {
    flex-direction: row;
    padding: 0 16px;
    white-space: nowrap;
  }
`;

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-left: 6px solid rgba(255, 197, 61, 0.2);
  position: absolute;

  @media (max-width: ${devices.ipadpro}) {
    border: none;
    width: 1000px;
    border-top: 4px solid rgba(255, 197, 61, 0.2);
  }
`;

const TitlesContainer = styled.h1`
  width: 100%;
  max-width: 270px;
  height: 100%;
  position: relative;
  display: flex;
  @media (max-width: ${devices.ipadpro}) {
    max-width: 100%;
    width: auto;
    height: 78px;
    overflow: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: ${devices.ipadpro}) {
    flex-direction: column;
  }
`;

const ResultCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media (max-width: ${devices.ipadpro}) {
    max-width: 100%;
  }
`;

const ResultCardImage = styled.img`
  height: 100px;
  width: 244px;
  margin: 10px;

  @media (max-width: ${devices.mobile}) {
    margin: 18px;
  }
`;

const SelectedStyledFlashCardTitle = styled.button`
  color: ${Colours.darkBlue};
  font-weight: bold;
  font-size: 24px;
  min-width: 270px;
  text-align: left;
  padding-left: 24px;
  padding-top: 30px;
  padding-bottom: 30px;
  background: none;
  border: none;
  border-left: solid;
  border-left-color: ${Colours.gold};
  border-left-width: 6px;
  cursor: pointer;
  outline: inherit;
  @media (max-width: ${devices.ipadpro}) {
    border: none;
    border-top: 4px solid ${Colours.gold};
    max-width: 100%;
    padding: 0;
    min-width: auto;
    margin-right: 30px;
  }
`;
const UnSelectedStyledFlashCardTitle = styled(SelectedStyledFlashCardTitle)`
  opacity: 0.3;
  border-left-color: transparent;
  @media (max-width: ${devices.ipadpro}) {
    opacity: 0.3;
    border-top: 4px solid transparent;
    max-width: 100%;
    padding: 0;
  }
`;

export default FlashCardResultContainer;
