import * as React from "react";

export const Impares = () => {
    const [numero, setNum] = React.useState(0);
   
    function tick() {
        setNum(Math.trunc(Math.random()* 100))
    }
    
    React.useEffect(() => {
        const interval = setInterval(tick, 2000);
        return () => {
            clearInterval(interval);
        }
    },[])
    
    let esImpar = numero%2 === 0 ? 'par' : 'impar'
    
    return (
        <div>
            <p>{'El número ' + numero + ' es ' + esImpar }</p>
        </div>
    ) 
}

