import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Routes } from "../App.js";
import { ReactComponent as Illustration3 } from "../assets/images/Illustration3.svg";
import devices from "../styles/Devices";
import colours from "../styles/Colours";

const HelpSection = () => {
  return (
    <>
      <StyledSection>
        <CardWrapper>
          <Card
            title="I’m looking for help"
            text="Everyone deals with trauma differently. Every experience is different, and everyone copes differently. There isn’t a “one fits all solution” when it comes to healing. Our ambition is to help deal with trauma through surfacing the right tools based on each person’s needs.. "
            path={Routes.HELP}
          />
          <Card
            title="I’d like to help"
            text="Do you have a close one who underwent trauma, but you need direction on how to help, what to say, what to do and how to protect yourself? Or do you want to help those who are undergoing trauma and looking for opportunities to do so?. "
            path={Routes.HOME}
          />
        </CardWrapper>
        <div>
          <StyledIllustration />
        </div>
      </StyledSection>
    </>
  );
};

const StyledIllustration = styled(Illustration3)`
  @media (max-width: ${devices.mobile}) {
    max-width: 100%;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
    position: static;
    pading: 0;
    margin: 0;
  }
  position: absolute;
  z-index: 1;
  margin-top: 5rem;
`;

const FlexContainer = styled.div`
  @media (max-width: ${devices.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledSection = styled.section`
  margin: 0;
  padding: 0;
  min-height: 10%;
`;

export default HelpSection;
