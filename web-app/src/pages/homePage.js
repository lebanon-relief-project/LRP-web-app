import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";
import WhatHappened from "../components/WhatHappenedSection";
import OurMission from "../components/OurMissionSection";
import HelpSection from "../components/HelpSection";
import WellbeingSection from "../components/WellbeingSection";
import colours from "../styles/Colours";

const HomePage = () => {
  return (
    <>
      <StyledPage>
        <PageContainer>
          <WhatHappened />
          <OurMission />
          <HelpSectionWrapper>
            <HelpSection />
          </HelpSectionWrapper>
          <WellbeingSection />
        </PageContainer>
      </StyledPage>
    </>
  );
};

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
  }
`;

const PageContainer = styled.div``;

const HelpSectionWrapper = styled.div`
  background-color: ${colours.lightGrey};
`;

export default HomePage;
