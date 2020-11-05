import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <StyledCard>
      <CardTitle>{props.title}</CardTitle>
      <p>{props.text}</p>
      <Link to={props.path}>Learn More</Link>
    </StyledCard>
  );
};

const CardTitle = styled.h2`
  font-weight: bold;
`;

const StyledCard = styled.div`
  border: 1px solid grey;
  width: 25%;
  padding: 1rem;
  margin: 3rem 0;
`;

export default Card;
