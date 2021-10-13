import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import LikeToHelpModal from "./LikeToHelpModal";
import { Routes } from "../App.js";
import devices from "../styles/Devices";
import { Link } from "react-router-dom";
import colours from "../styles/Colours";

const HelpSection = () => {
  const [height, setHeight] = useState(0);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  let data = [
    {
      title: "I’m looking for help",
      content: [
        "Everyone reacts differently to trauma, and not everyone recovers from a traumatic experience in the same way or time. There is no one solution to heal from it.",
        "Here you can find personalized recommendations, tips and tools to help you cope with trauma.",
      ],
      actionButton: {
        title: "Give me advice",
        path: "/",
      },
    },

    {
      title: "I’d like to help",
      content: [
        "Do you have a close one who underwent trauma? Do you need direction on how to help, what to say, what to do, and how to protect yourself?",
        "Or do you want to help those who are dealing with trauma, and are looking for opportunities to do so?",
      ],
      actionButton: {
        title: "Contact me",
        path: "/",
      },
    },

    {
      title: "I want to talk to someone",
      content: [
        "Sometimes, self-help is not enough, and you might prefer a professional hand to help you cope with trauma.",
        "We created a directory of mental health experts to help you find and connect to the therapist, counselling service, or organisation that resonates best with you.",
      ],
      titleStyle: {
        width: "60%",
      },
      contentStyle: {
        marginTop: 38,
      },
      actionButton: {
        title: "Contact me",
        path: "/",
      },
    },
  ];

  useEffect(() => {
    if (!ref1.current || !ref2.current || !ref3.current) return;
    let maxHeight = Math.max([
      ref1.current.clientHeight,
      ref2.current.clientHeight,
      ref3.current.clientHeight,
    ]);
    if (!isNaN(maxHeight)) setHeight(maxHeight);
    else setHeight(ref3.current.clientHeight);
  }, []);

  return (
    <>
      <StyledSection>
        <div
          style={{
            maxWidth: 960,
            display: "flex",
            backgroundColor: "inherit",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
            paddingTop: 16,
          }}
        >
          {data.map((data, index) => {
            return (
              <CardWrapper
                key={index}
                ref={ref1}
                style={{
                  height: height > 0 ? height : "auto",
                }}
              >
                <TitleWrapper style={data.titleStyle && data.titleStyle}>
                  {data.title}
                </TitleWrapper>
                <div
                  style={
                    data.contentStyle ? data.contentStyle : { marginTop: 10 }
                  }
                >
                  {data.content.map((content, contentIndex) => {
                    return (
                      <div
                        style={{ marginTop: contentIndex > 0 ? 16 : 0 }}
                        key={content}
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>

                <LinkWrapper>
                  <StyledLink to={data.actionButton.path}>
                    {data.actionButton.title}
                  </StyledLink>
                </LinkWrapper>
              </CardWrapper>
            );
          })}
        </div>
      </StyledSection>
    </>
  );
};

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  background: inherit;
  margin: 0;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const TitleWrapper = styled.div`
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -16px;
  width: auto;
  align-self: center;
  font-size: 24px;
  font-family: Playfair Display;
  font-weight: 700;
  height: auto;
  line-height: 32px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const CardWrapper = styled.div`
  background-color: inherit;
  width: 304px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-family: "Raleway";
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  border: 1px solid #003a8c;
  position: relative;
`;

const LinkWrapper = styled.div`
  display: flex;

  flex: 1;
  align-items: flex-end;
`;

const StyledLink = styled(Link)`
  background-color: ${colours.yellow};
  color: black;
  font-style: normal;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 40px;
  width: 100%;
  margin-top: 24px;
  justify-self: flex-end;
`;

export default HelpSection;
