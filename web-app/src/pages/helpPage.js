import React from "react";
import TraumaticEventsSection from "../components/TraumaticEventsSection";
import FeelingsSection from "../components/FeelingsSection";
import FlashCardsSection from "../components/FlashCardsSection";
import styled from "styled-components";

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

const PageContainer = styled.div`
  max-width: 1440px;
`;

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
`;

export default HelpPage;
