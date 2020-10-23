import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <StyledCard>
      <CardTitle>{props.title}</CardTitle>
      <p>{props.text}</p>
      <button>Learn More</button>
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
