import * as React from 'react';
import { SecurityPanel } from '../components/security-panel';
import { useSecurityPanel } from './use-security-panel';

const pad = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['#', '0', '<']
];
export type NumericSecurityPanelProps = {
    validPin?: string;
    initialMessage?: string;
};
export function NumericSecurityPanel({
    validPin = '0000',
    initialMessage = 'Introduce tu PIN'
}: NumericSecurityPanelProps) {
    const { display, message, onClickPadButton, validate } = useSecurityPanel(
        validPin,
        initialMessage
    );
    return (
        <SecurityPanel
            pad={pad}
            message={message}
            display={display}
            onClickPadButton={onClickPadButton}
            onClickValidate={validate}
        />
    );
}
