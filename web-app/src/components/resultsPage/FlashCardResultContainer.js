import React, { useState } from "react";
import styled from "styled-components";

import { ResultCard } from "./ResultCard";
import { getCardTitleFromSessionStorage } from "../../util/util";

/*
  Result extends BaseCloudantDocument {
    _id: string;
    _rev: string;
    expl_title: string;
    expl_body: string;
    image: string;
    recommendations: Recommendation[];
  }

  Recommendation {
    title: string;
    body: string;
  }

  */

// Render all titles, if selected make title bold and render that cards recommendations
/*
    - get flashcard title from session storage using _id of result
    
  */

// @param results: ResultsResponse
export const FlashCardResultContainer = ({ results }) => {
  const resultsArray = results.results;

  const setInitialState = (resultsArray) => {
    let initialState = [];

    resultsArray.forEach((result, index) => {
      if (index === 0) {
        initialState.push({ id: result._id, selected: true });
      } else {
        initialState.push({ id: result._id, selected: false });
      }
    });

    return initialState;
  };

  const [selectedCardState, setSelectedCardState] = useState(
    setInitialState(resultsArray)
  );

  const renderTitles = () => {
    return selectedCardState.map((card, index) => {
      if (card.selected) {
        return (
          <SelectedStyledFlashCardTitle key={`flashcardTitle_${index}`}>
            {getCardTitleFromSessionStorage(card.id)}
          </SelectedStyledFlashCardTitle>
        );
      } else {
        return (
          <UnSelectedStyledFlashCardTitle key={`flashcardTitle_${index}`}>
            {getCardTitleFromSessionStorage(card.id)}
          </UnSelectedStyledFlashCardTitle>
        );
      }
    });
  };

  const renderRecommendations = () => {
    // Loop through all cards selected
    return selectedCardState.map((card) => {
      if(card.selected) { // If the card is selected we render its recommendations
        return (
          <ResultCardWrapper key={`resultCard_wrapper`}>
            {resultsArray.map((result, index) => {
              return (
                <ResultCard
                  title={result.title}
                  body={result.body}
                  key={`flashcard_result_${index}`}
                />
              );
            })}
      </ResultCardWrapper>
        )
      } else {
        return;
      }
    })
  };

  return (
    <>
      <div>
        {renderTitles()}
      </div>

      {renderRecommendations()}
    </>
  );
};

const ResultCardWrapper = styled.div`
  max-width: 632;
`;

const SelectedStyledFlashCardTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  min-width: 270px;
  text-align: left;
  padding-left: 24px;
`;
const UnSelectedStyledFlashCardTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  min-width: 270px;
  text-align: left;
  padding-left: 24px;
  opacity: 0.3;
`;

export default FlashCardResultContainer;
