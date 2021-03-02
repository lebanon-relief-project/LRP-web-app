import React from "react";
import { render } from "@testing-library/react";
import ReachOutModal from "./ReachOutModal";
import "jest-styled-components";
import { fireEvent } from "@testing-library/dom";
import { act } from "react-dom/test-utils";

describe("the ReachOutModal component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderReachOutModal());

    expect(container).toMatchSnapshot();
  });
  it("should close Modal when close button is clicked", () => {
    const closeModal = jest.fn();
    let getByAltText;
    ({ getByAltText } = render(<ReachOutModal closeModal={closeModal} />));

    act(() => {
      fireEvent.click(getByAltText("Close Button"));
    });

    expect(closeModal).toHaveBeenCalled();
  });
});

const renderReachOutModal = () => {
  return render(<ReachOutModal />);
};
