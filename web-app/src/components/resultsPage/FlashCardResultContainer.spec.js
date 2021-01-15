import React from "react";
import { render } from "@testing-library/react";
import FlashCardResultContainer from "./FlashCardResultContainer";
import "jest-styled-components";

describe("the FlashCardResultContainer component", () => {
  let container;

  it("should match the snapshot", () => {
    ({ container } = render(<FlashCardResultContainer />));

    expect(container).toMatchSnapshot();
  });
});
