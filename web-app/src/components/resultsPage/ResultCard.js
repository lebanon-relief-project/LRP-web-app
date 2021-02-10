import React from "react";
import styled from "styled-components";

export const ResultCard = ({ title, body, id = "result card" }) => {
  return (
    <>
      <Card>
        <div id={id}>
          <h4 style={{margin: "10px"}}>
            <b>{title}</b>
          </h4>
          <p style={{margin: "10px"}}>{body}</p>
        </div>
      </Card>
    </>
  );
};

const Card = styled.div`
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  Offset: 0px, 1px
  rgba(0, 0, 0, 0.25)
  border-radius: 10px;
  padding: 6px;
  margin: 10px;
  min-height: 174px;
`;

export default ResultCard;
