import React from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import FlashCard from "./FlashCard";

const flashCard1 = {
  title: "title 1",
  text: "text 1",
  image: "image url",
};
const flashCard2 = {
  title: "title 2",
  text: "text 2",
  image: "image url",
};
const flashCard3 = {
  title: "title 3",
  text: "text 3",
  image: "image url",
};
const flashCard4 = {
  title: "title 4",
  text: "text 4",
  image: "image url",
};
const flashCard5 = {
  title: "title 5",
  text: "text 5",
  image: "image url",
};

const flashCards = [flashCard1, flashCard2, flashCard3, flashCard4, flashCard5];

const FlashCardsSection = (props) => {
  return (
    <StyledSection>
      <Wrapper>
        {flashCards.map((flashCard, index) => {
          return (
            <FlashCard key={`${flashCard.title}_${index}`} card={flashCard} />
          );
        })}
      </Wrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background: ${colours.white};
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  flex: 1;
  margin: 0 12rem;
  background: inherit;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.5625rem;
  row-gap: 1.5625rem;
`;

export default FlashCardsSection;
