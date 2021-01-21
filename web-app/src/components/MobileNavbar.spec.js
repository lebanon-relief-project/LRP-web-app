import React from "react";
import { render } from "@testing-library/react";
import MobileNavBar from "./MobileNavBar";
import "jest-styled-components";

jest.mock("react-router-dom", () => ({
  Link: ({ to }) => <div data-testid={`link_${to}`}></div>,
  NavLink: ({ to }) => <div data-testid={`navlink_${to}`}></div>,
}));

describe("the MobileNavBar component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderMobileNavBar());

    expect(container).toMatchSnapshot();
  });
});

const renderMobileNavBar = () => {
  return render(<MobileNavBar />);
};
