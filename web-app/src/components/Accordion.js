import React, { useState } from "react";
import styled from "styled-components";

const Accordion = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Flexbox>
        <StyledDiv>
          <Chevron
            data-testid="chevron"
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          ></Chevron>
        </StyledDiv>
        <StyledDiv>
          {props.title}
          {!expanded && (
            <p data-testid="arrowText">
              Click the arrow to show more things you can do.
            </p>
          )}
          {expanded && <>{props.content}</>}
        </StyledDiv>
      </Flexbox>
      {expanded && <>{props.image}</>}
    </>
  );
};

const StyledDiv = styled.div`
  padding: 0 1%;
`;

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Chevron = styled.div`
  transform: ${({ expanded }) => (expanded ? "rotate(90deg)" : "rotate(0)")};
  margin-top: 10px;
  border-top: 10px solid transparent;
  border-left: 10px solid black;
  border-bottom: 10px solid transparent;
`;

export default Accordion;
