import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import LocationIcon from "../../../assets/images/Location.svg";
import MessageIcon from "../../../assets/images/Message.svg";
import MailIcon from "../../../assets/images/Mail.png";
import GlobeIcon from "../../../assets/images/Globe.svg";
import PhoneIcon from "../../../assets/images/Phone.svg";
import FreeIcon from "../../../assets/images/Free.svg";
import GlobalIcon from "../../../assets/images/Global.svg";
import VirtualIcon from "../../../assets/images/Virtual.svg";

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

// Styled components
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 30px;
  position: relative;
  grid-template-areas: "header" "main" "info";
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.isMobile ? "0" : "unset")};
  right: ${(props) => (props.isMobile ? "unset" : "0")};
  background-color: #bae7ff;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 60px;
  border-bottom: 1px solid #003a8c;
  padding-bottom: 20px;
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

const ContactItem = styled.div`
  display: flex;
  gap: 5px;
  height: fit-content;
`;

const ServiceIconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const TherapistCard = (props) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <CardContainer>
      <Header isMobile={isTabletOrMobile}>
        <div
          style={{
            fontFamily: "Playfair Display",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          {props.legalPersonality}
        </div>
      </Header>
      <MainSection>
        <h3>{props.name}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {[LocationIcon, MessageIcon, GlobeIcon, MailIcon, PhoneIcon].map(
            (Icon, index) => (
              <ContactItem key={index}>
                <img src={Icon} alt="icon" width={20} height={20} />
                {props[index === 1 ? "languages" : "location"]}
              </ContactItem>
            )
          )}
        </div>
        <img
          src={props.avatar}
          alt="therapist avatar"
          style={{
            width: "110px",
            objectFit: "contain",
            alignSelf: "flex-start",
          }}
        />
      </MainSection>
      <InfoSection>
        <div>
          <h4>Bio</h4>
          <p>{props.bio}</p>
        </div>
        <div>
          <h4>Services offered</h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {props.therapyServices &&
                Object.keys(props.therapyServices).map(
                  (key, index) =>
                    props.therapyServices[key] && <Tag key={index}>{key}</Tag>
                )}
            </div>
            <ServiceIconContainer>
              {props.freeService && (
                <img
                  src={FreeIcon}
                  height={36}
                  width={36}
                  alt="free icon"
                  title="Free service"
                />
              )}
              {props.internationalPaymentsOnly && (
                <img
                  src={GlobalIcon}
                  height={36}
                  width={36}
                  alt="global icon"
                  title="International payments only"
                />
              )}
              {props.remoteSession && (
                <img
                  src={VirtualIcon}
                  height={36}
                  width={36}
                  alt="virtual icon"
                  title="Remote sessions"
                />
              )}
            </ServiceIconContainer>
          </div>
        </div>
      </InfoSection>
    </CardContainer>
  );
};

export default TherapistCard;
