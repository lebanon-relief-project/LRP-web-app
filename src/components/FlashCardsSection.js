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
const flashCard6 = {
  title: "title 6",
  text: "text 6",
  image: "image url",
};
const flashCard7 = {
  title: "title 7",
  text: "text 7",
  image: "image url",
};
const flashCard8 = {
  title: "title 8",
  text: "text 8",
  image: "image url",
};
const flashCard9 = {
  title: "title 9",
  text: "text 9",
  image: "image url",
};
const flashCard10 = {
  title: "title 10",
  text: "text 10",
  image: "image url",
};
const flashCard11 = {
  title: "title 11",
  text: "text 11",
  image: "image url",
};
const flashCard12 = {
  title: "title 12",
  text: "text 12",
  image: "image url",
};
const flashCard13 = {
  title: "title 13",
  text: "text 13",
  image: "image url",
};
const flashCard14 = {
  title: "title 14",
  text: "text 14",
  image: "image url",
};

const flashCards = [flashCard1, flashCard2, flashCard3, flashCard4, flashCard5, flashCard6, flashCard7, flashCard8, flashCard9,flashCard10,flashCard11,flashCard12,flashCard13,flashCard14];

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
      <NextButton>Next</NextButton>

    </StyledSection>
  );
};

const StyledSection = styled.section`
  background: inherit;
  margin: 0;
  padding: 0;
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;

const Wrapper = styled.div`
  flex: 1;
  margin: 0 16.7%;
  background: inherit;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.4375rem;
  row-gap: 1.4375rem;
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
`

export default FlashCardsSection;
