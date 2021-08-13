import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import colours from "../../styles/Colours";
import FlashCard from "../FlashCard";
import LoadingSpinner from "../LoadingSpinner";
import devices from "../../styles/Devices";
import { getOurValuesCards } from "../../services/ourValuesCards.service";

const OurValuesSection = (props) => {
  const [loading, isLoading] = useState(true);

  const [cardWrapperHeight, setCardWrapperHeight] = useState("100%");
  const cardWrapperRef = useRef(null);
  const [valueCards, setValueCardsCards] = useState([]);
  const [, /* state */ setError] = useState();

  const fetchValueCards = async () => {
    let response = await getOurValuesCards();

    isLoading(false);
    setValueCardsCards(response.cards);
  };

  useEffect(() => {
    fetchValueCards().catch(() => {
      setError(() => {
        throw new Error("failed to fetch valueCards");
      });
    });
  }, []);

  //Calculate height of the card container div
  useEffect(() => {
    function setHeight() {
      setCardWrapperHeight(undefined);
      let height = cardWrapperRef?.current?.getBoundingClientRect()?.height;

      if (height > 0) {
        if (
          window.innerWidth >= devices.ipad.replace("px", "") &&
          window.innerWidth <= devices.ipadprolandscape.replace("px", "")
        ) {
          setCardWrapperHeight(height * 0.7);
        } else {
          setCardWrapperHeight(height * 0.5);
        }
      }
    }
    setHeight();
    window.addEventListener("resize", setHeight);
  }, [valueCards]);

  return (
    <>
      <StyledSection>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Wrapper
            style={{ maxHeight: cardWrapperHeight }}
            ref={cardWrapperRef}
          >
            {valueCards.map((valueCard, index) => {
              return (
                <FlashCard
                  id={`${valueCard._id}`}
                  key={`${valueCard._id}_${index}`}
                  card={valueCard}
                />
              );
            })}
          </Wrapper>
        )}
      </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  background: ${colours.lightGrey};
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 240px;
  background: inherit;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;
  flex-direction: column;

  @media (max-width: ${devices.ipadpro}) {
    padding: 0 18px;
    width: 100%;
  }

  @media (max-width: ${devices.ipad}) {
    justify-content: center;
    max-height: unset !important;
  }
`;

export default OurValuesSection;
