import React from "react";
import { render } from "@testing-library/react";
import OurMission from "./OurMissionSection";
import "jest-styled-components";

describe("the OurMission component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderOurMissionSection());

    expect(container).toMatchSnapshot();
  });
});

const renderOurMissionSection = () => {
  return render(<OurMission />);
};
