import React, { useState, useEffect, useCallback, useMemo } from "react";
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
import {
  getTherapists,
  getTherapistLocations,
} from "../../services/therapists.service";

import { useMediaQuery } from "react-responsive";

const TherapistCard = (props) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });

  if (isTabletOrMobile)
    return (
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
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            backgroundColor: "#BAE7FF",
            padding: "0px 0px 0px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontSize: 16,
              lineHeight: "24px",
            }}
          >
            {props.legalPersonality}{" "}
          </div>
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "15px solid transparent",
              borderRight: "10px solid #FFFFFF",
              borderBottom: "15px solid transparent",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            borderBottom: "1px solid #003A8C",
            paddingBottom: 20,
            // backgroundColor: "green",
            gap: 24,
            marginTop: 60,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 8,
            }}
          >
            <img
              src={props.avatar}
              width={110}
              style={{ objectFit: "contain", alignSelf: "center" }}
              alt="therapist_icon"
            />
            <h3>{props.name}</h3>
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
              <div style={{ display: "flex", gap: 5, height: "fit-content" }}>
                <img
                  src={LocationIcon}
                  alt="location_icon"
                  width={20}
                  height={20}
                />
                {props.location}
              </div>
              <div style={{ display: "flex", gap: 5, height: "fit-content" }}>
                <img
                  src={MessageIcon}
                  alt="location_icon"
                  width={20}
                  height={20}
                />
                {props.languages && props.languages.join(", ")}
              </div>
              <div style={{ display: "flex", gap: 5, height: "fit-content" }}>
                <img
                  src={GlobeIcon}
                  alt="location_icon"
                  width={20}
                  height={20}
                />
                <a target="_blank" href={props.website}>
                  {props.website}
                </a>
              </div>
              <div style={{ display: "flex", gap: 5, height: "fit-content" }}>
                <img
                  src={MailIcon}
                  alt="location_icon"
                  width={20}
                  height={20}
                />

                <a href={`mailto:${props.email}`} target="_blank">
                  {props.email}
                </a>
              </div>
              <div style={{ display: "flex", gap: 5, height: "fit-content" }}>
                <img
                  src={PhoneIcon}
                  alt="location_icon"
                  width={20}
                  height={20}
                />
                <a href={`tel: ${props.phoneNumber}`}>{props.phoneNumber}</a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            // gridTemplateRows: "1fr 1fr",
            gridAutoRows: "minmax(100px, auto)",
            rowGap: 10,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <h4>Bio</h4>
            <p>{props.bio}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <h4>Services offered</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div style={{ display: "flex", flexFlow: "wrap", gap: 8 }}>
                {props.therapyServices &&
                  Object.keys(props.therapyServices).map((key, index) => {
                    if (props.therapyServices[key] === true) {
                      return <Tag key={index}>{key}</Tag>;
                    }
                  })}
              </div>
              <div style={{ display: "flex", flexFlow: "wrap", gap: 15 }}>
                {props.freeService && (
                  <img
                    src={FreeIcon}
                    height={36}
                    width={36}
                    alt="free_icon"
                    title="Free service"
                  />
                )}
                {props.internationalPaymentsOnly && (
                  <img
                    src={GlobalIcon}
                    height={36}
                    width={36}
                    alt="global_icon"
                    title="Internation payments only"
                  />
                )}
                {props.remoteSession && (
                  <img
                    src={VirtualIcon}
                    height={36}
                    width={36}
                    alt="virtual_icon"
                    title="Remote sessions"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  if (!isTabletOrMobile)
    return (
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
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            backgroundColor: "#BAE7FF",
            padding: "0px 10px 0px 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "15px solid transparent",
              borderLeft: "10px solid #FFFFFF",
              borderBottom: "15px solid transparent",
            }}
          ></div>
          <div
            style={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontSize: 16,
              lineHeight: "24px",
            }}
          >
            {props.legalPersonality}{" "}
          </div>
        </div>
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
            src={props.avatar}
            width={110}
            style={{ objectFit: "contain" }}
            alt="therapist_icon"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <h3>{props.name}</h3>
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
              <div style={{ display: "flex", gap: 5, height: "fit-content" }}>
                <img
                  src={LocationIcon}
                  alt="location_icon"
                  width={20}
                  height={20}
                />
                {props.location}
              </div>
              <div style={{ display: "flex", gap: 5, height: "fit-content" }}>
                <img
                  src={MessageIcon}
                  alt="location_icon"
                  width={20}
                  height={20}
                />
                {props.languages && props.languages.join(", ")}
              </div>
              <div style={{ display: "flex", gap: 5, height: "fit-content" }}>
                <img
                  src={GlobeIcon}
                  alt="location_icon"
                  width={20}
                  height={20}
                />
                <a target="_blank" href={props.website}>
                  {props.website}
                </a>
              </div>
              <div style={{ display: "flex", gap: 5, height: "fit-content" }}>
                <img
                  src={MailIcon}
                  alt="location_icon"
                  width={20}
                  height={20}
                />

                <a href={`mailto:${props.email}`} target="_blank">
                  {props.email}
                </a>
              </div>
              <div style={{ display: "flex", gap: 5, height: "fit-content" }}>
                <img
                  src={PhoneIcon}
                  alt="location_icon"
                  width={20}
                  height={20}
                />
                <a href={`tel: ${props.phoneNumber}`}>{props.phoneNumber}</a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: 10,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <h4>Bio</h4>
            <p>{props.bio}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <h4>Services offered</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <div style={{ display: "flex", flexFlow: "wrap", gap: 8 }}>
                {props.therapyServices &&
                  Object.keys(props.therapyServices).map((key, index) => {
                    if (props.therapyServices[key] === true) {
                      return <Tag key={index}>{key}</Tag>;
                    }
                  })}
              </div>
              <div style={{ display: "flex", flexFlow: "wrap", gap: 15 }}>
                {props.freeService && (
                  <img
                    src={FreeIcon}
                    height={36}
                    width={36}
                    alt="free_icon"
                    title="Free service"
                  />
                )}
                {props.internationalPaymentsOnly && (
                  <img
                    src={GlobalIcon}
                    height={36}
                    width={36}
                    alt="global_icon"
                    title="Internation payments only"
                  />
                )}
                {props.remoteSession && (
                  <img
                    src={VirtualIcon}
                    height={36}
                    width={36}
                    alt="virtual_icon"
                    title="Remote sessions"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

const DirectoryPage = () => {
  const [therapists, setTherapists] = useState([]);
  const [therapistLocations, setTherapistLocations] = useState([]);

  const therapistsResultsCount = useMemo(() => therapists.length, [therapists]);

  const retrieveTherapists = async (filter) => {
    if (filter) {
      let adaptedFilter = {};

      for (let filterKey in filter) {
        if (filter[filterKey].options) {
          adaptedFilter[filterKey] = filter[filterKey].options
            .filter((option) => option.selected === true)
            .map((option) => option.value);
        } else if (filter[filterKey].value) {
          adaptedFilter[filterKey] = [filter[filterKey].value];
        } else if (filter[filterKey].selectValue) {
          adaptedFilter[filterKey] = [filter[filterKey].selectValue];
        }
      }

      const result = await getTherapists(adaptedFilter);
      setTherapists(result);
    } else {
      const result = await getTherapists();
      setTherapists(result);
    }
  };

  const retrieveTherapistLocations = async () => {
    try {
      const result = await getTherapistLocations();
      setTherapistLocations(result);
    } catch (error) {
      console.error("Failed to retrieve therapist locations:", error);
      setTherapistLocations([]);
    }
  };

  useEffect(() => {
    retrieveTherapists();
    retrieveTherapistLocations();
  }, []);

  const TherapistsList = useCallback(() => {
    if (therapists && therapists.length > 0) {
      return (
        <div style={{ display: "flex", flexDirection: "column", rowGap: 24 }}>
          {therapists.map((therapistData) => {
            return (
              <TherapistCard
                name={therapistData.firstName + " " + therapistData.lastName}
                bio={therapistData.bio}
                location={therapistData.location}
                languages={therapistData.languages}
                website={therapistData.website}
                email={therapistData.email}
                phoneNumber={therapistData.phoneNumber}
                therapyServices={therapistData.therapyServices}
                avatar={therapistData.picture}
                legalPersonality={therapistData.legalPersonality}
                freeService={therapistData.freeService}
                internationalPaymentsOnly={
                  therapistData.internationalPaymentsOnly
                }
                f2fSession={therapistData.f2fSession}
                remoteSession={therapistData.remoteSession}
              />
            );
          })}
        </div>
      );
    } else {
      return <div>No therapists found</div>;
    }
  }, [therapists]);

  return (
    <>
      <StyledPage>
        <Banner />
        <StyledContent>
          {therapistLocations.length > 0 && (
            <FiltersContainer>
              <Sidebar
                resultsCount={therapistsResultsCount}
                onFilterChange={(filter) => {
                  retrieveTherapists(filter);
                }}
                locations={therapistLocations}
              />
            </FiltersContainer>
          )}
          <StyledMainArea>
            <TherapistsList />
          </StyledMainArea>
        </StyledContent>
      </StyledPage>
    </>
  );
};

const FiltersContainer = styled.div`
  grid-column: col-start / span 4;

  @media (max-width: ${devices.ipad}) {
    grid-row: 1;
    grid-column: col-start 1 / span 12;
  }
`;

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
  font-size: 14px;
  line-height: 16px;
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
    line-height: 22px;
    margin: 0px;
  }

  @media (max-width: ${devices.ipad}) {
    grid-row: 2;
    grid-column: col-start 1 / span 12;
    margin-left: 18px;
    margin-right: 18px;
  }
`;

export default DirectoryPage;
