import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import colours from "../../styles/Colours";
import FlashCard from "../FlashCard";
import LoadingSpinner from "../LoadingSpinner";
import { getFlashCards } from "../../services/flashCards.service";
import devices from "../../styles/Devices";
import { useHistory } from "react-router-dom";
import NoCardSelectedModal from "../NoCardSelectedModal";
import { getOurValuesCards } from "../../services/ourValuesCards.service";

const OurValuesSection = (props) => {
  const [noCardSelectedModalVisible, setNoCardSelectedModalVisible] =
    useState(false);

  const [loading, isLoading] = useState(true);

  const [cardWrapperHeight, setCardWrapperHeight] = useState("100%");
  const cardWrapperRef = useRef(null);

  let history = useHistory();
  const [flashCards, setFlashCards] = useState([]);

  const [, /* state */ setState] = useState();

  const fetchFlashCards = async () => {
    let response = await getOurValuesCards();

    isLoading(false);
    setFlashCards(response.cards);
  };

  useEffect(() => {
    fetchFlashCards().catch(() => {
      setState(() => {
        throw new Error("failed to fetch flashCards");
      });
    });
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
  }, [flashCards]);

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
      </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  background: inherit;
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
