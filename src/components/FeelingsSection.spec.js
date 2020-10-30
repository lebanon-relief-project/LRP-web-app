import React from "react";
import { render } from "@testing-library/react";
import FeelinsSection from "./FeelingsSection";

describe("the OurMission component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderFeelingsSection());

    expect(container).toMatchSnapshot();
  });
});

const renderFeelingsSection = () => {
  return render(<FeelinsSection />);
};
