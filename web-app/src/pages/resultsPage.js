import React, { useEffect } from "react";
import styled from "styled-components";
import { getCardIdsFromSessionStorage } from "../util/util";
import devices from "../styles/Devices";
import ExperiencesSection from "../components/ExperiencesSection";
import ResultsSection from "../components/ResultsSection";

const ResultsPage = () => {
  useEffect(() => {
    const ids = getCardIdsFromSessionStorage();
  }, []);

  return (
    <StyledPage>
      <div style={{ width: "100%" }}>
        <ExperiencesSection />
        <ResultsSection />
      </div>
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

export default ResultsPage;
