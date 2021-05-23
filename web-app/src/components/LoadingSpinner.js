import React from "react";
import styled from "styled-components";
import loadingSpinnerGif from "../assets/gifs/LoadingSpinner.gif";

const LoadingSpinner = () => {
  return <StyledLoadingSpinner src={loadingSpinnerGif} alt="loading..." />;
};

const StyledLoadingSpinner = styled.img`
  heigth: auto;
  width: 10%;
`;

export default LoadingSpinner;
