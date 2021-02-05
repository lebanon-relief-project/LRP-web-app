import React from "react";
import { render, wait } from "@testing-library/react";
import ExperiencesSection from "./ExperiencesSection";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../services/results.service", () => {
  return {
    getPercentage: jest.fn().mockResolvedValue({
      default_percentage: 0.76,
    }),
  };
});

describe("the TraumaticEvents component", () => {
  let container;

  it("should match the snapshot", async () => {
    ({ container } = render(<ExperiencesSection />));

    await wait();

    expect(container).toMatchSnapshot();
  });
});
