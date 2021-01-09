import React from "react";
import { render } from "@testing-library/react";
import LikeToHelpModal from "./LikeToHelpModal";
import "jest-styled-components";

describe("the LikeToHelpModal component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderFeelingsSection());

    expect(container).toMatchSnapshot();
  });
});

const renderFeelingsSection = () => {
  return render(<LikeToHelpModal />);
};
