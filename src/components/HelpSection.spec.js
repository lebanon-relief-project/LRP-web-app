import React from "react";
import { render } from "@testing-library/react";
import HelpSection from "./HelpSection";

describe("the Card component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderHelpSection());

    expect(container).toMatchSnapshot();
  });
});

const renderHelpSection = () => {
  return render(<HelpSection />);
};
