import React, { useState, useCallback } from "react";

import Collapsible from "react-collapsible";
import styled from "styled-components";
import devices from "../../../styles/Devices";

import { collapsiblesInitial } from "../../../constants/directory";
import SearchIcon from "../../../assets/images/Search.svg";
import Select from "react-select";
import { useEffect } from "react";

const Sidebar = ({ onFilterChange, locations }) => {
  const [collapsibles, setCollapsibles] = useState(collapsiblesInitial);

  useEffect(() => {
    if (onFilterChange) onFilterChange(collapsibles);
  }, [collapsibles]);

  const renderCollapsibles = useCallback(() => {
    return Object.keys(collapsibles).map((key, index) => {
      if (collapsibles[key].options) {
        return (
          <Collapsible
            key={`${key}_${index}`}
            trigger={collapsibles[key].label}
          >
            {collapsibles[key].options.map((option, index2) => {
              return (
                <label key={`${option.label}_${index}`}>
                  <input
                    data-testid={option.label}
                    name={`${option.label}`}
                    type="checkbox"
                    checked={option.selected}
                    onChange={() => {
                      let collapsiblesCopy = { ...collapsibles };
                      collapsiblesCopy[key].options[index2].selected =
                        !collapsiblesCopy[key].options[index2].selected;
                      setCollapsibles({ ...collapsiblesCopy });
                    }}
                  />
                  {option.label}
                </label>
              );
            })}
          </Collapsible>
        );
      } else if (collapsibles[key].value !== undefined) {
        return (
          <Collapsible
            key={`${key}_${index}`}
            trigger={collapsibles[key].label}
          >
            <SearchInputContainer>
              <SearchBox>
                <SearchInput
                  type="text"
                  value={collapsibles[key].value}
                  onChange={(e) => {
                    let collapsiblesCopy = { ...collapsibles };
                    collapsiblesCopy[key].value = e.target.value;
                    setCollapsibles({ ...collapsiblesCopy });
                  }}
                />
                <SearchIconContainer>
                  <img src={SearchIcon} />
                </SearchIconContainer>
              </SearchBox>
            </SearchInputContainer>
          </Collapsible>
        );
      } else if (collapsibles[key].selectValue !== undefined) {
        return (
          <Collapsible
            key={`${key}_${index}`}
            trigger={collapsibles[key].label}
          >
            <Select
              isSearchable={true}
              isClearable={true}
              placeholder="Select location"
              onChange={(e) => {
                if (e === null) {
                  let collapsiblesCopy = { ...collapsibles };
                  collapsiblesCopy[key].selectValue = "";
                  setCollapsibles({ ...collapsiblesCopy });
                  return;
                }
                let collapsiblesCopy = { ...collapsibles };
                collapsiblesCopy[key].selectValue = e.value;
                setCollapsibles({ ...collapsiblesCopy });
              }}
              options={locations.map((location) => {
                return {
                  value: location,
                  label: location
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" "),
                };
              })}
            />
            {/* </div> */}
          </Collapsible>
        );
      }
      return null;
    });
  }, [collapsibles, setCollapsibles]);

  return (
    <>
      <StyledSideBar>
        <SideBarWrapper>
          <TitleWrapper>Filters</TitleWrapper>
          {/* bunch of collapsibles */}
          <form>{renderCollapsibles()}</form>
        </SideBarWrapper>
      </StyledSideBar>
    </>
  );
};

const SearchBox = styled.div`
  display: flex;
  height: 32px;
  border: 1px solid #d9d9d9;
`;

const SearchInputContainer = styled.div`
  display: flex;
  flex: 1;
`;

const SearchInput = styled.input`
  fontsize: 14px;
  height: 100%;
  outline: none;
  width: 100%;
  margin: 0;
  border: none;
`;

const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  border-left: 1px solid #d9d9d9;
`;

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

  .Collapsible:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .Collapsible__contentInner {
    background-color: inherit;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #262626;
    margin-top: 10px;
    ${"" /* padding-bottom: 20px; */}

    input {
      margin-right: 8px;
      margin-bottom: 8px;
    }
  }

  .Collapsible__trigger {
    display: block;
    font-weight: 500;
    text-decoration: none;
    position: relative;

    color: #262626;
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
  .css-26l3qy-menu {
    position: static;
  }
  grid-column: col-start / span 4;
  background-color: white;

  @media (max-width: ${devices.ipad}) {
    grid-row: 1;
    grid-column: col-start 1 / span 12;
  }
`;

export default Sidebar;
