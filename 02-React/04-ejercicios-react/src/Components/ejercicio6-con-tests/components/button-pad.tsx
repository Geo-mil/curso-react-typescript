import * as React from 'react';
import './numeric-pad-styles.css';

export type ButtonContent = {
    view: React.ReactNode;
    value: string;
};
export type NumericPadProps = {
    buttons: (string | ButtonContent)[][];
    display: string;
    message?: string;
    onButtonPressed: (value: string) => void;
};
export function ButtonPad({
    buttons,
    display,
    message,
    onButtonPressed
}: NumericPadProps) {
    const buttonRows = buttons.map((rowOfButtons, index) => {
        return (
            <RowButtons key={`row-${index}`}>
                {rowOfButtons.map(buttonText => {
                    const value =
                        typeof buttonText === 'string'
                            ? buttonText
                            : buttonText.value;
                    const element =
                        typeof buttonText === 'string'
                            ? buttonText
                            : buttonText.view;
                    return (
                        <RowButton
                            view={element}
                            value={value}
                            onClick={onButtonPressed}
                            key={value}
                        />
                    );
                })}
            </RowButtons>
        );
    });

    return (
        <div className={'Container'}>
            <div className={'Display'}>
                <div
                    data-testid={'numeric-pad-message'}
                    className={message ? 'Message' : ''}
                >
                    {message}
                </div>
                <div data-testid={'numeric-pad-display'} className={'Numbers'}>
                    {display}
                </div>
            </div>
            <div data-testid={'numeric-pad-buttons'} className={'PanelButtons'}>
                {buttonRows}
            </div>
        </div>
    );
}

type RowButtonProps = {
    view: React.ReactNode;
    value: string;
    onClick: (value: string) => void;
};
function RowButton({ view, value, onClick }: RowButtonProps) {
    return (
        <button
            className={'Button'}
            data-testid={`numeric-pad-button-${value}`}
            key={value}
            onClick={() => onClick(value)}
        >
            {view}
        </button>
    );
}

type RowButtonsProps = {
    children: React.ReactNode;
};
function RowButtons({ children }: RowButtonsProps) {
    return (
        <div data-testid={'numeric-pad-buttons-row'} className={'ButtonRow'}>
            {children}
        </div>
    );
}
