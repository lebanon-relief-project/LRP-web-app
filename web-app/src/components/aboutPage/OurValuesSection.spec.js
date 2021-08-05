import React from "react";
import { render } from "@testing-library/react";
import OurValuesSection from "./OurValuesSection";
import "jest-styled-components";

describe("the OurValuesSection component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderOurValuesSection());

    expect(container).toMatchSnapshot();
  });
});

const renderOurValuesSection = () => {
  return render(<OurValuesSection />);
};
