import * as React from "react"
import { FechaDigital } from "./fechaDigital"
import { HoraDigital } from "./horaDigital"

export const RelojDijital = (props: {ubicacion: string, timeZone: string}) => {

    return (
        <div style={{border: "5px solid white", display: "flex", width: "15em", padding: "1em", margin: "1em", backgroundColor: "gray", flexDirection: "column", alignItems: "center" }}>
                <h3>{props.timeZone}</h3>
                < HoraDigital ubicacion = {props.ubicacion} timeZone = {props.timeZone} />
                < FechaDigital ubicacion = {props.ubicacion} timeZone = {props.timeZone} />
        </div>
    )

}