import React from "react";
import { render } from "@testing-library/react";
import HelpPage from "./helpPage";

describe('the HelpPage component', () => {
  
  it("should match the snapshot", () => {
    const { container } = render(<HelpPage />);
    expect(container).toMatchSnapshot();
  });
  
})
