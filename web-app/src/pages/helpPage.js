import React from "react";
import TraumaticEventsSection from "../components/TraumaticEventsSection";
import FeelingsSection from "../components/FeelingsSection";
import FlashCardsSection from "../components/FlashCardsSection";
import ContactUsSection from "../components/ContactUsSection";
import styled from "styled-components";

const HelpPage = () => {
  return (
    <StyledPage>
      <div>
        <TraumaticEventsSection />
        <FeelingsSection />
        <FlashCardsSection />
        <ContactUsSection />
      </div>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
`;

export default HelpPage;
