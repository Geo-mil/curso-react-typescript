import React from "react";

type Accion = {
    type: 'incrementa' | 'resetea' | 'empieza' | 'para' ;
}

type State = {
    contador: number
    haIniciado: boolean
}

function reducer (estado: State, accion: Accion){

    switch(accion.type){
        case 'incrementa':
            return{
                contador: estado.contador +1,
                haIniciado: true
            }

        case 'resetea':
            return {
                contador: 0,
                haIniciado: false
            }

        case 'empieza':
            return{
                ...estado,
                haIniciado: true
            }
        
        case 'para':
            return {
                ...estado,
                haIniciado: false
            }
        
        default:
            return estado
    }
}

function useCrono(){

    const estadoInicial = {
        contador: 0,
        haIniciado: false
    }

    const [state, dispatch] = React.useReducer(reducer, estadoInicial)
    const timer = React.useRef<NodeJS.Timer>()

    const handleStart = () => {
        console.log('estado', state)
        if(!state.haIniciado){
            dispatch({ type: 'empieza'})
            timer.current = setInterval(() => {
                dispatch({ type: 'incrementa'})
            }, 1000)
        }
    }

    const handleStop = () => {
        dispatch({ type: 'resetea'})
        clearInterval( timer.current )
    }

    const handlePause = () => {
        clearInterval(timer.current)
        dispatch({type:'para'})
    }

    return {
        start: handleStart,
        pause: handlePause,
        stop: handleStop,
        counter: state.contador,
        disabled: state.haIniciado
    }
}

export const Crono = () => {
        
    const {start, pause, stop, counter, disabled} = useCrono()

    return(

        <div style={{ border: '3px solid green', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>{ counter }</h1>
            <div style={{ display: 'flex', backgroundColor: 'greenyellow'}}>
                <button onClick={start} disabled={disabled}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={stop}>Stop</button>
            </div>
        </div>
    )

}