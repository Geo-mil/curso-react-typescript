import * as React from "react";

export const Calendar = () => {

    const [time, setTime] = React.useState(new Date());

    React.useEffect(function () {
        const myTimer = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return function () {
            clearInterval(myTimer);
        }
    }, []);
    const madridTime = transformDate(time, { country: 'es-ES', timeZone: 'Europe/Madrid' });
    //const nuevaYorkTime = transformDate(time, { country: 'en-US', timeZone: 'America/New_York' });
    return (
        <div style={{ backgroundColor: "white", display: "flex", justifyContent: "center" }}>
            <CustomCalendar currentCalendar={madridTime} cityName="Madrid" />
            {/* <CustomCalendar currentCalendar={nuevaYorkTime} cityName="New York" /> */}
        </div>
    )
}
type CustomCalendarProps = {
    currentCalendar: TransformedDate;
    cityName: string;
}
const CustomCalendar = ({ currentCalendar, cityName }: CustomCalendarProps) => {
    //const dateToShow = currentCalendar.fecha;
    const timeToShow = currentCalendar.hora;

    return (
        <div style={{ border: "3px solid black", display: "flex", width: "30em", padding: "1em", margin: "1em", backgroundColor: "grey", flexDirection: "column", alignItems: "center" }}>
            {/*<h1>{cityName}</h1>*/}
            {/*<CustomDate currentDate={dateToShow} /> */}
            <CustomTime currentTime={timeToShow} />
        </div>
    )

}

type CustomTimeProps = {
    currentTime: string;
}
export const CustomTime = ({ currentTime }: CustomTimeProps) => {

    return (
        <h1>
            {currentTime}
        </h1>
    )
}

/*type CustomDateProps = {
    currentDate: string;
}
 const CustomDate = ({ currentDate }: CustomDateProps) => {

    return (
        <h1>
            {currentDate}
        </h1>
    )
} */
type TransformDateOptions = {
    country: string,
    timeZone: string
}
function transformDate(dateToTransform: Date, options: TransformDateOptions) {

    const fecha = dateToTransform.toLocaleDateString(options.country, { timeZone: options.timeZone });
    const hora = dateToTransform.toLocaleTimeString(options.country, { timeZone: options.timeZone });
    return { fecha, hora };
}

type TransformedDate = ReturnType<typeof transformDate>;
