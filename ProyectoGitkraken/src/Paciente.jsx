import React from "react";
import "./Paciente.css"

export default function Paciente({nombre, dueño, fecha, hora, sintomas}){
    return(
        <div className="ContenedorCita">
            <div className="form-control border-success">
          
            <h2 >Nombre:{nombre}</h2>
            <h2>Dueño:{dueño}</h2>
            <h2>Fecha:{fecha}</h2>
            <h2>Hora:{hora}</h2>
            <h2>Sintomas:{sintomas}</h2>
            </div>
            
        </div>
    )
}