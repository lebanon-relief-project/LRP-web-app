import React from "react";

import styled from "styled-components";
import colours from "../styles/Colours";
import devices from "../styles/Devices";
import { ReactComponent as Illustration1 } from "../assets/images/Illustration1.svg";

const WhatHappened = () => {
  return (
    <StyledSection>
      <Wrapper>
        <FlexContainer>
          <div>
            <StyledIllustration />
          </div>
          <div>
            <StyledHeader>What Happened</StyledHeader>
            <StyledParagraph>
              On August 4 an explosion shook Beirut. It was the largest
              non-nuclear explosion ever recorded. That day 200 people died,
              6,500 were injured, and 300,000 were left homeless. This project
              was developed to support those affected and provide a platform for
              the community to come together and help each other heal.
            </StyledParagraph>
          </div>
        </FlexContainer>
      </Wrapper>
    </StyledSection>
  );
};

const StyledTextArea = styled.div`
margin:-top: 6rem;
`;

const StyledIllustration = styled(Illustration1)`
  @media (max-width: ${devices.mobile}) {
    max-width: 100%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  background: inherit;
`;

const StyledSection = styled.section`
  margin: 0;
  padding: 0;
`;

const StyledHeader = styled.h2`
  font-weight: bold;
`;

const StyledParagraph = styled.p`
  margin: 0;
  flex-direction: row;
`;

export default WhatHappened;
