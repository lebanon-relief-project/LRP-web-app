import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import LikeToHelpModal from "./LikeToHelpModal";
import { Routes } from "../App.js";
import { ReactComponent as Illustration3 } from "../assets/images/Illustration3.svg";
import { ReactComponent as Illustration4 } from "../assets/images/Illustration4.svg";
import devices from "../styles/Devices";

const HelpSection = () => {
  const [likeToHelpModalVisible, setLikeToHelpModalVisible] = useState(false);
  return (
    <>
      <StyledSection>
        <CardWrapper>
          <Card
            title="I’m looking for help"
            path={Routes.HELP}
            buttonText="Give me advice"
          >
            <Paragraph>
              Everyone deals with trauma differently. Every experience is
              different, and everyone copes differently. There isn’t a “one fits
              all solution” when it comes to healing.
            </Paragraph>
            <Paragraph>
              Our ambition is to help deal with trauma through surfacing the
              right tools based on each person’s needs.
            </Paragraph>
          </Card>
          <Card
            title="I’d like to help"
            path={"#"}
            buttonText="Contact me"
            onClick={() => {
              setLikeToHelpModalVisible(true);
            }}
          >
            <Paragraph>
              Do you have a close one who underwent trauma, but you need
              direction on how to help, what to say, what to do and how to
              protect yourself?
            </Paragraph>
            <Paragraph>
              Or do you want to help those who are undergoing trauma and looking
              for opportunities to do so?
            </Paragraph>
          </Card>
        </CardWrapper>
        <IllustrationAndCard>
          <StyledIllustration3 />
          <StyledIllustration4 />
          <ChallengeCard>
            <Card
              secondary="true"
              disabled
              title="Try our 14 days of Wellbeing"
              path={Routes.HOME}
              buttonText="Coming soon"
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
      {likeToHelpModalVisible && (
        <LikeToHelpModal
          closeModal={() => {
            setLikeToHelpModalVisible(false);
          }}
        />
      )}
    </>
  );
};

const Paragraph = styled.p`
  font-family: Raleway;
  font-style: normal;

  font-size: 16px;
  line-height: 150%;
  color: #262626;
`;

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
  display: flex;
  bottom: 2rem;
  right: 23%;

  @media (max-width: ${devices.mobile}) {
    position: static;
  }

  @media (max-width: ${devices.ipadpro}) {
    right: 0;
  }
`;

const IllustrationAndCard = styled.div`
  @media (min-width: ${devices.mobile}) {
    display: flex;
    position: relative;
  }
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
  margin-top: 8rem;
`;

const StyledSection = styled.section`
  position: relative;
  margin-top: -8%;
  @media (max-width: ${devices.mobile}) {
    margin-right: 0rem;
    max-width: 100%;
    order: 1;
    margin-top: 0;
  }
`;

export default HelpSection;
