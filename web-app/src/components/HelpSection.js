import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Routes } from "../App.js";
import { ReactComponent as Illustration3 } from "../assets/images/Illustration3.svg";
import { ReactComponent as Illustration4 } from "../assets/images/Illustration4.svg";
import devices from "../styles/Devices";

const HelpSection = () => {
  return (
    <>
      <StyledSection>
        <CardWrapper>
          <Card
            title="I’d like to help"
            path={Routes.HELP}
            buttonText="Learn More"
          >
            <p>
              Do you have a close one who underwent trauma, but you need
              direction on how to help, what to say, what to do and how to
              protect yourself? Or do you want to help those who are undergoing
              trauma and looking for opportunities to do so?
            </p>
          </Card>
          <Card
            title="I’m looking for help"
            path={Routes.HELP}
            buttonText="Learn More"
          >
            <p>
              Everyone deals with trauma differently. Every experience is
              different, and everyone copes differently. There isn’t a “one fits
              all solution” when it comes to healing. Our ambition is to help
              deal with trauma through surfacing the right tools based on each
              person’s needs.
            </p>
          </Card>
        </CardWrapper>
        <IllustrationAndCard>
          <StyledIllustration3 />
          <StyledIllustration4 />
          <ChallengeCard>
            <Card
              secondary
              title="Try our 7 days challenge"
              path={Routes.HOME}
              buttonText="View challenge"
            >
              <p>If you are: </p>
              <StyledUnorderedList>
                <li>Struggling to manage </li>
                <li>Struggling to function as you used to </li>
                <li>
                  At risk of using negative coping skills like: drugs, alcohol,
                  self harm...
                </li>
              </StyledUnorderedList>
            </Card>
          </ChallengeCard>
        </IllustrationAndCard>
      </StyledSection>
    </>
  );
};

const StyledUnorderedList = styled.ul`
  li::before {
    content: "– ";
  }
  list-style-type: none;
  padding: 0;
`;

const StyledIllustration3 = styled(Illustration3)`
  padding 0 3rem;
  @media (max-width: ${devices.mobile}) {
    display: none;
  }
`;

const StyledIllustration4 = styled(Illustration4)`
  max-width: 100%;
  margin-left: 0rem;

  @media (min-width: ${devices.mobile}) {
    display: none;
  }
`;

const ChallengeCard = styled.div`
  position: absolute;
  min-width: 100%;
  justify-content: flex-end;
  display: flex;
  bottom: 2rem;
  right: 15rem;

  @media (max-width: ${devices.mobile}) {
    display: none;
  }
  @media (max-width: ${devices.tablet}) {
    right: 0;
  }
`;

const IllustrationAndCard = styled.div`
  display: flex;
  position: relative;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  margin-top: 12rem;
`;

const StyledSection = styled.section`
  @media (max-width: ${devices.mobile}) {
    margin-right: 0rem;
    max-width: 100%;
    order: 1;
  }
`;

export default HelpSection;
