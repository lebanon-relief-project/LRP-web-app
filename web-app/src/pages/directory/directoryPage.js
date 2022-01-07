import React from "react";
import styled from "styled-components";
import devices from "../../styles/Devices";
import Banner from "./components/Banner";

const DirectoryPage = () => {
  return (
    <>
      <StyledPage>
        <Banner />
      </StyledPage>
    </>
  );
};

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

export default DirectoryPage;
