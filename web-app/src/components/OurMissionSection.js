import React from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import devices from "../styles/Devices";
import { ReactComponent as Illustration2 } from "../assets/images/Illustration2.svg";

const OurMission = () => {
  return (
    <StyledSection>
      <Wrapper>
        <FlexContainer>
          <StyledTextArea>
            <StyledHeader>Our mission</StyledHeader>
            <StyledParagraph>
              Lorem lobortis aliquam leo nisi vitae egestas elit. Tellus
              ultrices et velit luctus. Justo, in mauris pulvinar cursus velit
              at sollicitudin. Eget pretium nunc placerat sed at eget est.
              Exercitation veniam consequat sunt nostrud amet. Pretium nunc
              placerat sed at eget est. Exercitation veniam consequat sunt
              nostrud amet.
            </StyledParagraph>
          </StyledTextArea>
          <div>
            <StyledIllustration />
          </div>
        </FlexContainer>
      </Wrapper>
    </StyledSection>
  );
};

const StyledTextArea = styled.div`
  @media (max-width: ${devices.mobile}) {
    order: 2;
  }
`;

const StyledIllustration = styled(Illustration2)`
  @media (max-width: ${devices.mobile}) {
    max-width: 100%;
    order: 1;
  }
`;

const Wrapper = styled.div`
  background: inherit;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
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
`;

const StyledParagraph = styled.p`
  margin: 0;
`;

export default OurMission;
