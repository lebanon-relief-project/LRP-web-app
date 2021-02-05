import React from "react";
import { render } from "@testing-library/react";
import UsefulTipsSection from "./UsefulTipsSection";
import "jest-styled-components";

describe("the UsefulTipsSection component", () => {
  let container;

  it("should match the snapshot", () => {
    ({ container } = render(<UsefulTipsSection />));

    expect(container).toMatchSnapshot();
  });
});
