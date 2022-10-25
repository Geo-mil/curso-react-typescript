import React from "react"

type Operations = "+" | "-" | "*" | "/";

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
  result?: number;
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
      }
    case "SET_NUMBER":
        let valor = 0
        if(state.value !== undefined){
            valor = state.value
        }

        let resultado = 0
        if(state.result !== undefined){
          resultado = state.result
        }

        if (state.operation)
        return {
          result: (resultado*10) + action.payload,
          operation: state.operation,
          value: valor,
        }
    
        return {
            result: undefined,
            operation: undefined,
            value: action.payload + (valor*10),
        };
      
    case "CALCULATE":
      if (typeof state.value == "number"){
        let resultado = 0
        if(state.result !== undefined){
          resultado = state.result
        }
      switch(state.operation){
        case "*" :
            return {
                result: resultado * state.value,
              }
        case "+" :
            return {
                result: resultado + state.value,
            }
        case "-" :
            return {
                result: state.value - resultado,
              }
        case "/" :
            if(state.result === 0){
              return{
                value: 0,
                result: undefined,
                operation: undefined,
                error: "DIVISION POR CERO"
              }
            }
            return {
                result: state.value / resultado,
                }
        default:
            return { 
                result: resultado
            }
      }
    } 
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
    if (result.operation && (result.result !== undefined)) return result.result
    if (result.value || (result.value === 0)) return result.value;
    return result.result;
  };
  return (
    <div style={{ border: '3px solid green', 
                display: 'flex', 
                justifyContent: 'center', 
                flexDirection: 'column', 
                }}>
      <h1>Calculadora</h1>
      <h2>{screenResult()}</h2>
      <div>
        <button onClick={() => dispatch({ payload: 7, type: "SET_NUMBER" })}>7</button>
        <button onClick={() => dispatch({ payload: 8, type: "SET_NUMBER" })}>8</button>
        <button onClick={() => dispatch({ payload: 9, type: "SET_NUMBER" })}>9</button>
        <button onClick={() => dispatch({ payload: "*", type: "SET_OPERATION" })}>*</button>
      </div>
      <div>
        <button onClick={() => dispatch({ payload: 4, type: "SET_NUMBER" })}>4</button>
        <button onClick={() => dispatch({ payload: 5, type: "SET_NUMBER" })}>5</button>
        <button onClick={() => dispatch({ payload: 6, type: "SET_NUMBER" })}>6</button>
        <button onClick={() => dispatch({ payload: "-", type: "SET_OPERATION" })}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch({ payload: 1, type: "SET_NUMBER" })}>1</button>
        <button onClick={() => dispatch({ payload: 2, type: "SET_NUMBER" })}>2</button>
        <button onClick={() => dispatch({ payload: 3, type: "SET_NUMBER" })}>3</button>
        <button onClick={() => dispatch({ payload: "+", type: "SET_OPERATION" })}>+</button>
      </div>
      <div>
        <button>_</button>
        <button onClick={() => dispatch({ payload: 0, type: "SET_NUMBER" })}>0</button>
        <button onClick={() => dispatch({ type: "CALCULATE" })}>=</button>
        <button onClick={() => dispatch({ payload: "/", type: "SET_OPERATION" })}>/</button>
      </div>
      </div>
  );
}