import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colours from "../../styles/Colours";
import devices from "../../styles/Devices";

const CardGroup = ({ data }) => {
  const [height, setHeight] = useState(0);

  const refs = [useRef(null), useRef(null), useRef(null)];

  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const normalizeHeights = () => {
    let ref1 = refs[0];
    let ref2 = refs[1];
    let ref3 = refs[2];
    if (!ref1.current || !ref2.current || !ref3.current) return;
    let maxHeight = Math.max(
      ref1.current.clientHeight,
      ref2.current.clientHeight,
      ref3.current.clientHeight
    );

    if (maxHeight > height) {
      if (!isNaN(maxHeight)) setHeight(maxHeight);
      else setHeight(ref3.current.clientHeight);
    }
  };

  useEffect(() => {
    normalizeHeights();
  }, [windowWidth]);

  return (
    <>
      <Container>
        {data.map((data, index) => {
          return (
            <CardWrapper
              key={index}
              ref={refs[index]}
              style={{
                minHeight: height > 0 ? height : "auto",
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
                      key={content + contentIndex}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              <LinkWrapper>
                {data.actionButton.externalPath ? (
                  <StyledAnchor
                    href={data.actionButton.externalPath}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.actionButton.title}
                  </StyledAnchor>
                ) : (
                  <StyledLink
                    disabled={data.actionButton.disabled}
                    onClick={
                      data.actionButton.action
                        ? data.actionButton.action
                        : () => {}
                    }
                    to={data.actionButton.path}
                  >
                    {data.actionButton.title}
                  </StyledLink>
                )}
              </LinkWrapper>
            </CardWrapper>
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 960px;
  display: flex;
  background-color: inherit;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 16px;
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
  @media (max-width: ${devices.mobile}) {
    width: 100%;
    margin-right: 18px;
    margin-left: 18px;
  }
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
  background-color: ${(props) =>
    props.disabled ? `${colours.grey}` : `${colours.yellow}`};
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

const StyledAnchor = styled.a`
  background-color: ${(props) =>
    props.disabled ? `${colours.grey}` : `${colours.yellow}`};
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

export default CardGroup;
