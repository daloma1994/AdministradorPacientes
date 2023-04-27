import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Formulario from './Formulario'
import Paciente from './Paciente'

function App() {
  const   [pacientes, setPacientes] = useState([])


  return (
    
    <div className="App">
     
      <div>
      <Header titulo="Crear Cita"/>
    
      <Formulario pacientes={pacientes}
      setPacientes={setPacientes}/>
      </div>
      <div>
      <Header titulo=" Citas Pendientes"/> 
     {pacientes.map((paciente)=> {
      return  <Paciente nombre={paciente.mascota} dueño={paciente.dueño}
      fecha={paciente.fecha} hora={paciente.hora} sintomas={paciente.sintomas}/>
     })}
  

     
      </div>

      
    </div>
  )
}

export default App
