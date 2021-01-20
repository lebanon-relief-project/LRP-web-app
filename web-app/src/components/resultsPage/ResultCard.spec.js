import React from "react";
import { render } from "@testing-library/react";
import ResultCard from "./ResultCard";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";

describe("the ResultCard component", () => {
  let container;

  fit("should match the snapshot", () => {
    ({ container } = render(
      <ResultCard title="Test title" body="test body" />
    ));

    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent("Test title");
    expect(container).toHaveTextContent("test body");
  });
});
