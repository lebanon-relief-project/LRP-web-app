import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import LikeToHelpModal from "./LikeToHelpModal";
import { Routes } from "../App.js";
import devices from "../styles/Devices";
import { Link } from "react-router-dom";

const HelpSection = () => {
  const [likeToHelpModalVisible, setLikeToHelpModalVisible] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "red",
            flex: 1,
            maxWidth: 960,
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              maxWidth: 304,
              backgroundColor: "yellow",
              display: "flex",
              flex: 1,
              border: "1px solid black",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "relative",
              minHeight: 317,
              height: "100%",
            }}
          >
            <div
              style={{
                backgroundColor: "brown",
                position: "absolute",
                top: -16,
                height: 32,
                width: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 24 }}>
                I’m looking for help
              </span>
            </div>
            <div
              style={{
                paddingRight: 20,
                paddingLeft: 20,
                backgroundColor: "red",
                marginTop: 26,
                fontSize: 15,
                fontWeight: 400,
                height: 207,
              }}
            >
              Everyone reacts differently to trauma, and not everyone recovers
              from a traumatic experience in the same way or time. There is no
              one solution to heal from it.
              <br /> <br />
              Here you can find personalized recommendations, tips and tools to
              help you cope with trauma.
            </div>
            <div
              style={{
                backgroundColor: "green",
                display: "flex",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Link
                style={{
                  height: 40,
                  width: 264,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  marginTop: 24,
                  backgroundColor: "blue",
                }}
                to={"/"}
              >
                Give me advice
              </Link>
            </div>
          </div>
          <div
            style={{
              maxWidth: 304,
              backgroundColor: "yellow",
              display: "flex",
              flex: 1,
              border: "1px solid black",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "relative",
              minHeight: 317,
              height: "100%",
            }}
          >
            <div
              style={{
                backgroundColor: "brown",
                position: "absolute",
                top: -16,
                height: 32,
                width: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 24 }}>
                I’d like to help
              </span>
            </div>
            <div
              style={{
                paddingRight: 20,
                paddingLeft: 20,
                backgroundColor: "red",
                marginTop: 26,
                fontSize: 15,
                fontWeight: 400,
                height: 207,
              }}
            >
              Do you have a close one who underwent trauma? Do you need
              direction on how to help, what to say, what to do, and how to
              protect yourself?
              <br /> <br /> Or do you want to help those who are dealing with
              trauma, and are looking for opportunities to do so?
            </div>
            <div
              style={{
                backgroundColor: "green",
                display: "flex",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Link
                style={{
                  height: 40,
                  width: 264,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  marginTop: 24,
                  backgroundColor: "blue",
                }}
                to={"/"}
              >
                Give me advice
              </Link>
            </div>
          </div>
          <div
            style={{
              maxWidth: 304,
              backgroundColor: "yellow",
              display: "flex",
              flex: 1,
              border: "1px solid black",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "relative",
              minHeight: 317,
            }}
          >
            <div
              style={{
                backgroundColor: "brown",
                position: "absolute",
                top: -16,
                height: 64,
                width: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "50%",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 24,
                  textAlign: "center",
                }}
              >
                I want to talk to someone
              </span>
            </div>
            <div
              style={{
                paddingRight: 20,
                paddingLeft: 20,
                backgroundColor: "red",
                marginTop: 58,
                fontSize: 15,
                fontWeight: 400,
                height: 207,
              }}
            >
              Everyone reacts differently to trauma, and not everyone recovers
              from a traumatic experience in the same way or time. There is no
              one solution to heal from it.
              <br /> <br />
              Here you can find personalized recommendations, tips and tools to
              help you cope with trauma.
            </div>
            <div
              style={{
                backgroundColor: "green",
                display: "flex",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Link
                style={{
                  height: 40,
                  width: 264,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  marginTop: 24,
                  backgroundColor: "blue",
                }}
                to={"/"}
              >
                Give me advice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const StyledBody = styled.div`
  min-height: 17rem;
  @media (max-width: ${devices.ipadpro}) {
    min-height: 13rem;
  }
`;

const Paragraph = styled.p`
  font-family: Raleway;
  font-style: normal;

  font-size: 16px;
  line-height: 150%;
  color: #262626;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
    position: static;
    pading: 0;
    margin: 0;
  }
`;

const StyledCard = styled(Card)`
  flex: 0 1 24%;
  legend {
    width: auto;
    margin: 0 auto;
  }
  @media (max-width: ${devices.ipadpro}) {
    flex-direction: column;
    position: static;
    pading: 0;
    margin: 0;
    align-items: center;
  }

  z-index: 1;
`;

// The width, margin-left and transform fields are to allow the background colour to escape the
// page max-width of 1440px
const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  background: inherit;
  margin: 0;
  padding: 0 3rem;
  width: calc(100vw - 20px);
  margin-left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${devices.mobile}) {
    margin-right: 0rem;
    max-width: 100%;
    order: 1;
    margin-top: 0;
  }
`;

const PageContainer = styled.div`
  max-width: 1440px;
`;

export default HelpSection;
