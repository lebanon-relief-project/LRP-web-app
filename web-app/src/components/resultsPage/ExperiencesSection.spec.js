import React from "react";
import { render } from "@testing-library/react";
import ExperiencesSection from "./ExperiencesSection";
import "jest-styled-components";

describe("the TraumaticEvents component", () => {
  let container;

  it("should match the snapshot", () => {
    ({ container } = render(<ExperiencesSection />));

    expect(container).toMatchSnapshot();
  });
});
