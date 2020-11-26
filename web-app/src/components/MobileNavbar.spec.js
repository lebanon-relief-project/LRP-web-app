import React from "react";
import { render } from "@testing-library/react";
import MobileNavBar from "./MobileNavBar";
import "jest-styled-components";

jest.mock("./Card", (props) => {
  return (props) => <div>{props.title}</div>;
});

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
