import { useState } from "react";

import '../Estilos/ListaTareas.css'

import Formulario from './Formulario'
import Tarea from './Tarea'

function ListaTareas() {

  const [tareas,setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if(tarea !== undefined){
      const tmpTareas = [tarea,...tareas]
      setTareas(tmpTareas)
    }
  }

  const eliminarTarea = (id) =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  }

  const completarTarea = (id) =>{
    const tareasActualizadas = tareas.map(tarea => { 
      if (tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea
    })
    setTareas(tareasActualizadas)
  }

  return (
    <>
      <Formulario agregarTarea={agregarTarea}/>
      <div className="contenedor-lista-tareas">
        { tareas.map(
          tarea => <Tarea 
                      key={tarea.id}
                      id={tarea.id}
                      texto={tarea.texto}
                      completada={tarea.completada}
                      completarTarea={completarTarea}
                      eliminarTarea={eliminarTarea}
                    />
        ) }
      </div>
    </>
  )
}

export default ListaTareas