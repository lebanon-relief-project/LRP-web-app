import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";
import WhatHappened from "../components/WhatHappenedSection";
import OurMission from "../components/OurMissionSection";
import HelpSection from "../components/HelpSection";

const HomePage = () => {
  return (
    <StyledPage>
      <PageContainer>
        <WhatHappened />
        <OurMission />
        <HelpSection />
      </PageContainer>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
    padding: 5%;
  }
`;

const PageContainer = styled.div`
  max-width: 1440px;
`;

export default HomePage;
