import React, { useState } from "react";
import styled from "styled-components";
import devices from "../../styles/Devices";
import Banner from "./components/Banner";
import Collapsible from "react-collapsible";
import { collapsiblesInitial } from "../../constants/directory";

const DirectoryPage = () => {
  const [collapsibles, setCollapsibles] = useState(collapsiblesInitial);

  return (
    <>
      <StyledPage>
        <Banner />
        <StyledContent>
          <StyledSideBar>
            <SideBarWrapper>
              <TitleWrapper>Test</TitleWrapper>
              {/* bunch of collapsibles */}
              <form>
                {Object.keys(collapsibles).map((key, index) => {
                  return (
                    <Collapsible key={`${key}_${index}`} trigger={key}>
                      {Object.keys(collapsibles[key]).map((value, index2) => {
                        return (
                          <label key={`${value}_${index}`}>
                            <input
                              data-testid={value}
                              name={`${value}`}
                              type="checkbox"
                              checked={collapsibles[key][value]}
                              onChange={() => {
                                let collapsiblesCopy = { ...collapsibles };
                                collapsiblesCopy[key][value] =
                                  !collapsiblesCopy[key][value];
                                setCollapsibles({ ...collapsiblesCopy });
                              }}
                            />
                            {value}
                          </label>
                        );
                      })}
                    </Collapsible>
                  );
                })}
              </form>
            </SideBarWrapper>
          </StyledSideBar>
          <StyledMainArea>Test</StyledMainArea>
        </StyledContent>
      </StyledPage>
    </>
  );
};

const SideBarWrapper = styled.div`
  background-color: inherit;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid #003a8c;
  position: relative;

  ${"" /* possibly move this to the contentInner */}
  .Collapsible {
    margin-bottom: 20px;
  }

  .Collapsible__contentInner {
    background-color: inherit;
    display: flex;
    flex-direction: column;

    border-bottom: 1px solid #d9d9d9;
    margin-top: 10px;
    padding-bottom: 20px;

    input {
      margin-right: 8px;
    }
  }

  .Collapsible__trigger {
    display: block;
    font-weight: 400;
    text-decoration: none;
    position: relative;

    color: black;
    font-size: 16px;

    cursor: pointer;

    &:after {
      font-weight: 900;
      font-family: "Font Awesome 5 Free";
      content: "\f0d7";
      position: absolute;
      right: 0px;
      top: 0px;
      display: block;
      transition: transform 300ms;
    }

    &.is-open {
      &:after {
        transform: rotateZ(180deg);
      }
    }

    &.is-disabled {
      opacity: 0.5;
      background-color: grey;
    }
  }
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

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  flex-direction: column;
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 24px;
  background-color: yellow;
  max-width: 960px;
  width: 100%;
  align-self: center;
  padding-top: 40px;
`;

const StyledMainArea = styled.div`
  grid-column: col-start 5 / span 8;
  background-color: green;
`;

const StyledSideBar = styled.div`
  grid-column: col-start / span 4;
  background-color: white;
`;

export default DirectoryPage;
