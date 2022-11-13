import React, { useState } from "react";
import styled from "styled-components";

import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import devices from "../../styles/Devices";

import TherapistIcon from "../../assets/images/TherapistIcon.svg";
import LocationIcon from "../../assets/images/Location.svg";
import MessageIcon from "../../assets/images/Message.svg";
import MailIcon from "../../assets/images/Mail.png";
import GlobeIcon from "../../assets/images/Globe.svg";
import PhoneIcon from "../../assets/images/Phone.svg";
import FreeIcon from "../../assets/images/Free.svg";
import GlobalIcon from "../../assets/images/Global.svg";
import VirtualIcon from "../../assets/images/Virtual.svg";

const DirectoryPage = () => {
  return (
    <>
      <StyledPage>
        <Banner />
        <StyledContent>
          <Sidebar />
          <StyledMainArea>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                gap: 20,
                // backgroundColor: "yellow",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.25)",
                borderRadius: 6,
                padding: 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flex: 1,

                  borderBottom: "1px solid #003A8C",
                  paddingBottom: 20,
                  // backgroundColor: "green",
                  gap: 24,
                }}
              >
                <img
                  src={TherapistIcon}
                  width={110}
                  height={110}
                  alt="therapist_icon"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h3>Some Name</h3>
                  <div
                    style={{
                      display: "flex",
                      marginTop: 10,
                      // backgroundColor: "red",
                      columnGap: "20px",
                      rowGap: 10,
                      flexFlow: "wrap",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{ display: "flex", gap: 5, height: "fit-content" }}
                    >
                      <img
                        src={LocationIcon}
                        alt="location_icon"
                        width={20}
                        height={20}
                      />
                      Beirut
                    </div>
                    <div
                      style={{ display: "flex", gap: 5, height: "fit-content" }}
                    >
                      <img
                        src={MessageIcon}
                        alt="location_icon"
                        width={20}
                        height={20}
                      />
                      English, Arabic
                    </div>
                    <div
                      style={{ display: "flex", gap: 5, height: "fit-content" }}
                    >
                      <img
                        src={GlobeIcon}
                        alt="location_icon"
                        width={20}
                        height={20}
                      />
                      www.anthonynorryl.com
                    </div>
                    <div
                      style={{ display: "flex", gap: 5, height: "fit-content" }}
                    >
                      <img
                        src={MailIcon}
                        alt="location_icon"
                        width={20}
                        height={20}
                      />
                      anthonynorryl@email.com
                    </div>
                    <div
                      style={{ display: "flex", gap: 5, height: "fit-content" }}
                    >
                      <img
                        src={PhoneIcon}
                        alt="location_icon"
                        width={20}
                        height={20}
                      />
                      01234 567 890
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  <h4>Bio</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  <h4>Services offered</h4>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 24,
                    }}
                  >
                    <div style={{ display: "flex", flexFlow: "wrap", gap: 8 }}>
                      <Tag>Therapy one</Tag>
                      <Tag>Therapy two</Tag>
                      <Tag>Therapy three</Tag>
                      <Tag>Therapy four</Tag>
                      <Tag>Therapy five</Tag>
                      <Tag>Therapy six</Tag>
                    </div>
                    <div style={{ display: "flex", flexFlow: "wrap", gap: 15 }}>
                      <img
                        src={FreeIcon}
                        height={36}
                        width={36}
                        alt="free_icon"
                      />
                      <img
                        src={GlobalIcon}
                        height={36}
                        width={36}
                        alt="global_icon"
                      />
                      <img
                        src={VirtualIcon}
                        height={36}
                        width={36}
                        alt="virtual_icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StyledMainArea>
        </StyledContent>
      </StyledPage>
    </>
  );
};

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  flex-direction: column;
`;

const Tag = styled.div`
  background: #fff2e8;
  border-radius: 6px;
  padding: 10px 3px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 24px;
  background-color: inherit;
  max-width: 960px;
  width: 100%;
  align-self: center;
  padding-top: 40px;
`;

const StyledMainArea = styled.div`
  grid-column: col-start 5 / span 8;

  div {
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin: 0px;
  }

  h4 {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    margin: 0px;
  }

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
  }

  @media (max-width: ${devices.ipad}) {
    grid-row: 2;
    grid-column: col-start 1 / span 12;
  }
`;

export default DirectoryPage;
