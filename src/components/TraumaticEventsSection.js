import React from "react";

import styled from "styled-components";
import colours from "../styles/Colours";

const WhatHappened = () => {
    return (
        <StyledSection>
            <Wrapper>
                <StyledHeader>Traumatic Events</StyledHeader>
                <StyledParagraph>
                    The explosion is a traumatic event. It affected those that were in Beirut at the time, people all over
                    Lebanon, the Lebanese abroad, and those who know someone that was affected.

                    All these individuals, regardless of whether they were in Beirut at the time of the explosion or whether
                    they were directly impacted by the explosion can experience traumatic stress as a result of it.

                    Traumatic stress is changes in how one feels, thinks, or behaves as a result of trauma.
                    It is a normal reaction to an abnormal event.
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