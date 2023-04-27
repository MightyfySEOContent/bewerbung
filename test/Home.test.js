import {fireEvent, render, screen} from "@testing-library/react";
import Home, {EMPTY_RESULT_HINT} from "@pages/";
import userEvent from "@testing-library/user-event";

describe("<Home/>...", () => {

    //-------------------------------------
    //-  feel free to at more test cases  -
    //-------------------------------------

    describe("renders properly the...", () => {

        it("headline", () => {
            render(<Home />);

            screen.getByRole("heading", {name: "FizzBuzz - Bewerber Quiz", level: 1});
        });

        it("input for target digit", () => {
            render(<Home />);

            const input = screen.getByLabelText("Zielnummer", {});
            expect(input).toHaveProperty("name", "target_number");
            expect(input).toHaveAttribute("type", "number");
        });

        it("submit button", () => {
            render(<Home />);

            const btn = screen.getByRole("button", {name: "Los geht's!"});
        });

        it("hint text that a digit greater 0 has to be submitted", () => {
            render(<Home />);

            screen.getByText("Es muss eine Zahl größer als 0 eingetragen werden.", {selector: "small"});
        });

        describe("result when...", () => {

            it("only digits has to be rendered", async () => {
                render(<Home/>);

                submitFormWith(2);

                // hint should be disappeared
                expect(screen.queryByText(EMPTY_RESULT_HINT, {selector: ".result"})).toBeNull();

                screen.getByText(/^1$/g, {selector: ".result li"});
                screen.getByText(/^2$/g, {selector: ".result li"});
            });

            it.todo("Fizz has to be rendered");

            it.todo("Buzz has to be rendered");

            it.todo("FizzBuzz has to be rendered");

        });

        it.todo("error message when a digit lower than 1 was submitted");

    });

    it("clears result list when input gains focus", async () => {
        render(<Home value={3}/>);

        expect(screen.getAllByText("Fizz", {selector: ".result"})).toHaveLength(1);

        gainFocusOnInput();

        await screen.findByText(EMPTY_RESULT_HINT, {selector: ".result"});
    });

    function submitFormWith(digit){
        userEvent.type(screen.getByLabelText("Zielnummer", {}), digit);

        fireEvent.click(screen.getByRole("button", {name: "Los geht's!"}));
    }

    function gainFocusOnInput() {
        fireEvent.focus(screen.getByLabelText("Zielnummer", {}));
    }
});