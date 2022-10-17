import React from 'react';
//import logo from './logo.svg';
//import logo from './MicrosoftTeams.png';
import './App.css';
import { ShowUserComponent } from './Components/nombres/pillarNombres'
import { Calendar } from './Components/reloj/reloj'
import { Impares } from './Components/tick/impares'
import { RelojDijital } from './Components/relojDigital/relojDigital'
import GithubPerfil from './Components/githook/github'
import GithooksRepo from './Components/githook/githooks';
import { Crono } from './Components/crono/crono';
import DatosDeNombre from './Components/githook/datosDeNombre';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
      < Crono />  
      <br/>
      <div>
        < DatosDeNombre />
        < GithooksRepo name='Gorkyte' />
        < GithubPerfil gitName='Jorge-Prilux' />
      </div>
      <div style={{display: "flex",flexDirection: "row"}}>
      < RelojDijital ubicacion="es-ES" timeZone="Europe/Madrid" />
      < RelojDijital ubicacion="en-US" timeZone="America/New_York" />
      </div>
      < Impares />
      < Calendar />
        <br/>
        <img src={"https://prilux.es/wp-content/uploads/2021/11/logo-prilux-1x1-1.svg"} className="App-logo" alt="logo" width="400"/>
        <p>
          < ShowUserComponent />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
