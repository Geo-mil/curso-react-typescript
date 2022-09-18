import React from "react";

export function Calculator() {
  const [result, setResult] = React.useState("");
  const [operations, setOperations] = React.useState<string[]>([]);
  const [storedNumbers, setStoredNumbers] = React.useState<string[]>([]);
  function inputNumber(value: string) {
    if (!parseInt(value)) {
      setOperations([...operations, value]);
      setStoredNumbers([...storedNumbers, result]);
      setResult("");
    } else {
      setResult(result + value);
    }
  }

  return (
    <>
      <h1>
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      </h1>

      <h2 data-testid={"calculator-display-box"}>{result}</h2>
      <div data-testid={"calculator-row"}>
        <button data-testid={"calculator-button-7"}>7</button>
        <button data-testid={"calculator-button-8"}>8</button>
        <button data-testid={"calculator-button-9"}>9</button>
        <button data-testid={"calculator-button-product"}>x</button>
      </div>
      <div data-testid={"calculator-row"}>
        <button data-testid={"calculator-button-4"}>4</button>
        <button
          onClick={() => inputNumber("5")}
          data-testid={"calculator-button-5"}
        >
          5
        </button>
        <button data-testid={"calculator-button-6"}>6</button>
        <button data-testid={"calculator-button-minus"}>-</button>
      </div>
      <div data-testid={"calculator-row"}>
        <button
          onClick={() => inputNumber("1")}
          data-testid={"calculator-button-1"}
        >
          1
        </button>
        <button
          onClick={() => inputNumber("2")}
          data-testid={"calculator-button-2"}
        >
          2
        </button>
        <button data-testid={"calculator-button-3"}>3</button>
        <button
          onClick={() => inputNumber("+")}
          data-testid={"calculator-button-add"}
        >
          +
        </button>
      </div>
      <div data-testid={"calculator-row"}>
        <button data-testid={"calculator-button-0"}>0</button>
        <button data-testid={"calculator-button-equal"}>=</button>
        <button data-testid={"calculator-button-dot"}>.</button>
        <button data-testid={"calculator-button-clear"}>CE</button>
      </div>
    </>
  );
}
