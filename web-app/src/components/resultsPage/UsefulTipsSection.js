import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colours from "../../styles/Colours";
import devices from "../../styles/Devices";
import PersonTakingCare from "../../assets/images/PersonTakingCare.svg";
import { getUsefulTips } from "../../services/results.service";

export const UsefulTipsSection = () => {
  const [usefulTips, setUsefulTips] = useState();

  const fetchUsefulTips = async () => {
    const response = await getUsefulTips();
    setUsefulTips(response);
  };

  useEffect(() => {
    fetchUsefulTips();
  }, []);

  return (
    <Wrapper>
      <StyledDiv>
        <div>
          <Title>A few more useful tips</Title>
          {usefulTips &&
            usefulTips.usefulTips.map((tip, i) => (
              <div key={i}>
                <h3>{tip.title}</h3>
                <p>{tip.body}</p>
              </div>
            ))}
        </div>
        <div>
          <img src={PersonTakingCare} alt={"Person Taking Care"} />
        </div>
      </StyledDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0 16.7%;
  background: inherit;
  background: ${colours.lightGrey};

  @media (max-width: ${devices.ipadpro}) {
    margin: 25px 18px;
    padding-top: 0px;
    padding-bottom: 0px;
    width: auto;
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 5%;

  @media (max-width: ${devices.ipadpro}) {
    flex-direction: column;
    padding: 0;
    border-radius: 0;
    margin: 0 16px;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: ${devices.mobile}) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
`;

export default UsefulTipsSection;
