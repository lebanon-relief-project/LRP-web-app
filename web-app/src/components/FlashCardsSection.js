import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import FlashCard from "./FlashCard";
import { getFlashCards } from "../services/flashCards.service";
import devices from "../styles/Devices";
import { Link } from "react-router-dom";

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

  
        <StyledLink to={"/results"}>Give me advice</StyledLink>
 
    </StyledSection>
  );
};

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
    color: inherit;
  }
  padding: 0.5rem;
  justify-content: center;
  display: flex;
  background-color: ${colours.yellow};
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
  @media (max-width: ${devices.mobile}) {
    margin: 3.375rem 0;
    align-self: center;
  }
`;

const StyledSection = styled.section`
  background: inherit;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  background: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: ${devices.ipadpro}) {
    width: 100%;
    justify-content: center;
  }
`;



export default FlashCardsSection;
