import React from "react";
import { render } from "@testing-library/react";
import AboutPage from "./aboutPage";


describe('the AboutPage component', () => {

    it("should match the snapshot", () => {
        const { container } = render(<AboutPage />);
        expect(container).toMatchSnapshot();
    });
})


