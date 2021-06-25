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
  const [selected, setSelected] = useState(checkIfCardIsInSessionStorage(id));

  // This function is called when the user clicks the plus or tick button
  // The conditional logic is reversed because useState is async
  const cardSelectHandler = () => {
    if (!selected) {
      sessionStorage.setItem(id, card.title);
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
          <FlashCardImage src={card.image} />
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

        <a.div
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <CardTitleWrapper>{card.title}</CardTitleWrapper>
          <CardTextWrapper selected={selected}>{card.body}</CardTextWrapper>
        </a.div>
      </>
    );
  };

  return (
    <>
      <Wrapper>
        {renderCard()}
      </Wrapper>
    </>
  );
};

const CardTextWrapper = styled.div`
  font-size: 16px;

  font-weight: ${props => props.selected == true ? "600" : "initial"};
`;

const CardTitleWrapper = styled.h3`
  font-size:  24px;
  font-weight: 700;
`;

const CardTitleWrapper = styled.h3`
  font-size:  24px;
  
`;

const StyledHeader = styled.h1`
  font-size: 1rem;
  display: flex;
  height: 120px;
  padding: 0.25rem 0rem;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: ${devices.mobile}) {
    //height: 58px;
    font-size: 18px;
  }
`;

const Wrapper = styled.div`
  background-color: ${colours.white};
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  overflow: hidden;
  margin: 12px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  :hover{
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  }

  padding-bottom:30px;

  @media (min-width: ${devices.ipad}) and (max-width: ${devices.ipadpro}) {
    width: 50%;
  }

  @media (max-width: ${devices.ipad}) {
    width: unset;
  }
`;

const FlashCardButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  outline: none;
  margin-top: 20px;
  margin-right:20px;
`;
const CircleIcon = styled.img`
  /*align-self: right;
  &:hover {
    opacity: 0.8;
  }*/;
  height:100%;
`;

const FlashCardImage = styled.img`
  /*display: flex;
  flex: 1;*/
  /*width: 100%;*/;
  height: 100%;
  max-width: 80%;
  padding-left: 30px;
  padding-top: 30px;

`;

export default FlashCard;
