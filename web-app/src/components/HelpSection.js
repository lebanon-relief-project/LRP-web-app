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
            <StyledBody>
              <Paragraph>
                Everyone reacts differently to trauma, and not everyone recovers
                from a traumatic experience in the same way or time. There is no
                one solution to heal from it.
              </Paragraph>
              <Paragraph>
                Here you can find personalized recommendations, tips and tools
                to help you cope with trauma.
              </Paragraph>
            </StyledBody>
          </Card>
          <Card
            title="I’d like to help"
            path={"#"}
            buttonText="Contact me"
            onClick={() => {
              setLikeToHelpModalVisible(true);
            }}
          >
            <StyledBody>
              <Paragraph>
                Do you have a close one who underwent trauma? Do you need
                direction on how to help, what to say, what to do, and how to
                protect yourself?
              </Paragraph>
              <Paragraph>
                Or do you want to help those who are dealing with trauma, and
                are looking for opportunities to do so?
              </Paragraph>
            </StyledBody>
          </Card>
        </CardWrapper>
        <IllustrationAndCard>
          <StyledIllustration3 />
          <StyledIllustration4 />
          <ChallengeCard>
            <Card
              secondary="true"
              disabled
              title="Try our 14 days of wellbeing"
              path={Routes.HOME}
              buttonText="Coming soon"
            >
              <Paragraph>
                Keep your mind and body engaged by joining our 14 days of
                wellbeing. Created by our team of mental health experts, these
                exercises offer simple daily goals which will help you manage
                negative emotions and reach a more relaxed and positive mindset.
              </Paragraph>
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
  width: 40%;
  @media (max-width: ${devices.ipadpro}) {
    width: 40%;
    right: 0;
  }
  @media (max-width: ${devices.mobile}) {
    position: static;
    width: 100%;
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
