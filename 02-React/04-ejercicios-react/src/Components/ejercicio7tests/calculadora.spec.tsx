import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Calculator } from "./calculator";

describe("Calculator", () => {
  it("Should render all required components", async () => {
    render(<Calculator />);
    await screen.findByTestId("calculator-display-box");
    const row = await screen.findAllByTestId("calculator-row");
    expect(row.length).toBe(4);
    const buttons = await screen.findAllByTestId(/calculator-button/i);
    expect(buttons.length).toBe(16);

    for (let i = 0; i < row.length; i++) {
      const currentRow = within(row[i]);
      const numberOfButtonsEachRow = await currentRow.findAllByTestId(
        /^calculator-button-[0-9a-z]*$/i
      );
      expect(numberOfButtonsEachRow.length).toBe(4);
    }
  });

  it("The display box should display a number when a numeric button is pressed", async () => {
    render(<Calculator />);
    const button1 = await screen.findByTestId("calculator-button-1");
    userEvent.click(button1);
    const displayBox = await screen.findByTestId("calculator-display-box");
    expect(displayBox).toHaveTextContent(/^1$/);

    const button2 = await screen.findByTestId("calculator-button-2");
    userEvent.click(button2);
    expect(displayBox).toHaveTextContent(/^12$/);
  });

  it("Should render the second number after we press one operator and then another number", async () => {
    render(<Calculator />);
    const button1 = await screen.findByTestId("calculator-button-1");
    userEvent.click(button1);
    const displayBox = await screen.findByTestId("calculator-display-box");

    const button2 = await screen.findByTestId("calculator-button-2");
    userEvent.click(button2);

    const buttonAdd = await screen.findByTestId("calculator-button-add");
    userEvent.click(buttonAdd);
    //expect(displayBox).toHaveTextContent(/^12$/);

    const button5 = await screen.findByTestId("calculator-button-5");
    userEvent.click(button5);

    expect(displayBox).toHaveTextContent(/^5$/);
  });
});

export {};
