import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";
import WhatHappened from "../components/WhatHappenedSection";
import OurMission from "../components/OurMissionSection";
import HelpSection from "../components/HelpSection";

const HomePage = () => {
  return (
    <StyledPage>
      <WhatHappened />
      <OurMission />
      <HelpSection />
    </StyledPage>
  );
};

const StyledPage = styled.div`
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
    padding: 5%;
  }
`;

export default HomePage;
