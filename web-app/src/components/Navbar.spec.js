import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import "jest-styled-components";

jest.mock("react-router-dom", () => ({
  Link: ({ to }) => <div data-testid={`link_${to}`}></div>,
  NavLink: ({ to }) => <div data-testid={`navlink_${to}`}></div>,
}));

describe("the Navbar component", () => {
  let container;
  it("should match the snapshot when open is true", () => {
    ({ container } = renderNavbar(true));

    expect(container).toMatchSnapshot();
  });
  it("should match the snapshot when open is false", () => {
    ({ container } = renderNavbar(false));

    expect(container).toMatchSnapshot();
  });
});

const renderNavbar = (open) => {
  return render(<Navbar open={open} />);
};
