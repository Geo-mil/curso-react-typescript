import * as React from 'react';

export function useSecurityPanel(validPin: string, initialMessage: string) {
    const [message, setMessage] = React.useState(initialMessage);
    const [pin, setPin] = React.useState('');
    function onNumericPadButtonPressed(value: string) {
        if (value === '<') {
            setPin(pin.slice(0, -1));
        } else if (value === '#') {
            setPin('');
        } else if (pin.length < 5) {
            setPin(pin + value);
        }
        setMessage(initialMessage);
    }

    function validatePin() {
        if (pin === validPin) setMessage('Puedes pasar!');
        else setMessage('No eres digno de pasar!');
        setPin('');
    }

    return {
        display: pin,
        message,
        onClickPadButton: onNumericPadButtonPressed,
        validate: validatePin
    };
}
