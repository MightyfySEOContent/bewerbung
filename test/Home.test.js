import {render, screen} from "@testing-library/react";
import Home from "@pages/index";

describe("<Home/>...", ()=>{

    it("renders properly", ()=>{
        render(<Home/>);

        screen.getByRole("heading", {name: "Hi FizzBuzz Quiz", level: 1});
    });

});