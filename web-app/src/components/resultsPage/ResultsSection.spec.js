import React from "react";
import { render } from "@testing-library/react";
import ResultsSection from "./ResultsSection";
import "jest-styled-components";
import { sampleResultsResponse } from "../../sampleData";

jest.mock("../../util/util", () => ({
  getCardTitleFromSessionStorage: () => "test title"
}));

describe("the ResultsSection component", () => {
  let container;

  it("should match the snapshot", () => {
    ({ container } = render(
      <ResultsSection results={sampleResultsResponse} />
    ));

    expect(container).toMatchSnapshot();
  });
});
