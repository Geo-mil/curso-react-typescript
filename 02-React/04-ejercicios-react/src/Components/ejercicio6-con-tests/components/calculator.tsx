import * as React from 'react';
import { ButtonPad } from './button-pad';

export type CalculatorProps = {
    display: string;
    message?: string;
    onButtonPressed: (value: string) => void;
};
export function Calculator({
    display,
    message,
    onButtonPressed
}: CalculatorProps) {
    const pad = [
        ['1', '2', '3', '+'],
        ['4', '5', '6', '-'],
        ['7', '8', '9', '*'],
        ['C', '0', '=', '/']
    ];
    return (
        <ButtonPad
            buttons={pad}
            display={display}
            message={message}
            onButtonPressed={onButtonPressed}
        />
    );
}
