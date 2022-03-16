import React, { useState } from "react";

import Collapsible from "react-collapsible";
import styled from "styled-components";
import devices from "../../../styles/Devices";

import { collapsiblesInitial } from "../../../constants/directory";
import SearchIcon from "../../../assets/images/Search.svg";
import Select from "react-select";

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
                    if (value === "options") {
                      return (
                        <div key={`${value}-${index2}`}>
                          <Select
                            isSearchable={true}
                            isClearable={true}
                            placeholder="Select location"
                            options={collapsibles[key][value].map((item) => {
                              let val = Object.keys(item)[0];
                              return { value: val, label: val };
                            })}
                          />
                        </div>
                      );
                    }
                    if (value === "text") {
                      return (
                        <SearchBox key={`${value}_${index}`}>
                          <SearchInputContainer>
                            <SearchInput
                              data-testid={value}
                              name={`${value}`}
                              type="text"
                              placeholder="Search by name"
                              onChange={(evt) => {
                                let collapsiblesCopy = { ...collapsibles };
                                collapsiblesCopy[key][value] = evt.target.value;
                                setCollapsibles({ ...collapsiblesCopy });
                              }}
                            />
                          </SearchInputContainer>
                          <SearchIconContainer>
                            <img width={12.5} height={12.5} src={SearchIcon} />
                          </SearchIconContainer>
                        </SearchBox>
                      );
                    }
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
