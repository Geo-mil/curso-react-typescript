import * as React from 'react';

type Action = {
    type: 'increment' | 'reset' | 'start' | 'stop' ;
};

type State = {
    counter: number;
    isStarted: boolean;
};

function reducer( state: State, action: Action) {
    switch( action.type){
        case 'increment':
           return {
               counter: state.counter + 1,
               isStarted: true
           };
        
        case 'reset':
            return {
                counter: 0,
                isStarted: false
            }
        
        case 'start':
            return {
                ...state, 
                isStarted: true
            };
        
        case 'stop':
            return {
                ...state,
                isStarted: false
            };
        default:
            return state;
        
    }
}

function useCounter(){
    
    const initialState = {
        counter: 0,
        isStarted: false
    };

    const [ state, dispatch ] = React.useReducer(reducer, initialState);
    const timer = React.useRef<NodeJS.Timer>();

    const handleStart = ( ) => {
        console.log('state', state);
        if( !state.isStarted ){
            dispatch({ type: 'start'});
            timer.current = setInterval(() => {
    
                dispatch({ type: 'increment'});
                
            }, 1000);
        };
    };
 
    const handleStop = () => {
        
        dispatch({ type: 'reset' });
        clearInterval( timer.current );
        
    };

    const handlePause = () => {
        clearInterval( timer.current );
        dispatch({ type: 'stop'});
    }

    return {
        start: handleStart,
        pause: handlePause,
        stop: handleStop,
        counter: state.counter,
        disabled: state.isStarted
    }
}

export const Cronometro = () => {

    const { start, pause, stop, counter, disabled } = useCounter();

  return (

    <div style={{ border: '3px solid green', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <h1>{ counter }</h1>

    <div style={{ display: 'flex', backgroundColor: 'tomato'}}>
        <button onClick={ start } disabled={ disabled }>Start</button>
        <button onClick={ pause }>Pause</button>
        <button onClick={ stop }>Stop</button>
    </div>
    </div>
  )
}
