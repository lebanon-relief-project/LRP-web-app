import React from "react";
import styled from "styled-components";
import colours from "../styles/Colours";

const OurMission = () => {
  return (
    <StyledSection>
      <Wrapper>
        <StyledHeader>Our mission</StyledHeader>
        <StyledParagraph>
          Lorem lobortis aliquam leo nisi vitae egestas elit. Tellus ultrices et
          velit luctus. Justo, in mauris pulvinar cursus velit at sollicitudin.
          Eget pretium nunc placerat sed at eget est. Exercitation veniam
          consequat sunt nostrud amet. Pretium nunc placerat sed at eget est.
          Exercitation veniam consequat sunt nostrud amet.
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
  background: ${colours.white};
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledHeader = styled.h2`
  font-weight: bold;
`;

const StyledParagraph = styled.p`
  margin: 0;
`;

export default OurMission;
