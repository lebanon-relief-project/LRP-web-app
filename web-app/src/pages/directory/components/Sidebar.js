import React, { useState } from "react";

import Collapsible from "react-collapsible";
import styled from "styled-components";
import devices from "../../../styles/Devices";

import { collapsiblesInitial } from "../../../constants/directory";

const Sidebar = () => {
  const [collapsibles, setCollapsibles] = useState(collapsiblesInitial);

  return (
    <>
      <StyledSideBar>
        <SideBarWrapper>
          <TitleWrapper>Filters</TitleWrapper>
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
    padding-bottom: 20px;
    border-bottom: 1px solid #d9d9d9;
  }

  .Collapsible__contentInner {
    background-color: inherit;
    display: flex;
    flex-direction: column;

    margin-top: 10px;
    ${"" /* padding-bottom: 20px; */}

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

const StyledSideBar = styled.div`
  grid-column: col-start / span 4;
  background-color: white;

  @media (max-width: ${devices.ipad}) {
    grid-row: 1;
    grid-column: col-start 1 / span 12;
  }
`;

export default Sidebar;
