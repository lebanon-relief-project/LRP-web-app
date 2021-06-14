import React from "react";
import { fireEvent, render } from "@testing-library/react";

import "jest-styled-components";
import Accordion from "./Accordion";
import { act } from "react-dom/test-utils";

const setExpandedMock = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe("the Accordion component", () => {
  let container, getByTestId, queryByText;
  it("should match the snapshot", () => {
    ({ container } = renderAccordion());

    expect(container).toMatchSnapshot();
  });

  it("should expand the accordion when chevron is clicked", () => {
    ({ container, getByTestId, queryByText } = renderAccordion());

    expect(
      queryByText("Click the arrow to show more things you can do.")
    ).toBeTruthy();

    expect(getByTestId("chevron")).toHaveStyleRule("transform", "rotate(0)");

    act(() => {
      fireEvent.click(getByTestId("chevron"));
    });

    expect(
      queryByText("Click the arrow to show more things you can do.")
    ).toBeFalsy();

    expect(getByTestId("chevron")).toHaveStyleRule(
      "transform",
      "rotate(90deg)"
    );
  });
});

const renderAccordion = () => {
  return render(
    <Accordion title={"title"} content={"content"} image={"image"} />
  );
};
