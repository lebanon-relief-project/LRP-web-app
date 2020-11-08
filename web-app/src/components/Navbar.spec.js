import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

jest.mock("react-router-dom", () => ({
  Link: ({ to }) => <div data-testid={`link_${to}`}></div>,
}));

describe("the Navbar component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderNavbar());

    expect(container).toMatchSnapshot();
  });
});

const renderNavbar = () => {
  return render(<Navbar />);
};
