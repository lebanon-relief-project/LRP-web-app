import React from "react";
import { render } from "@testing-library/react";
import App, { Pages } from "./App";
import { MemoryRouter } from "react-router-dom";

jest.mock("./pages/homePage", (props) => {
  return (props) => <div>Home page</div>;
});

jest.mock("./pages/aboutPage", (props) => {
  return (props) => <div>About page</div>;
});

jest.mock("./pages/helpPage", (props) => {
  return (props) => <div>Help page</div>;
});

afterEach(() => {
  jest.clearAllMocks();
});

test("render home page", () => {
  const { container } = renderApp();
  expect(container).toMatchSnapshot();
});

test("render about page", () => {
  const { container } = renderApp("/about");
  expect(container).toMatchSnapshot();
});

test("render help page", () => {
  const { container } = renderApp("/help");
  expect(container).toMatchSnapshot();
});

const renderApp = (path = "/") => {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Pages />
    </MemoryRouter>
  );
};
