import React, { useState } from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import PlusCircleIcon from "../assets/images/PlusCircle.svg";
import TickCircleIcon from "../assets/images/TickCircle.svg";
import SampleCardPicture from "../assets/images/SampleCardPicture.png";
import { useSpring, animated as a } from "react-spring";

const FlashCard = ({card, id}) => {
  const [flipped, setFlipped] = useState(false);
  const [selected, setSelected] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
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
  const cardSelectHandler = (
  ) => {
    if (!selected) {
      sessionStorage.setItem(id, card.title);
    } else {
      sessionStorage.removeItem(id);
    }
    setSelected(!selected);
  }


  return (
    <Wrapper onMouseEnter={cardFlipHandler} onMouseLeave={cardFlipHandler}>
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

      <ImageWrapper>
        {/* Front of card */}
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
          <FlashCardImage src={SampleCardPicture} />
        </a.div>

        {/* Back of card */}
        <a.div
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            position: "absolute",
          }}
        >
          Ut quam turpis diam sed lacus, id nibh mauris etiam. Aenean nullam
          elementum laoreet laoreet nec, amet lacus, sed. Libero erat vestibulum
          neque praesen
        </a.div>
      </ImageWrapper>
    </Wrapper>
  );
};

const StyledHeader = styled.div`
  font-size: 1rem;
  display: flex;
  height: 3.5rem;
  padding: 0.25rem 0.5rem;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  background-color: ${colours.lightestGrey};
  width: 13.875rem;
  height: 17.75rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  overflow: hidden;
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

const FlashCardImage = styled.div`
  display: flex;
  flex: 1;
  width: 13.875rem;
  height: 17.75rem;
  background-color: ${colours.lightBlue};
`;

export default FlashCard;
