import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export const renderWithRouter = (component, path = "/") => {
  return render(
    <MemoryRouter initialEntries={[path]}>{component}</MemoryRouter>
  );
};
