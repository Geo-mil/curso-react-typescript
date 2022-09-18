import { screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';

export async function checkButtonsRow(
    row: HTMLElement,
    buttons: (string | RegExp)[]
) {
    const rowOfButtons = within(row);
    expect(
        await rowOfButtons.findAllByTestId(/numeric-pad-button/i)
    ).toHaveLength(buttons.length);
    for (let i = 0; i < buttons.length; i++) {
        await rowOfButtons.findByTestId(new RegExp(buttons[i]));
    }
}

export async function clickButton(buttonText: RegExp) {
    const button = await screen.findByTestId(buttonText);
    user.click(button);
}

export async function checkDisplay(value: string, operator = '') {
    const display = await screen.findByTestId('numeric-pad-display');
    expect(display).toHaveTextContent(new RegExp(`^${value}$`));

    const operatorDisplay = await screen.findByTestId('numeric-pad-message');
    expect(operatorDisplay).toHaveTextContent(operator);
}

export * from '@testing-library/react';
export * as user from '@testing-library/user-event';
