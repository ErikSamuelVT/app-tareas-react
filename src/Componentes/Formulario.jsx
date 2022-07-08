import {useState} from 'react'
import { v4 as uuidv4 } from "uuid";

import "../Estilos/Formulario.css";

function Formulario({agregarTarea}) {

  const [input, setInput] = useState('')

  const recibirInformacion = (e) => {
    setInput(e.target.value)
  }

  const enviarInformacion = (e) => {
    e.preventDefault()

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    agregarTarea(tareaNueva)
  }

  return (
    <form 
      className='formulario'
      onSubmit={enviarInformacion}
    >
      <input className='input' type="text" placeholder='Escribe una tarea' name='texto' onChange={recibirInformacion}/>
      <button className='boton' onClick={() => agregarTarea()}>Agregar</button>
    </form>
  )
}

export default Formulario