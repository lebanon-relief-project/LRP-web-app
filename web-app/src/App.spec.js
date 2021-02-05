import React from "react";
import { Pages } from "./App";
import "jest-styled-components";
import { renderWithRouter } from "./util/testUtils";

jest.mock("./pages/homePage", (props) => {
  return (props) => <div>Home page</div>;
});

jest.mock("./pages/aboutPage", (props) => {
  return (props) => <div>About page</div>;
});

jest.mock("./pages/helpPage", (props) => {
  return (props) => <div>Help page</div>;
});

jest.mock("./pages/resultsPage", (props) => {
  return (props) => <div>Results page</div>;
});

afterEach(() => {
  jest.clearAllMocks();
});

test("render home page", () => {
  const { container } = renderWithRouter(<Pages />);
  expect(container).toMatchSnapshot();
});

test("render about page", () => {
  const { container } = renderWithRouter(<Pages />, "/about");
  expect(container).toMatchSnapshot();
});

test("render help page", () => {
  const { container } = renderWithRouter(<Pages />, "/help");
  expect(container).toMatchSnapshot();
});

test("render results page", () => {
  const { container } = renderWithRouter(<Pages />, "/results");
  expect(container).toMatchSnapshot();
});

