import React from "react";
import styled from "styled-components";
import devices from "../../styles/Devices";
import City from "../../assets/images/City.svg";
import Map from "../../assets/images/Map.svg";
import {
  StyledHeader,
  StyledParagraph,
  FlexContainer,
} from "../../styles/GlobalStyles";

const AboutUsSection = () => {
  return (
    <StyledSection>
      <PageContainer>
        <StyledFlexContainer>
          <StyledImage src={City} alt="City" />
          <StyledTextArea>
            <CustomStyledHeader>About us</CustomStyledHeader>
            <StyledParagraph>
              Following the devastating explosion of Beirut’s port in August
              2020, Lebanon Relief Network was founded by six individuals who
              themselves were impacted by the incident and experienced signs of
              trauma. The founding members observed a lack of resources and
              toolsfor the Lebanese community to use to recover from trauma.
            </StyledParagraph>
          </StyledTextArea>
        </StyledFlexContainer>
        <StyledFlexContainer>
          <StyledTextArea>
            <StyledParagraph>
              Joined by volunteers across the world, they worked to fill this
              gap, educate the community, and aid in advancing mental
              well-being. Today, Lebanon Relief Network encompasses a team of
              over 50 volunteers spread all over the world who collectively
              possess a wide range of experiences in combating trauma. <br />{" "}
              <br /> We are continuously building valuable partnerships with
              volunteers and mental health professionals to create a powerful
              network for support and healing. Through our digital platform, we
              produce content informed and validated by experts to offer a safe
              space for healing, offer tools and resources for self-help, and
              foster trauma-related dialogue. The enthusiasm, commitment, and
              resilience of our team is at the core of what Lebanon Relief
              Network stands for.
              <br /> <br /> <b>We are LRN.</b>
            </StyledParagraph>
          </StyledTextArea>
          <StyledImage src={Map} alt="Map" />
        </StyledFlexContainer>
      </PageContainer>
    </StyledSection>
  );
};

const CustomStyledHeader = styled(StyledHeader)`
  padding-top: 10%;

  @media (max-width: ${devices.mobile}) {
    padding-top: 0;
  }
`;

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;

  width: calc(100vw);
  margin-left: 50%;
  transform: translateX(-50%);
`;

const PageContainer = styled.div`
  max-width: 1440px;
  margin-top: 80px;

  padding: 0 240px;

  @media (max-width: ${devices.ipadpro}) {
    padding: 0 18px;
  }
`;

const StyledTextArea = styled.div`
  position: relative;
  width: 50%;

  @media (max-width: ${devices.mobile}) {
    right: 0;
    width: 100%;
    order: 2;
  }
`;

const StyledFlexContainer = styled(FlexContainer)``;

const StyledImage = styled.img`
  object-fit: contain;
  margin: 2%;
  max-width: 60%;
  @media (max-width: ${devices.ipad}) {
    width: 80%;
  }
  @media (max-width: ${devices.mobile}) {
    width: 100%;
    max-width: 100%;
    padding-left: 0rem;
  }
`;

export default AboutUsSection;
