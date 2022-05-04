import React from "react";
import styled from "styled-components";
import devices from "../../../styles/Devices";

const Banner = () => {
  return (
    <>
      <BannerBox>
        <BannerContent>
          <BannerTitle>Directory of Mental Health Experts</BannerTitle>
          <BannerText>
            The DMHE is a service provided by Lebanon Relief Network. In
            Lebanon, there are many dedicated psychotrauma experts and services
            available. Please use one or more of the following fields to search
            for the mental health expert offering the service you require. NB.
            The information is up to date but not updated regularly.
          </BannerText>
          <BannerText>
            NB. The information is up to date but not updated regularly.
          </BannerText>
        </BannerContent>
      </BannerBox>
    </>
  );
};

const BannerBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: #002766;
  flex: 1;
  height: 276px;
  @media (max-width: ${devices.mobile}) {
    height: auto;
  }
  margin-top: 80px;
  color: white;
`;

const BannerContent = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex: 1;
  padding-top: 40px;
  padding-bottom: 40px;
  flex-direction: column;

  @media (max-width: ${devices.mobile}) {
    padding: 18px;
    padding-top: 20px;
    padding-bottom: 25px;
  }
`;

const BannerTitle = styled.h1`
  color: white;
  font-size: 38px;
  line-height: 46px;
  font-weight: 900;

  @media (max-width: ${devices.mobile}) {
    font-size: 30px;
    line-height: 38px;
  }
`;

const BannerText = styled.p`
  max-width: 632px;
  width: 100%;
  margin: 0;
  margin-top: 15px;
  padding: 0;
`;

export default Banner;
