import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import devices from "../styles/Devices";
import ExperiencesSection from "../components/resultsPage/ExperiencesSection";
import ResultsSection from "../components/resultsPage/ResultsSection";
import UsefulTipsSection from "../components/resultsPage/UsefulTipsSection";
import ActionsSection from "../components/resultsPage/ActionsSection";
import { getCardIdsFromSessionStorage } from "../util/util";
import { getResults } from "../services/results.service";
import { useHistory } from "react-router-dom";

const ResultsPage = () => {
  let history = useHistory();
  const [results, setResults] = useState(undefined);

  const sessionStorageNotEmpty = useRef(
    getCardIdsFromSessionStorage().length > 0
  );

  useEffect(() => {
    const fetchResults = async () => {
      let response = undefined;
      let ids = getCardIdsFromSessionStorage();

      if (!ids.length > 0) {
        history.push("/help");
        return;
      }

      try {
        response = await getResults(ids);
        setResults(response ? response : undefined);
      } catch (exception) {
        console.log("failed to fetch results");
      }
    };
    fetchResults();
  }, [history]);

  const renderResultsPage = () => {
    return (
      <StyledPage>
        <div style={{ width: "100%" }}>
          <ExperiencesSection />

          {results ? <ResultsSection results={results} /> : <></>}
          <UsefulTipsSection />
          <ActionsSection />
        </div>
      </StyledPage>
    );
  };

  return <>{sessionStorageNotEmpty.current ? renderResultsPage() : null}</>;
};

const StyledPage = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
  }
`;

export default ResultsPage;
