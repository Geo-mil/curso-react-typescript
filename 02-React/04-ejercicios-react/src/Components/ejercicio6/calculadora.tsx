import * as React from "react";

type Operations = "+" | "-" | "*";

type SetOperation = "SET_OPERATION";
type SetNumber = "SET_NUMBER";
type Calculate = "CALCULATE";

type OperationsActions = {
  type: SetOperation;
  payload: Operations;
};

type NumberActions = {
  type: SetNumber;
  payload: number;
};

type CalculateAction = {
  type: Calculate;
};

type ResultsState = {
  error?: string;
  value?: number;
  operation?: Operations;
  //secondValue: number;
  result: number;
};

function calculateReducer(
  state: ResultsState,
  action: OperationsActions | NumberActions | CalculateAction
) {
  switch (action.type) {
    case "SET_OPERATION":
      return {
        ...state,
        result: state.result,
        operation: action.payload,
      };
    case "SET_NUMBER":
      if (state.operation)
        return {
          result: state.result,
          operation: state.operation,
          value: parseInt("" + action.payload + "" + state.value),
        };
      return {
        result: parseInt("" + action.payload + "" + state.value),
        operation: state.operation,
        value: parseInt("" + action.payload + "" + state.value),
      };
    case "CALCULATE":
      if (typeof state.value == "number")
        return {
          result: state.result + state.value,
        };
      else
        return {
          ...state,
          operation: undefined,
          error: "SINTAX ERROR",
        };

    default:
      return state;
  }
}

export function Calculadora() {
  const [result, dispatch] = React.useReducer(calculateReducer, { result: 0 });
  console.log(result);
  const screenResult = () => {
    if (result.error) return result.error;
    if (result.operation && result.value) return "" + result.value;
    return result.result;
  };
  return (
    <>
      <h1>Calculadora</h1>
      <h3>{screenResult()}</h3>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>
      <div>
        <button onClick={() => dispatch({ payload: 1, type: "SET_NUMBER" })}>
          1
        </button>
        <button>2</button>
        <button>3</button>
        <button
          onClick={() => dispatch({ payload: "+", type: "SET_OPERATION" })}
        >
          +
        </button>
      </div>
      <div>
        <button>0</button>
        <button onClick={() => dispatch({ type: "CALCULATE" })}>=</button>
      </div>
    </>
  );
}
