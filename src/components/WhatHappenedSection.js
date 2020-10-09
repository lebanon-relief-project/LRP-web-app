import React from "react";

import styled from "styled-components";
import colours from "../styles/Colours";

const WhatHappened = () => {
  return (
    <StyledSection>
      <Wrapper>
        <StyledHeader>What Happened</StyledHeader>
        <StyledParagraph>
          On August 4 an explosion shook Beirut. It was the largest non-nuclear
          explosion ever recorded. That day 200 people died, 6,500 were injured,
          and 300,000 were left homeless. This project was developed to support
          those affected and provide a platform for the community to come
          together and help each other heal.
        </StyledParagraph>
      </Wrapper>
    </StyledSection>
  );
};

const Wrapper = styled.div`
  width: 50%;
  padding: 5rem 1rem;
  margin: 0 12rem;
  background: inherit;
`;

const StyledSection = styled.section`
  background: ${colours.lightGrey};
  margin: 0;
  padding: 0;
`;

const StyledHeader = styled.h2`
  font-weight: bold;
`;

const StyledParagraph = styled.p`
  margin: 0;
`;

export default WhatHappened;
