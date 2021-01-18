import React from "react";
import { render } from "@testing-library/react";
import FlashCardResultContainer from "./FlashCardResultContainer";
import "jest-styled-components";

describe("the FlashCardResultContainer component", () => {
  let container;
  let results = {
    results: [
      {
        _id: "test ID",
        expl_title: "test",
        expl_body: "test",
        image: "test",
        recommendations: [{ title: "test", body: "test" }],
      },
    ],
  };

  it("should match the snapshot", () => {
    ({ container } = render(<FlashCardResultContainer results={results} />));

    expect(container).toMatchSnapshot();
  });

  it.todo("should render the selected flashcards recommendations only");
});
