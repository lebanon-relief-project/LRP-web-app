import React from "react";
import { render } from "@testing-library/react";
import ResultsSection from "./ResultsSection";
import "jest-styled-components";
import { sampleResultsResponse } from "../../sampleData";

describe("the TraumaticEvents component", () => {
  let container;

  it("should match the snapshot", () => {
    ({ container } = render(
      <ResultsSection results={sampleResultsResponse} />
    ));

    expect(container).toMatchSnapshot();
  });
});
