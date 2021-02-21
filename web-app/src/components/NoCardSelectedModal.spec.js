import React from "react";
import { render } from "@testing-library/react";
import NoCardSelectedModal from "./NoCardSelectedModal";
import "jest-styled-components";
import { fireEvent } from "@testing-library/dom";
import { act } from "react-dom/test-utils";

describe("the NoCardSelectedModal component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderNoCardSelectedModal());

    expect(container).toMatchSnapshot();
  });
  it("should close Modal when close button is clicked", () => {
    const closeModal = jest.fn();
    let getByAltText;
    ({ getByAltText } = render(
      <NoCardSelectedModal closeModal={closeModal} />
    ));

    act(() => {
      fireEvent.click(getByAltText("Close Button"));
    });

    expect(closeModal).toHaveBeenCalled();
  });
});

const renderNoCardSelectedModal = () => {
  return render(<NoCardSelectedModal />);
};
