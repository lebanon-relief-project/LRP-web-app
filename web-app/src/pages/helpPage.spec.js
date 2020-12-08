import React from "react";
import { render } from "@testing-library/react";
import HelpPage from "./helpPage";

jest.mock("../components/FlashCardsSection", (props) => {
  return (props) => <div>Flash cards section</div>;
});

describe("the HelpPage component", () => {
  it("should match the snapshot", () => {
    const { container } = render(<HelpPage />);
    expect(container).toMatchSnapshot();
  });
});
