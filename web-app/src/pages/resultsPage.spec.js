import React from "react";
import { renderWithRouter } from "../util/testUtils";
import ResultsPage from "./resultsPage";
import "jest-styled-components";
import * as resultsService from "../services/results.service.js";
import * as util from "../util/util.js";
import { wait } from "@testing-library/react";

jest.mock("../services/results.service.js");
jest.mock("../util/util.js");

jest.mock("../components/resultsPage/ExperiencesSection", () => {
  return () => <div>Experiences Section</div>;
});

jest.mock("../components/resultsPage/ResultsSection", () => {
  return () => <div data-testid="results_section">Results Section</div>;
});

jest.mock("../components/resultsPage/ActionsSection", () => {
  return () => <div data-testid="actions_section">Actions Section</div>;
});

const getResultsSpy = jest.spyOn(resultsService, "getResults");
const getCardIdsFromSessionStorageSpy = jest.spyOn(
  util,
  "getCardIdsFromSessionStorage"
);

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock("../components/LoadingSpinner", () => {
  return () => <div data-testid="spinner">Loading...</div>;
});

describe("the ResultsPage component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    sessionStorage.clear();
    sessionStorage.setItem("key1", "value1");
    sessionStorage.setItem("key2", "value2");

    getCardIdsFromSessionStorageSpy.mockReturnValue(["key1", "key2"]);
    getResultsSpy.mockReturnValue({
      results: [
        {
          _id: "id",
          _rev: "rev",
          expl_title: "title",
          expl_body: "body",
          image: "image",
          recommendations: [
            {
              title: "some recommendation title",
              body: "some recommendation body",
            },
          ],
        },
      ],
    });
  });

  it("should match the snapshot", async () => {
    const { container } = renderWithRouter(<ResultsPage />);
    await wait();
    expect(container).toMatchSnapshot();
  });

  it("should call the results service with card id's that are in session storage", async () => {
    renderWithRouter(<ResultsPage />);

    await wait();

    expect(getCardIdsFromSessionStorageSpy).toHaveBeenCalled();
    expect(getResultsSpy).toHaveBeenCalledWith(["key1", "key2"]);
  });

  it("should handle error response from getResults", async () => {
    getResultsSpy.mockImplementation(() => {
      throw new Error("some ugly error");
    });

    const { queryByTestId } = renderWithRouter(<ResultsPage />);

    await wait();

    expect(queryByTestId("results_section")).toBeFalsy();
  });

  it("should redirect to help page if session storage empty", async () => {
    getCardIdsFromSessionStorageSpy.mockReturnValue([]);
    renderWithRouter(<ResultsPage />);

    await wait();

    expect(mockHistoryPush).toHaveBeenCalledWith("/help");
    expect(getResultsSpy).not.toHaveBeenCalled();
  });
  it("should show Spinner when results are loading", async () => {
    let queryByTestId;
    ({ queryByTestId } = renderWithRouter(<ResultsPage />));
    expect(queryByTestId("spinner")).toBeTruthy();
    await wait();
    expect(queryByTestId("spinner")).toBeFalsy();
  });
});
