import React, { useState } from "react";
import styled from "styled-components";
import devices from "../../styles/Devices";
import { Routes } from "../../App.js";
import Card from "../Card";
import PDF from "../../assets/downloads/Self-Help_Exercises.pdf";
import ReachOutModal from "./ReachOutModal";
import CardGroup from "../core/CardGroup";

export const ActionSection = () => {
  const [reachOutModalVisible, setReachOutModalVisible] = useState(false);
  return (
    <>
      <Wrapper>
        <Title>Some actions you can take</Title>
        <CardGroup
          data={[
            {
              title: "Support",
              content: [
                "Surround yourself with friends and family. And remember, you can always reach out…",
              ],
              actionButton: {
                title: "Reach out",
                path: "#",
                action: () => {
                  setReachOutModalVisible(true);
                },
              },
            },
            {
              title: "Useful exercises",
              content: [
                "Here are some exercises to reduce stress and regain control over your actions and thoughts.",
              ],
              actionButton: {
                title: "View exercises",
                externalPath: PDF,
              },
            },

            {
              title: "14 days of wellbeing",
              content: [
                "Keep your mind and body engaged by joining our 14 days of wellbeing.",
              ],

              actionButton: {
                title: "Coming soon",
                path: Routes.HELP,
                disabled: true,
              },
            },
          ]}
        />
      </Wrapper>
      {reachOutModalVisible && (
        <ReachOutModal
          closeModal={() => {
            setReachOutModalVisible(false);
          }}
        />
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;

  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: auto;
  background: white;

  @media (max-width: ${devices.ipadpro}) {
    margin: 25px 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    width: auto;
    min-width: 0;
  }
`;

const Title = styled.h2`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;

  @media (max-width: ${devices.ipadpro}) {
    margin: 0px 18px;
  }
`;

export default ActionSection;
