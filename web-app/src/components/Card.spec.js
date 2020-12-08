import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import { MemoryRouter } from "react-router-dom";
import "jest-styled-components";

describe("the Card component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderCard());

    expect(container).toMatchSnapshot();
  });
});

const renderCard = () => {
  return render(
    <MemoryRouter>
      <Card title="test title" text="test text" path="/test" />
    </MemoryRouter>
  );
};
