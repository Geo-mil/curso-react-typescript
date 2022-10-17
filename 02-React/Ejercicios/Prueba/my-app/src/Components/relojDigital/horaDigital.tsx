import * as React from "react"

export const HoraDigital = (props: {ubicacion: string, timeZone: string}) => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(function () {
        const myTimer = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return function () {
            clearInterval(myTimer);
        }
    }, []);

    const placeTime = transformTime(time, {country: props.ubicacion,  timeZone: props.timeZone })

    return (
        <div>
            <h2> {placeTime} </h2>
        </div>
    )
}

type TransformDateOptions = {
    country: string,
    timeZone: string
}

function transformTime(timeToTransform: Date, options: TransformDateOptions){
    const hora = timeToTransform.toLocaleTimeString(options.country, {timeZone: options.timeZone})
    return hora
}