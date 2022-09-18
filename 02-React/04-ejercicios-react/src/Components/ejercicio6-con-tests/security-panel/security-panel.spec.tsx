import {
    checkButtonsRow,
    checkDisplay,
    clickButton,
    render,
    screen
} from '../test-utils';
import { EmojiSecurityPanel, NumericSecurityPanel } from '.';

function runTestWith(name: string, View: (...args: any[]) => JSX.Element) {
    describe(`${name} Security Panel`, () => {
        it('should render all elements', async () => {
            render(<View />);

            await screen.findByTestId('numeric-pad-display');
            await screen.findByTestId('numeric-pad-buttons');
            await screen.findByTestId('security-panel-message');
            await screen.findByTestId('security-panel-validate-button');

            const rowsOfButtons = await screen.findAllByTestId(
                `numeric-pad-buttons-row`
            );
            expect(rowsOfButtons).toHaveLength(4);

            await checkButtonsRow(rowsOfButtons[0], ['1', '2', '3']);
            await checkButtonsRow(rowsOfButtons[1], ['4', '5', '6']);
            await checkButtonsRow(rowsOfButtons[2], ['7', '8', '9']);
            await checkButtonsRow(rowsOfButtons[3], ['#', '0', '<']);
        });

        it('should show empty display at init', async () => {
            render(<View />);

            await checkDisplay('');
        });

        it('should show numbers in display', async () => {
            render(<View />);

            await clickButton(/1/);
            await checkDisplay('1');

            await clickButton(/2/);
            await clickButton(/0/);
            await checkDisplay('120');
        });

        it('should let a maximum of 5 number', async () => {
            render(<View />);

            await clickButton(/1/);
            await clickButton(/2/);
            await clickButton(/3/);
            await clickButton(/4/);
            await clickButton(/5/);
            await clickButton(/6/);
            await checkDisplay('12345');
        });

        it('should delete the las number inserted', async () => {
            render(<View />);

            await clickButton(/1/);
            await clickButton(/2/);
            await clickButton(/</);
            await checkDisplay('1');
        });

        it('should not fails if try to delete without numbers', async () => {
            render(<View />);

            await clickButton(/</);
            await checkDisplay('');

            await clickButton(/1/);
            await clickButton(/2/);
            await clickButton(/</);
            await clickButton(/</);
            await checkDisplay('');

            await clickButton(/</);
            await checkDisplay('');

            await clickButton(/1/);
            await clickButton(/2/);
            await clickButton(/3/);
            await clickButton(/4/);
            await clickButton(/5/);
            await clickButton(/6/);
            await checkDisplay('12345');
            await clickButton(/</);
            await clickButton(/</);
            await clickButton(/</);
            await checkDisplay('12');
            await clickButton(/</);
            await checkDisplay('1');
            await clickButton(/</);
            await checkDisplay('');
            await clickButton(/</);
            await checkDisplay('');
        });

        it('should clear display when press #', async () => {
            render(<View />);

            await clickButton(/#/);
            await checkDisplay('');

            await clickButton(/1/);
            await clickButton(/2/);
            await clickButton(/#/);
            await checkDisplay('');
        });

        it('should accept default pin 0000', async () => {
            render(<View />);

            await clickButton(/0/);
            await clickButton(/0/);
            await clickButton(/0/);
            await clickButton(/0/);

            await clickButton(/validate-button/);
            await screen.findByText(/puedes pasar/i);
            await checkDisplay('');
        });

        it('should reject pin 1234', async () => {
            render(<View />);

            await clickButton(/1/);
            await clickButton(/2/);
            await clickButton(/3/);
            await clickButton(/4/);

            await clickButton(/validate-button/);
            await screen.findByText(/no eres digno/i);
            await checkDisplay('');
        });

        it('should accept pin 1234', async () => {
            render(<View validPin={'1234'} />);

            await clickButton(/1/);
            await clickButton(/2/);
            await clickButton(/3/);
            await clickButton(/4/);

            await clickButton(/validate-button/);
            await screen.findByText(/puedes pasar/i);
            await checkDisplay('');
        });

        it('should reset message when click any button after a validation try', async () => {
            const message = 'Hello Peter';
            render(<View validPin={'1234'} initialMessage={message} />);

            await screen.findByText(message);
            await clickButton(/1/);
            await clickButton(/2/);
            await clickButton(/3/);
            await clickButton(/4/);

            await clickButton(/validate-button/);
            await screen.findByText(/puedes pasar/i);
            await checkDisplay('');

            await clickButton(/4/);
            await screen.findByText(message);
            await checkDisplay('4');
        });
    });
}

runTestWith('Emoji', EmojiSecurityPanel);
runTestWith('Numeric', NumericSecurityPanel);
