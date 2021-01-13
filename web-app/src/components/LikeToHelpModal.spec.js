import React from "react";
import { render } from "@testing-library/react";
import LikeToHelpModal from "./LikeToHelpModal";
import "jest-styled-components";
import { fireEvent } from "@testing-library/dom";
import { act } from "react-dom/test-utils";

describe("the LikeToHelpModal component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderLikeToHelpModal());

    expect(container).toMatchSnapshot();
  });
  it("should close Modal when close button is clicked", () => {
    const closeModal = jest.fn();
    let getByAltText;
    ({ getByAltText } = render(<LikeToHelpModal closeModal={closeModal} />));

    act(() => {
      fireEvent.click(getByAltText("Close Button"));
    });

    expect(closeModal).toHaveBeenCalled();
  });
});

const renderLikeToHelpModal = () => {
  return render(<LikeToHelpModal />);
};
