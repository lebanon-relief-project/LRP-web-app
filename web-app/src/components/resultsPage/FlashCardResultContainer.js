import React, { useState } from "react";
import styled from "styled-components";
import { ResultCard } from "./ResultCard";
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

  /*
    TEMP FUNCTION!!!
    This will be removed once we are pulling results from the Database
  */
  const getCardTitleFromResultsResponse = (cardId) => {
    let response;

    resultsResponseArray.forEach((result) => {
      if (result._id === cardId) {
        response = result.expl_title;
      }
    });

    return response;
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
            {/* {getCardTitleFromSessionStorage(card.id)} */}

            {/* TEMP FUNCTION*/}
            {getCardTitleFromResultsResponse(card.id)}
          </SelectedStyledFlashCardTitle>
        );
      } else {
        return (
          <UnSelectedStyledFlashCardTitle
            data-testid={`flashcardTitleButton_${index}`}
            key={`flashcardTitleButton_${index}`}
            onClick={() => updateSelectedFlashCardState(card.id)}
          >
            {/* {getCardTitleFromSessionStorage(card.id)} */}

            {/* TEMP FUNCTION*/}
            {getCardTitleFromResultsResponse(card.id)}
          </UnSelectedStyledFlashCardTitle>
        );
      }
    });
  };

  // Only render the selected cards recommendations
  const renderRecommendations = () => {
    return selectedFlashCardState
      .filter((card) => card.selected)
      .map((card) => {
        return (
          // RENDER IMAGE HERE
          <ResultCardsWrapper key={`resultCards_wrapper`}>
            {resultsResponseArray
              .filter((result) => result._id === card.id)
              .map((result) => {
                return result.recommendations.map((recommendation, index) => {
                  return (
                    <ResultCard
                      title={recommendation.title}
                      body={recommendation.body}
                      key={`flashcard_result_${index}`}
                      data-testid={`${recommendation.title}_flashcard_result_${index}`}
                    />
                  );
                });
              })}
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

const TitlesForeground = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  flex-direction: column;
`;

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-left: 6px solid rgba(255, 197, 61, 0.2);
  position: absolute;
`;

const TitlesContainer = styled.div`
  width: 100%;
  max-width: 270px;
  height: 100%;
  position: relative;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const ResultCardsWrapper = styled.div`
  max-width: 632;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
`;
const UnSelectedStyledFlashCardTitle = styled.button`
  color: ${Colours.darkBlue};
  font-weight: bold;
  font-size: 24px;
  min-width: 270px;
  text-align: left;
  padding-left: 24px;
  padding-top: 30px;
  padding-bottom: 30px;
  opacity: 0.3;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  border: none;
  border-left: solid;
  border-left-color: transparent;
  border-left-width: 6px;
`;

export default FlashCardResultContainer;
