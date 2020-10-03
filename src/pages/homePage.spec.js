import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./homePage";

describe('the HomePage component', () => {
  
  it("should match the snapshot", () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
  
})


