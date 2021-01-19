import React, { useState } from "react";
import styled from "styled-components";

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
        updatedState.push({ id: result.id, selected: true })
      } else {
        updatedState.push({ id: result.id, selected: false })
      }
    });

    setSelectedFlashCardState(updatedState);
  }

  // If card is selected make title bold
  const renderTitles = () => {
    return selectedFlashCardState.map((card, index) => {
      if (card.selected) {
        return (
          <SelectedStyledFlashCardTitle data-testid={`flashcardTitleButton_${index}`} key={`flashcardTitleButton_${index}`} onClick={() => updateSelectedFlashCardState(card.id)}>
            {getCardTitleFromSessionStorage(card.id)}
          </SelectedStyledFlashCardTitle>
        );
      } else {
        return (
          <UnSelectedStyledFlashCardTitle data-testid={`flashcardTitleButton_${index}`} key={`flashcardTitleButton_${index}`} onClick={() => updateSelectedFlashCardState(card.id)}>
            {getCardTitleFromSessionStorage(card.id)}
          </UnSelectedStyledFlashCardTitle>
        );
      }
    });
  };

  // Only render the selected cards recommendations
  const renderRecommendations = () => {
    return selectedFlashCardState.map((card) => {
      if (card.selected) {
        return (
          <ResultCardsWrapper key={`resultCards_wrapper`}>
            {resultsResponseArray.map((result) => {
              if (result._id === card.id) {
                return (
                  result.recommendations.map((recommendation, index) => {
                    return (
                      <ResultCard
                        title={recommendation.title}
                        body={recommendation.body}
                        key={`flashcard_result_${index}`}
                        data-testid={`${recommendation.title}_flashcard_result_${index}`}
                      />
                    )
                  })
                );
              }
            })}
          </ResultCardsWrapper>
        );
      } else {
        return;
      }
    });
  };

  return (
    <>
      <div>{renderTitles()}</div>

      {renderRecommendations()}
    </>
  );
};

const ResultCardsWrapper = styled.div`
  max-width: 632;
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
`;

export default FlashCardResultContainer;
