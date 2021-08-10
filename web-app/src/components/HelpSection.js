import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import LikeToHelpModal from "./LikeToHelpModal";
import { Routes } from "../App.js";
import colours from "../styles/Colours";
import devices from "../styles/Devices";

const HelpSection = () => {
  const [likeToHelpModalVisible, setLikeToHelpModalVisible] = useState(false);
  return (
    <>
      <StyledSection>
        <PageContainer>
          <CardWrapper>
            {/* I'm looking for self-help */}
            <StyledCard
              title="I'm looking for self-help"
              path={Routes.HELP}
              buttonText="Give me advice"
            >
              <StyledBody>
                <Paragraph>
                  Everyone reacts differently to trauma, and not everyone
                  recovers from a traumatic experience in the same way. There
                  are countless ways to resolve trauma and overcome it.
                </Paragraph>
                <Paragraph>
                  Here you can find personalized self-help recommendations,
                  tips, and tools to help you cope with trauma in your own time
                  and at your own pace.
                </Paragraph>
              </StyledBody>
            </StyledCard>

            {/* I'd like to help */}
            <StyledCard
              title="I’d like to help"
              path={"#"}
              buttonText="Contact me"
              onClick={() => {
                setLikeToHelpModalVisible(true);
              }}
            >
              <StyledBody>
                <Paragraph>
                  Do you know someone who experienced or is experiencing trauma?
                  Do you need direction on how to help, what to say, what to do,
                  and how to protect yourself?
                </Paragraph>
                <Paragraph>
                  Or are you looking for volunteer opportunities in your
                  community to help those impacted by a traumatic event?
                </Paragraph>
              </StyledBody>
            </StyledCard>

            {/* I'd like to talk to someone */}
            <StyledCard
              title="I'd like to talk to someone"
              path={"#"}
              buttonText="Coming soon"
              onClick={() => {}}
              disabled
            >
              <StyledBody>
                <Paragraph>
                  Sometimes, self-help is not enough, and you might prefer a
                  professional hand to help you cope with trauma.
                </Paragraph>
                <Paragraph>
                  We created a directory of mental health experts to help you
                  find and connect to the therapist, counselling service, or
                  organization that resonates best with you.
                </Paragraph>
              </StyledBody>
            </StyledCard>
          </CardWrapper>
        </PageContainer>
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

const StyledBody = styled.div`
  min-height: 17rem;
`;

const Paragraph = styled.p`
  font-family: Raleway;
  font-style: normal;

  font-size: 16px;
  line-height: 150%;
  color: #262626;
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
  z-index: 1;
`;

const StyledCard = styled(Card)`
  legend {
    width: auto;
    margin: 0 auto;
  }
  @media (max-width: ${devices.ipadpro}) {
    min-width: 75%;
  }
`;

// The width, margin-left and transform fields are to allow the background colour to escape the
// page max-width of 1440px
const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  background: inherit;
  margin: 0;
  padding: 0 3rem;
  width: calc(100vw);
  margin-left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${devices.mobile}) {
    margin-right: 0rem;
    max-width: 100%;
    order: 1;
    margin-top: 0;
  }
`;

const PageContainer = styled.div`
  max-width: 1440px;
`;

export default HelpSection;
