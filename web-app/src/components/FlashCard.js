import React, { useState } from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import PlusCircleIcon from "../assets/images/PlusCircle.svg";
import TickCircleIcon from "../assets/images/TickCircle.svg";
import { useSpring, animated as a } from "react-spring";
import devices from "../styles/Devices";
import { deviceSize } from "../util/deviceUtil";
import { checkIfCardIsInSessionStorage } from "../util/util";

const FlashCard = ({ card, id }) => {
  const [flipped, setFlipped] = useState(checkIfCardIsInSessionStorage(id));
  const [selected, setSelected] = useState(checkIfCardIsInSessionStorage(id));

  const { transform, opacity } = useSpring({
    opacity: flipped ? 0.92 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  // This function is called on both mouse enter and mouse leave.
  // It calculates the card selection logic (card stays flipped if selected)
  const cardFlipHandler = () => {
    if (selected) return;
    setFlipped(() => !flipped);
  };

  // This function is called when the user clicks the plus or tick button
  // The conditional logic is reversed because useState is async
  const cardSelectHandler = () => {
    if (!selected) {
      sessionStorage.setItem(id, card.title);
      if (window.screen.width <= deviceSize.ipadpro){
        setFlipped(true);
      }
    } else {
      sessionStorage.removeItem(id);
    }
    setSelected(!selected);
  };

  const renderCard = () => {
    return (
      <>
        {/* Card title and button */}
        <StyledHeader>
          {card.title}
          <FlashCardButton
            data-testid={card.title}
            onClick={() => cardSelectHandler()}
          >
            {selected ? (
              <CircleIcon
                height={32}
                width={32}
                src={TickCircleIcon}
                alt="TickCircleIcon"
              />
            ) : (
              <CircleIcon
                height={32}
                width={32}
                src={PlusCircleIcon}
                alt="PlusCircleIcon"
              />
            )}
          </FlashCardButton>
        </StyledHeader>

        <ImageWrapper onClick={ window.screen.width <= deviceSize.ipadpro ? cardFlipHandler : () => {}}>
          {/* Picture side of card */}
          <a.div
            style={{
              opacity: opacity.interpolate((o) => 1 - o),
              transform,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              position: "absolute",
            }}
          >
            <FlashCardImage src={card.image} />
          </a.div>

          {/* Text side of card */}
          <a.div
            style={{
              opacity,
              transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              position: "absolute",
              paddingLeft: "8px",
              paddingRight: "8px",
            }}
          >
            {card.body}
          </a.div>
        </ImageWrapper>
      </>
    );
  };

  return (
    <>
      {window.screen.width <= deviceSize.ipadpro ? (
        <Wrapper >{renderCard()}</Wrapper>
      ) : (
        <Wrapper onMouseEnter={cardFlipHandler} onMouseLeave={cardFlipHandler}>
          {renderCard()}
        </Wrapper>
      )}
    </>
  );
};

const StyledHeader = styled.div`
  font-size: 1rem;
  display: flex;
  height: 80px;
  padding: 0.25rem 0.5rem;
  justify-content: space-between;
  @media (max-width: ${devices.mobile}) {
    height: 58px;
    font-size: 14px;
  }
`;

const Wrapper = styled.div`
  background-color: ${colours.lightestGrey};
  width: 222px;
  height: 17.75rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  overflow: hidden;
  margin: 12px;

  @media (max-width: ${devices.mobile}) {
    height: 288px;
    width: 339px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

const FlashCardButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  outline: none;
`;
const CircleIcon = styled.img`
  align-self: center;
  &:hover {
    opacity: 0.8;
  }
`;

const FlashCardImage = styled.img`
  display: flex;
  flex: 1;
  width: 100%;
`;

export default FlashCard;
