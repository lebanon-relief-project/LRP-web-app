import React from "react";
import { render } from "@testing-library/react";
import ContactUsSection from "./ContactUsSection";
import "jest-styled-components";

describe("the ContactUsSection component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderContactUsSection());

    expect(container).toMatchSnapshot();
  });
});

const renderContactUsSection = () => {
  return render(<ContactUsSection />);
};
