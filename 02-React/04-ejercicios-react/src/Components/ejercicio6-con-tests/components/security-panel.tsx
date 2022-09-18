import * as React from 'react';
import { ButtonContent, ButtonPad } from './button-pad';
import './security-panel-styles.css';

export type SecurityPanelProps = {
    pad: (string | ButtonContent)[][];
    message: string;
    display: string;
    onClickPadButton: (value: string) => void;
    onClickValidate: () => void;
};
export function SecurityPanel({
    pad,
    display,
    message,
    onClickPadButton,
    onClickValidate
}: SecurityPanelProps) {
    return (
        <div className={'ContainerPanel'}>
            <h1
                data-testid={'security-panel-message'}
                className={'MessageAccess'}
            >
                {message}
            </h1>
            <ButtonPad
                buttons={pad}
                display={display}
                onButtonPressed={onClickPadButton}
            />
            <button
                className={'ButtonAccess'}
                data-testid={'security-panel-validate-button'}
                onClick={onClickValidate}
            >
                Acceder
            </button>
        </div>
    );
}
