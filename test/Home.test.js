import {render, screen} from "@testing-library/react";
import Home from "@pages/";

describe("<Home/>...", () => {

    it("renders properly", () => {
        render(<Home/>);

        screen.getByRole("heading", {name: "Willkommen zum Bewerber Quiz - FizzBuzz", level: 1});
    });

});