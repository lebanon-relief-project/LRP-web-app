import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import FlashCard from "./FlashCard";
import { getFlashCards } from "../services/flashCards.service";
import devices from "../styles/Devices";

const FlashCardsSection = (props) => {
  const [flashCards, setFlashCards] = useState([]);
  const fetchFlashCards = async () => {
    let response = await getFlashCards();

    setFlashCards(response.cards);
  };

  useEffect(() => {
    fetchFlashCards();
  }, []);

  return (
    <StyledSection>
      <Wrapper>
        {flashCards.map((flashCard, index) => {
          return (
            <FlashCard
              id={`${flashCard._id}`}
              key={`${flashCard._id}_${index}`}
              card={flashCard}
            />
          );
        })}
      </Wrapper>
      <NextButton>Next</NextButton>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background: inherit;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  background: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: ${devices.ipadpro}) {
    width: 100%;
  }
`;

const NextButton = styled.button`
  background-color: ${colours.gold};
  width: 13.875rem;
  height: 2.625rem;
  font-size: 1rem;
  align-self: flex-end;
  margin: 3.375rem 16.7%;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
  outline: none;
  border: none;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

export default FlashCardsSection;
