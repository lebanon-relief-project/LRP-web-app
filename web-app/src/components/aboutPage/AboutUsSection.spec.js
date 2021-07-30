import React from "react";
import { render } from "@testing-library/react";
import AboutUsSection from "./AboutUsSection";
import "jest-styled-components";

describe("the AboutUsSection component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderAboutUsSection());

    expect(container).toMatchSnapshot();
  });
});

const renderAboutUsSection = () => {
  return render(<AboutUsSection />);
};
