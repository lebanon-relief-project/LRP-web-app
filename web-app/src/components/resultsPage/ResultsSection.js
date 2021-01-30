import React from "react";
import styled from "styled-components";
import colours from "../../styles/Colours";
import devices from "../../styles/Devices";
import { FlashCardResultContainer } from "./FlashCardResultContainer";
import { sampleResultsResponse } from "../../sampleData";

const ResultsSection = (params) => {
  return (
    <StyledSection>
      <Wrapper id={"wrapper"}>
        <StyledHeader>Here’s some things that can help</StyledHeader>

        <ContentWrapper id={"content"}>
          {params.results ? (
            <FlashCardResultContainer results={params.results} />
          ) : (
            <></>
          )}
        </ContentWrapper>
      </Wrapper>
    </StyledSection>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 652px;
  min-width: 960px;
`;

const Wrapper = styled.div`
  width: 60%;
  min-width: 960px;
  min-height: 730px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0 16.7%;
  background: inherit;

  @media (max-width: ${devices.mobile}) {
    margin: 25px 18px;
    padding-top: 0px;
    padding-bottom: 0px;
    width: auto;
  }
`;

const StyledSection = styled.section`
  background: ${colours.white};
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledHeader = styled.h2`
  font-weight: bold;
  font-size: 24px;
`;

export default ResultsSection;
