import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import DirectoryPage from "./directoryPage";

jest.mock("./components/Banner", (props) => {
  return (props) => <div>Banner</div>;
});

describe("the DirectoryPage component", () => {
  it("should match the snapshot", () => {
    const { container } = render(<DirectoryPage />);
    expect(container).toMatchSnapshot();
  });
});
