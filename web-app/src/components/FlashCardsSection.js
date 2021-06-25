import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import FlashCard from "./FlashCard";
import LoadingSpinner from "./LoadingSpinner";
import { getFlashCards } from "../services/flashCards.service";
import devices from "../styles/Devices";
import { useHistory } from "react-router-dom";
import NoCardSelectedModal from "./NoCardSelectedModal";
import { consoleTestResultHandler } from "tslint/lib/test";

const FlashCardsSection = (props) => {
  const [noCardSelectedModalVisible, setNoCardSelectedModalVisible] =
    useState(false);

  const [loading, isLoading] = useState(true);

  const [cardWrapperHeight, setCardWrapperHeight] = useState("100%")
  const cardWrapperRef = useRef(null)

  let history = useHistory();
  const [flashCards, setFlashCards] = useState([]);
  const fetchFlashCards = async () => {
    let response = await getFlashCards();
    isLoading(false);
    setFlashCards(response.cards);
  };

  useEffect(() => {
    fetchFlashCards();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (sessionStorage.length === 0) {
      setNoCardSelectedModalVisible(true);
    } else {
      history.push("/results");
    }
  };

  //Calculate height of the card container div
  useEffect(() => {
    function setHeight(){
      setCardWrapperHeight(undefined);
      let height =  cardWrapperRef?.current?.getBoundingClientRect()?.height

      if(height > 0){
        if(window.innerWidth >= devices.ipad.replace("px","") &&  window.innerWidth <= devices.ipadpro.replace("px","") ){
          console.log("2 Columns")
          setCardWrapperHeight(height*0.6)
        }else{
          console.log("3 Columns")
          setCardWrapperHeight(height*0.4)
        }
        
      }

    }
    setHeight();
    window.addEventListener('resize',  setHeight);
  }, [flashCards]);

  return (
    <>
      <StyledSection>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Wrapper style={{maxHeight: cardWrapperHeight}} ref={cardWrapperRef}>
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
        )}
        <StyledLink onClick={handleClick}>Give me advice</StyledLink>
      </StyledSection>

      {noCardSelectedModalVisible && (
        <NoCardSelectedModal
          closeModal={() => {
            setNoCardSelectedModalVisible(false);
          }}
        />
      )}
    </>
  );
};

const StyledLink = styled.button`
  color: inherit;
  text-decoration: inherit;
  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
    color: inherit;
  }
  margin-top: 12px;
  padding: 0.5rem;
  justify-content: center;
  display: flex;
  background-color: ${colours.yellow};
  width: 70%;
  height: 2.625rem;
  font-size: 1rem;
  align-self: center;
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
    width: fill-available;
    margin: 0px 12px;
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
  align-items: flex-start;
`;

const Wrapper = styled.div`
  width: 60%;
  margin: 0 16.7%;
  background: inherit;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;

  @media (max-width: ${devices.ipad}) {
    width: 100%;
    justify-content: center;
    max-height:  unset !important
  }

  @media (max-width: ${devices.ipadpro}) {
    width: 70%;
  }
`;

export default FlashCardsSection;
