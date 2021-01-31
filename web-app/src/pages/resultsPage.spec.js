import React from "react";
import { renderWithRouter } from "../util/testUtils";
import ResultsPage from "./resultsPage";
import "jest-styled-components";

jest.mock("../services/results.service.js");

jest.mock("../components/resultsPage/ExperiencesSection", () => {
  return () => <div>Experiences Section</div>;
});

describe("the ResultsPage component", () => {
  beforeEach(() => {
    sessionStorage.clear();
    sessionStorage.setItem("key1", "value1");
    sessionStorage.setItem("key2", "value2");
  });

  it("should match the snapshot", () => {
    const { container } = renderWithRouter(<ResultsPage />);
    expect(container).toMatchSnapshot();
  });

  it.todo(
    "should call the results service with card id's that are in session storage"
  );
});
