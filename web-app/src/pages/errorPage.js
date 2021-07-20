import React from "react";
import styled from "styled-components";
import ErrorIcon from "../assets/images/Error.svg";

const ErrorPage = () => {
  return (
    <StyledPage>
      <Content>
        <ErrorImage src={ErrorIcon} alt="error icon"></ErrorImage>
        <ErrorTitle>Oh no!</ErrorTitle>
        <ErrorMessage>
          Looks like something went wrong, please try refreshing the page.
        </ErrorMessage>
        <RefreshButton
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh page
        </RefreshButton>
      </Content>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 64px;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  background-color: inherit;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ErrorImage = styled.img`
  height: 151px;
  width: 140px;
`;

const ErrorTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;

const RefreshButton = styled.button`
  width: 140px;
  height: 40px;
  background-color: #ffd666;
  margin-top: 30px;

  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
  border: none;

  :hover {
    cursor: pointer;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  color: black;
`;

export default ErrorPage;
