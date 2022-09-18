import * as React from 'react';
import { Calculator } from './components/calculator';

const retroCalculatorOperators = ['', '*', '+', '-', '/'] as const;
type RetroCalculatorOperators = typeof retroCalculatorOperators[number];

type RetroCalculatorState = {
    lastResult: string;
    isFirstValueAfterOperator: boolean;
    display: string;
    operator: RetroCalculatorOperators;
};

type RetroCalculatorSetValue = {
    type: 'SET_VALUE';
    payload: string;
};
type RetroCalculatorSetOperator = {
    type: 'SET_OPERATOR';
    payload: RetroCalculatorOperators;
};
type RetroCalculatorCalculate = {
    type: 'CALCULATE';
};
type RetroCalculatorClear = {
    type: 'CLEAR';
};

type RetroCalculatorActions =
    | RetroCalculatorSetValue
    | RetroCalculatorSetOperator
    | RetroCalculatorCalculate
    | RetroCalculatorClear;

const retroCalculatorInitialState: RetroCalculatorState = {
    lastResult: '',
    isFirstValueAfterOperator: false,
    display: '0',
    operator: ''
};

function setValue(state: RetroCalculatorState, value: string) {
    if (state.isFirstValueAfterOperator) {
        return {
            ...state,
            isFirstValueAfterOperator: false,
            display: parseInt(value) + ''
        };
    }
    return {
        ...state,
        display: parseInt(state.display + value) + ''
    };
}

function setOperator(
    state: RetroCalculatorState,
    operator: RetroCalculatorOperators
) {
    return {
        ...state,
        lastResult: state.display,
        isFirstValueAfterOperator: true,
        operator: operator
    };
}

function calculate(state: RetroCalculatorState): RetroCalculatorState {
    const { lastResult, display, operator } = state;
    if (!lastResult || !display || !operator) return state;
    let result = 0;
    switch (operator) {
        case '+': {
            result = parseInt(lastResult) + parseInt(display);
            break;
        }
        case '-': {
            result = parseInt(lastResult) - parseInt(display);
            break;
        }
        case '*': {
            result = parseInt(lastResult) * parseInt(display);
            break;
        }
        case '/': {
            result = parseInt(lastResult) / parseInt(display);
            break;
        }
    }

    return {
        isFirstValueAfterOperator: true,
        lastResult: '',
        operator: '',
        display: result + ''
    };
}

function retroCalculatorReducer(
    state: RetroCalculatorState,
    action: RetroCalculatorActions
) {
    switch (action.type) {
        case 'CLEAR':
            return retroCalculatorInitialState;
        case 'SET_VALUE':
            return setValue(state, action.payload);
        case 'SET_OPERATOR':
            return setOperator(state, action.payload);
        case 'CALCULATE':
            return calculate(state);
    }
    return state;
}

function useCalculator() {
    const [state, dispatch] = React.useReducer(
        retroCalculatorReducer,
        retroCalculatorInitialState
    );

    function dispatchValue(value: string) {
        dispatch({ type: 'SET_VALUE', payload: value });
    }

    function dispatchOperator(operator: RetroCalculatorOperators) {
        dispatch({ type: 'SET_OPERATOR', payload: operator });
    }

    function dispatchCalculus() {
        dispatch({ type: 'CALCULATE' });
    }

    function clearDisplay() {
        dispatch({ type: 'CLEAR' });
    }

    return {
        dispatchValue,
        dispatchOperator,
        calculate: dispatchCalculus,
        clear: clearDisplay,
        display: state.display,
        operator: state.operator
    };
}

const validNumber = Array.from({ length: 10 }, (_, index) => index + '');

function isARetroOperator(value: string): value is RetroCalculatorOperators {
    return retroCalculatorOperators.includes(value as RetroCalculatorOperators);
}

export function RetroCalculator() {
    const {
        display,
        operator,
        dispatchOperator,
        dispatchValue,
        calculate,
        clear
    } = useCalculator();

    function onButtonPressed(value: string) {
        if (validNumber.includes(value)) dispatchValue(value);
        else if (isARetroOperator(value)) dispatchOperator(value);
        else if (value === '=') calculate();
        else if (value === 'C') clear();
    }

    return (
        <Calculator
            display={display}
            message={operator}
            onButtonPressed={onButtonPressed}
        />
    );
}
