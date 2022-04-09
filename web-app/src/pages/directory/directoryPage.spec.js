import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import "jest-styled-components";
import DirectoryPage from "./directoryPage";
import { listenerCount } from "process";
import { act } from "react-dom/test-utils";

jest.mock("./components/Banner", (props) => {
  return (props) => <div>Banner</div>;
});

jest.mock("./components/Sidebar", () => {
  return () => <div>Sidebar</div>;
});

Date.now = jest.fn(() => 1482363367071);

// jest.useFakeTimers();

afterEach(() => {
  jest.clearAllMocks();
});

describe("the DirectoryPage component", () => {
  it("should match the snapshot", () => {
    const { container } = render(<DirectoryPage />);
    expect(container).toMatchSnapshot();
  });
});
