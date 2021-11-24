import React from "react";
import HelpSection from "../components/HelpSection";
import AboutUsSection from "../components/aboutPage/AboutUsSection";
import OurValuesSection from "../components/aboutPage/OurValuesSection";
import styled from "styled-components";
import colours from "../styles/Colours";

const AboutPage = () => {
  return (
    <>
      <AboutUsSection />
      <OurValuesSection />
      <HelpSectionWrapper>
        <HelpSection />
      </HelpSectionWrapper>
    </>
  );
};

const HelpSectionWrapper = styled.div`
  background-color: ${colours.white};
`;

export default AboutPage;
