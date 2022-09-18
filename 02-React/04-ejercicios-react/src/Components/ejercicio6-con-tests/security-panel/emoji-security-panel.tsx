import * as React from 'react';
import { SecurityPanel } from '../components/security-panel';
import { useSecurityPanel } from './use-security-panel';

const pad = [
    [
        { view: '1️⃣', value: '1' },
        { view: '2️⃣', value: '2' },
        { view: '3️⃣', value: '3' }
    ],
    [
        { view: '4️⃣', value: '4' },
        { view: '5️⃣', value: '5' },
        { view: '6️⃣', value: '6' }
    ],
    [
        { view: '7️⃣', value: '7' },
        { view: '8️⃣', value: '8' },
        { view: '9️⃣', value: '9' }
    ],
    [
        { view: '#️⃣', value: '#' },
        { view: '0️⃣', value: '0' },
        { view: '⬅️', value: '<' }
    ]
];

export type EmojiSecurityPanelProps = {
    validPin?: string;
    initialMessage?: string;
};
export function EmojiSecurityPanel({
    validPin = '0000',
    initialMessage = 'Introduce tu Emoji PIN'
}: EmojiSecurityPanelProps) {
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
