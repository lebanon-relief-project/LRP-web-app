import React, { useEffect } from "react";
import styled from "styled-components";
import { getCardIdsFromSessionStorage } from "../util/util";
import devices from "../styles/Devices";

const ResultsPage = () => {
  useEffect(() => {
    const ids = getCardIdsFromSessionStorage();
  }, []);

  return (
    <>
      <h1>Results!</h1>
    </>
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
