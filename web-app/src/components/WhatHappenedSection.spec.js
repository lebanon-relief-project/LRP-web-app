import React from "react";
import { render } from "@testing-library/react";
import WhatHappened from "./WhatHappenedSection";
import "jest-styled-components";

describe("the WhatHappened component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderWhatHappenedSection());

    expect(container).toMatchSnapshot();
  });
});

const renderWhatHappenedSection = () => {
  return render(<WhatHappened />);
};
