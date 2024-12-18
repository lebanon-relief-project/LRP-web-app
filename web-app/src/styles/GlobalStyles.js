import styled from "styled-components";
import colours from "./Colours";
import devices from "./Devices";

export const StyledHeader = styled.h2`
  display: ${(props) => (props.mobile ? "none" : "block")};
  font-family: Playfair Display;
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  color: ${colours.black};
`;

export const StyledParagraph = styled.p`
  position: relative;
  margin: 0;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${colours.black};
  z-index: 1;
`;

export const StyledSection = styled.section`
  background: ${(props) => (props.grey ? colours.lightGrey : colours.white)};
  margin: 0;
  margin-bottom: 5%;
  padding: 0 3rem;

  @media (max-width: ${devices.mobile}) {
    padding: 0;
    margin-top: ${(props) => (props.padded ? "5rem" : "0")};
  }
`;

export const PageContainer = styled.div`
  max-width: 960px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${devices.ipad}) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  background: ${colours.darkBlue};
  border-radius: 2px;
  color: ${colours.white};
  font-family: Raleway;
  font-weight: 700;
`;
