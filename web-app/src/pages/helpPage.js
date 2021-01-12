import React from "react";
import styled from "styled-components";
import TraumaticEventsSection from "../components/TraumaticEventsSection";
import FeelingsSection from "../components/FeelingsSection";
import FlashCardsSection from "../components/FlashCardsSection";

const HelpPage = () => {
  return (
    <StyledPage>
      <PageContainer>
        <TraumaticEventsSection />
        <FeelingsSection />
        <FlashCardsSection />
      </PageContainer>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
`;

const PageContainer = styled.div`
  max-width: 1440px;
`;

export default HelpPage;
