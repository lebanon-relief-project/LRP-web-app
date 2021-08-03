import React from "react";
import { render } from "@testing-library/react";
import WellbeingSection from "./WellbeingSection";
import "jest-styled-components";
import { renderWithRouter } from "../util/testUtils";

describe("the WellbeingSection component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderWellbeingSection());

    expect(container).toMatchSnapshot();
  });
});

const renderWellbeingSection = () => {
  return renderWithRouter(<WellbeingSection />);
};
