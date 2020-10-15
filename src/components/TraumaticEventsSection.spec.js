import React from "react";
import { render } from "@testing-library/react";
import TraumaticEventsSection from "./TraumaticEventsSection";

describe("the TraumaticEvents component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderTraumaticEventsSection());

    expect(container).toMatchSnapshot();
  });
});

const renderTraumaticEventsSection = () => {
  return render(<TraumaticEventsSection />);
};
