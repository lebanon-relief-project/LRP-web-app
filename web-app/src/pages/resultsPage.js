import React, { useEffect, useState } from "react";
import styled from "styled-components";
import devices from "../styles/Devices";
import ExperiencesSection from "../components/resultsPage/ExperiencesSection";
import ResultsSection from "../components/resultsPage/ResultsSection";
import { getCardIdsFromSessionStorage } from "../util/util";
import { getResults } from "../services/results.service";

const ResultsPage = () => {
  const [results, setResults] = useState(undefined);
  const fetchResults = async () => {
    let ids = getCardIdsFromSessionStorage();
    let response = undefined;

    try {
      response = await getResults(ids);
      setResults(response ? response : undefined);
    } catch (exception) {
      // do nothing
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);
  return (
    <StyledPage>
      <div style={{ width: "100%" }}>
        <ExperiencesSection />
        {results ? <ResultsSection results={results} /> : <></>}
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
