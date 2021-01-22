import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colours from "../../styles/Colours";
import devices from "../../styles/Devices";
import ResultsPageLeftBackground from "../../assets/images/background/ResultsPageLeftBackground.svg";
import ResultsPageRightBackground from "../../assets/images/background/ResultsPageRightBackground.svg";
import FilledPerson from "../../assets/images/FilledPerson.svg";
import EmptyPerson from "../../assets/images/EmptyPerson.svg";
import { getPercentage } from "../../services/results.service";

const ExperiencesSection = () => {
  const [percentage, setPercentage] = useState();
  const [peopleData, setPeopleData] = useState([]);

  const getFullToEmptyPeopleRatio = (roundedFullPeople, roundedEmptyPeople) => {
    const peopleData = [];
    for (let i = 0; i < roundedFullPeople; i++) {
      peopleData.push({ src: FilledPerson, alt: "Filled Person" });
    }
    for (let i = 0; i < roundedEmptyPeople; i++) {
      peopleData.push({ src: EmptyPerson, alt: "Empty Person" });
    }
    return peopleData;
  };

  useEffect(() => {
    const fetchPercentage = async () => {
      const response = await getPercentage();
      setPercentage(response.default_percentage * 100);
      const roundedFullPeople = (response.default_percentage * 10).toFixed(0);
      const roundedEmptyPeople = 10 - roundedFullPeople;
      const peopleData = getFullToEmptyPeopleRatio(
        roundedFullPeople,
        roundedEmptyPeople
      );

      setPeopleData(peopleData);
    };
    fetchPercentage();
  }, []);
  return (
    <StyledSection>
      <HeaderWrapper>
        <HeaderLeftImageWrapper>
          <img src={ResultsPageLeftBackground} alt={"background"} />
        </HeaderLeftImageWrapper>

        <HeaderRightImageWrapper>
          <img src={ResultsPageRightBackground} alt={"background"} />
        </HeaderRightImageWrapper>
      </HeaderWrapper>

      <CentralWrapper>
        <CentralContentWrapper>
          <StyledHeader>From the experiences you've shared...</StyledHeader>
          <TextWrapper>
            <StyledDiv>
              We have pulled together some tailored advice and exercises to help
              you cope with trauma and how you are feeling.
            </StyledDiv>
            <StyledDiv>
              {peopleData.map((person, i) => (
                <Person
                  key={i}
                  src={person.src}
                  alt={person.alt}
                  data-testid={`resultsPercentage_image_${i}`}
                />
              ))}
            </StyledDiv>
            <StyledDiv>
              <FlexBox>
                <PercentageNumber>{percentage}%</PercentageNumber>
                <PercentageText>
                  of people affected by this experience feel like ictum nullam
                  ligula lorem ut vitae. Purus blandit imperdiet nibh amet.
                </PercentageText>
              </FlexBox>
            </StyledDiv>
          </TextWrapper>
        </CentralContentWrapper>
      </CentralWrapper>
    </StyledSection>
  );
};

const Person = styled.img`
  margin-right: 20px;
`;

const PercentageNumber = styled.div`
  font-family: Raleway;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 46px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 2%;
`;

const PercentageText = styled.div`
  width: 60%;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const FlexBox = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const CentralWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 2;
  background-color: transparent;
  justify-content: center;
  position: absolute;
  align-items: flex-start;
  height: 363px;
  width: 100%;

  @media (max-width: ${devices.mobile}) {
    margin-top: 20px;
    height: 371px;
  }
`;

const CentralContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-left: 16.7%;
  max-width: 765px;

  @media (max-width: ${devices.mobile}) {
    margin-left: 18px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex: 1;
  z-index: 1;
  justify-content: space-between;
`;

const HeaderLeftImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${devices.ipadpro}) {
    display: none;
  }
`;

const HeaderRightImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${devices.ipadpro}) {
    display: none;
  }
`;

const StyledSection = styled.div`
  display: flex;
  background: ${colours.darkBlue};
  margin: 0;
  margin-top: 64px;
  padding: 0;
  width: 100%;
  height: 363px;
  z-index: 0;

  @media (max-width: ${devices.mobile}) {
    height: 416px;
  }
`;

const StyledHeader = styled.h2`
  font-weight: bold;
  font-size: 38px;
  margin: 0;
  width: inherit;
  color: ${colours.white};
`;

const StyledDiv = styled.div`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 16px;
  color: ${colours.white};
`;

export default ExperiencesSection;
