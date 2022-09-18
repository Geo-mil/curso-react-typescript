import {
    render,
    screen,
    checkButtonsRow,
    clickButton,
    checkDisplay
} from './test-utils';

import { RetroCalculator } from '.';

describe('RetroCalculator component', () => {
    it('should render all elements', async () => {
        render(<RetroCalculator />);

        await screen.findByTestId('numeric-pad-display');
        await screen.findByTestId('numeric-pad-buttons');

        const rowsOfButtons = await screen.findAllByTestId(
            `numeric-pad-buttons-row`
        );
        expect(rowsOfButtons).toHaveLength(4);

        await checkButtonsRow(rowsOfButtons[0], ['1', '2', '3', /\+/]);
        await checkButtonsRow(rowsOfButtons[1], ['4', '5', '6', /--/]);
        await checkButtonsRow(rowsOfButtons[2], ['7', '8', '9', /\*/]);
        await checkButtonsRow(rowsOfButtons[3], ['C', '0', '=', /\//]);
    });

    it('should show 0 as initial value', async () => {
        render(<RetroCalculator />);

        await checkDisplay('0');
    });

    it('should show numbers in display', async () => {
        render(<RetroCalculator />);

        await clickButton(/1/);
        await checkDisplay('1');

        await clickButton(/2/);
        await clickButton(/0/);
        await checkDisplay('120');
    });

    it('should show operation in display', async () => {
        render(<RetroCalculator />);

        await clickButton(/1/);
        await clickButton(/2/);
        await clickButton(/\+/);
        await checkDisplay('12', '+');

        await clickButton(/--/);
        await checkDisplay('12', '-');

        await clickButton(/\*/);
        await checkDisplay('12', '*');

        await clickButton(/\//);
        await checkDisplay('12', '/');
    });

    it('should clear display when press numeric button after select an operation', async () => {
        render(<RetroCalculator />);

        await clickButton(/1/);
        await clickButton(/2/);
        await clickButton(/--/);
        await clickButton(/2/);
        await checkDisplay('2', '-');
    });

    it('should clear display when press C', async () => {
        render(<RetroCalculator />);

        await clickButton(/3/);
        await clickButton(/\+/);
        await clickButton(/2/);
        await clickButton(/=/);
        await clickButton(/C/);
        await checkDisplay('0');
    });

    it('should display 5 when perform 3 + 2', async () => {
        render(<RetroCalculator />);

        await clickButton(/3/);
        await clickButton(/\+/);
        await clickButton(/2/);
        await clickButton(/=/);
        await checkDisplay('5');
    });

    it('should display 1 when perform 3 - 2', async () => {
        render(<RetroCalculator />);

        await clickButton(/3/);
        await clickButton(/--/);
        await clickButton(/2/);
        await clickButton(/=/);
        await checkDisplay('1');
    });

    it('should display 6 when perform 3 * 2', async () => {
        render(<RetroCalculator />);

        await clickButton(/3/);
        await clickButton(/\*/);
        await clickButton(/2/);
        await clickButton(/=/);
        await checkDisplay('6');
    });

    it('should display 3 when perform 6 / 2', async () => {
        render(<RetroCalculator />);

        await clickButton(/6/);
        await clickButton(/\//);
        await clickButton(/2/);
        await clickButton(/=/);
        await checkDisplay('3');
    });

    it('should start a new operation after equal if press a number', async () => {
        render(<RetroCalculator />);

        await clickButton(/6/);
        await clickButton(/\//);
        await clickButton(/2/);
        await clickButton(/=/);
        await clickButton(/5/);

        await checkDisplay('5');
    });

    it('should use last result as first member when press an operator after equal', async () => {
        render(<RetroCalculator />);

        await clickButton(/6/);
        await clickButton(/\//);
        await clickButton(/2/);
        await clickButton(/=/);
        await clickButton(/\*/);

        await checkDisplay('3', '*');

        await clickButton(/1/);
        await clickButton(/6/);
        await clickButton(/=/);

        await checkDisplay('48');
    });

    it('should perform 6*= as 6*6', async () => {
        render(<RetroCalculator />);

        await clickButton(/=/);
        await checkDisplay('0');

        await clickButton(/6/);
        await clickButton(/=/);
        await checkDisplay('6');

        await clickButton(/\*/);
        await clickButton(/=/);
        await checkDisplay('36');
    });

    it('should perform 3+= as 3+3', async () => {
        render(<RetroCalculator />);

        await clickButton(/3/);
        await clickButton(/\+/);
        await clickButton(/=/);
        await checkDisplay('6');
    });
});

export {};
