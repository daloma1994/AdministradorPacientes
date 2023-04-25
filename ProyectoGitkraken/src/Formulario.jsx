import React, {useState} from "react";
import "./Formulario.css"
export default function Formulario(){

    const   [pacientes, setPacientes] = useState([])
    const  [mascota, setMascota] =useState("")
    const [dueño, setDueño] = useState ("")
    const [fecha, setFecha] = useState ("")
    const [hora, setHora] = useState ("")
    const [sintomas, setSintomas] = useState ("")

    function agregarPaciente(){
        const informacion={
            mascota,
            dueño,
            fecha,
            hora,
            sintomas
        }
        setPacientes([...pacientes,informacion])

        setMascota("")
        setDueño("")
        setFecha("")
        setHora("")
        setSintomas("")
    }

    return(

       
       <div>
        <form className="inputForm" action="">
        <label htmlFor="mascota">Nombre Mascota</label>    
        <input  placeholder="Nombre de su mascota" className="form-control border-success" id="mascota" onChange={(e) => {setMascota(e.target.value)}} value={mascota}  type="text" />
        <label htmlFor="">Nombre Dueño</label>
        <input placeholder="Nombre del dueño" className="form-control border-success" onChange={(e) =>{setDueño(e.target.value)}} value={dueño}   type="text" />
        <label htmlFor="">Fecha</label>
        <input className="form-control border-success" onChange={(e) =>{setFecha(e.target.value)}} value={fecha}   type="date" />
        <label htmlFor="">Hora</label>
        <input  className="form-control border-success" onChange={(e) =>{setHora(e.target.value)}} value={hora}   type="time" />
        <label htmlFor="">Sintomas</label> 
        <textarea className="form-control border-success"  onChange={(e) =>{setSintomas(e.target.value)}} value={sintomas} type="textarea"   textarea/>


        <button   className="btn btn-dark" onClick={agregarPaciente} type="button"  >AGREGAR CITA</button>
        
        </form>
       </div>

        
    )
}