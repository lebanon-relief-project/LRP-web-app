import React from "react";
import styled from "styled-components";
import FooterLink from "./FooterLink";
import FooterImageLink from "./FooterImageLink";
import { PageContainer } from "../styles/GlobalStyles";
import colours from "../styles/Colours";

const Footer = () => {
  return (
    <StyledSection>
      <PageContainer>
        <CardWrapper>
          <FooterLink
            title="I’m looking for help"
            links={["Terms & Conditions", "Privacy policy"]}
          />
          <FooterLink title="About us" links={["What we do", "Contact us"]} />
          <FooterLink
            title="Partnerships"
            links={["How to partner with us", "Working with us"]}
          />
          <FooterImageLink text="Lorem lobortis aliquam leo nisi vita" />
        </CardWrapper>
      </PageContainer>
    </StyledSection>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const StyledSection = styled.section`
  background: ${colours.grey};
  margin: 0;

  min-height: 5%;
`;

export default Footer;
