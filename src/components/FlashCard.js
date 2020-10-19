import React from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import PlusCircleIcon from "../assets/images/PlusCircle.svg";
import SampleCardPicture from "../assets/images/SampleCardPicture.png";

const FlashCard = ({ card }) => {
  return (
    <Wrapper>
      <StyledHeader>
        {card.title}

        <CircleIcon
          height={32}
          width={32}
          src={PlusCircleIcon}
          alt="PlusCircleIcon"
        />
      </StyledHeader>
      <ImageWrapper>
        <FlashCardImage src={SampleCardPicture} />
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
`;

const CircleIcon = styled.img`
  align-self: center;
`;

const FlashCardImage = styled.img`
  display: flex;
  flex: 1;
`;

export default FlashCard;
