import * as React from "react"

export const FechaDigital = (props: {ubicacion: string, timeZone: string}) => {
    const [date, setTime] = React.useState(new Date());

    React.useEffect(function () {
        const myTimer = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return function () {
            clearInterval(myTimer);
        }
    }, []);

    const placeDate = transformDate(date, {country: props.ubicacion,  timeZone: props.timeZone })

    return (
        <div>
            <p> {placeDate} </p>
        </div>
    )
}

type TransformDateOptions = {
    country: string,
    timeZone: string
}

function transformDate(DateToTransform: Date, options: TransformDateOptions){
    const date = DateToTransform.toLocaleDateString(options.country, {timeZone: options.timeZone})
    return date
}