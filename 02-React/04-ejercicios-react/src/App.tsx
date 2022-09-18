import * as React from 'react';
// import { FormName } from "./Components/ejercicio1/hello";
// import { ShowUserComponent } from "./Components/ejercicio2/show-user";
// import { Calendar } from "./Components/ejercicio3/clock";
// import { Repo } from "./Components/ejercicio4/github";
// import { Cronometro } from "./Components/ejercicio5/cronometro";
// import { Calculadora } from "./Components/ejercicio6/calculadora";
// import { Calculator } from "./Components/ejercicio7tests/calculator";
import {
    RetroCalculator,
    NumericSecurityPanel,
    EmojiSecurityPanel
} from './Components/ejercicio6-con-tests';
import './estilo.css';

function App() {
    return (
        <div>
            <RetroCalculator />
            <NumericSecurityPanel />
            <EmojiSecurityPanel />
            {/*
      <Calculator />
      <Calculadora />
      <Cronometro />
      <FormName />
      <ShowUserComponent />
      <Calendar />
      <Repo /> */}
        </div>
    );
}

export default App;
