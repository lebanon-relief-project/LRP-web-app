import React from "react";
import { render } from "@testing-library/react";
import FeelingsSection from "./FeelingsSection";

describe("the FeelingsSection component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderFeelingsSection());

    expect(container).toMatchSnapshot();
  });
});

const renderFeelingsSection = () => {
  return render(<FeelingsSection />);
};
