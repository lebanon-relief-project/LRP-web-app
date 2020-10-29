import React from "react";

import styled from "styled-components";
import colours from "../styles/Colours";

const WhatHappened = () => {
  return (
    <StyledSection>
      <Wrapper>
        <StyledHeader>Traumatic Events</StyledHeader>
        <TextWrapper>
          <StyledParagraph>
            The explosion is a traumatic event. It affected those that were in
            Beirut at the time, people all over Lebanon, the Lebanese abroad,
            and those who know someone that was affected.
          </StyledParagraph>
          <StyledParagraph>
            All these individuals, regardless of whether they were in Beirut at
            the time of the explosion or whether they were directly impacted by
            the explosion can experience traumatic stress as a result of it.
          </StyledParagraph>
          <StyledParagraph>
            Traumatic stress is changes in how one feels, thinks, or behaves as
            a result of trauma. It is a normal reaction to an abnormal event.
          </StyledParagraph>
        </TextWrapper>
      </Wrapper>
    </StyledSection>
  );
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 1rem;
`;

const Wrapper = styled.div`
  width: 50%;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  margin: 0 16.7%;
  background: inherit;
`;

const StyledSection = styled.section`
  background: ${colours.lightGrey};
  margin: 0;
  padding: 0;
`;

const StyledHeader = styled.h2`
  font-weight: bold;
  font-size: 38px;
  margin: 0;
`;

const StyledParagraph = styled.p`
  margin: 0;
  font-size: 16px;
`;

export default WhatHappened;
