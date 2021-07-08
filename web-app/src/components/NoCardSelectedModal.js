import React from "react";
import styled from "styled-components";
import CloseButton from "../assets/images/CloseButton.svg";
import devices from "../styles/Devices";
import colours from "../styles/Colours";

const NoCardSelectedModal = (props) => {
  return (
    <ModalWrapper>
      <Card>
        <StyledCloseButton
          src={CloseButton}
          alt="Close Button"
          onClick={props.closeModal}
        />
        <Title>Looks like you haven't selected any cards</Title>
        <Text>
          We can help with tailored advice if you select at least one card, by
          giving it a green tick.
        </Text>
        <StyledButton onClick={props.closeModal}>OK</StyledButton>
      </Card>
    </ModalWrapper>
  );
};

const Title = styled.h2`
  font-family: Playfair Display;
  font-style: normal;
  font-size: 30px;
  line-height: 38px;
  color: ${colours.black};
`;

const Text = styled.p`
  font-family: Raleway;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 16px;
  width: 100%;
  background: ${colours.yellow};
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
`;

const ModalWrapper = styled.div`
  background: rgba(67, 67, 67, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
`;

const Card = styled.div`
  position: absolute;
  left: 28.06%;
  right: 28.06%;
  top: 38.28%;
  background: ${colours.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 3%;
  @media (max-width: ${devices.ipadpro}) {
    left: 15%;
    right: 15%;
  }
  @media (max-width: ${devices.mobile}) {
    left: 10%;
    right: 10%;
  }
`;

const StyledCloseButton = styled.img`
  cursor: pointer;
  position: absolute;
  top: 15%;
  right: 5%;
  width: 4%;
  height: auto;
  @media (max-width: ${devices.mobile}) {
    width: 6%;
    height: auto;
    top: 10%;
    right: 8%;
  }
`;

export default NoCardSelectedModal;
