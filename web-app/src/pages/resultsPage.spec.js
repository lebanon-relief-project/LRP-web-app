import React from "react";
import { renderWithRouter } from "../util/testUtils";
import ResultsPage from "./resultsPage";

import * as resultsService from "../services/results.service.js";
import * as util from "../util/util.js";
import { wait } from "@testing-library/react";

jest.mock("../services/results.service.js");
jest.mock("../util/util.js");

jest.mock("../components/resultsPage/ExperiencesSection", () => {
  return () => <div>Experiences Section</div>;
});

const getResultsSpy = jest.spyOn(resultsService, "getResults");
const getCardIdsFromSessionStorageSpy = jest.spyOn(
  util,
  "getCardIdsFromSessionStorage"
);

describe("the ResultsPage component", () => {
  beforeEach(() => {
    sessionStorage.clear();
    sessionStorage.setItem("key1", "value1");
    sessionStorage.setItem("key2", "value2");
  });

  it("should match the snapshot", async () => {
    const { container } = renderWithRouter(<ResultsPage />);
    await wait();
    expect(container).toMatchSnapshot();
  });

  it("should call the results service with card id's that are in session storage", async () => {
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
    const { container } = renderWithRouter(<ResultsPage />);

    await wait();

    expect(getCardIdsFromSessionStorageSpy).toHaveBeenCalled();
    expect(getResultsSpy).toHaveBeenCalledWith(["key1", "key2"]);
  });
});
