import { useState } from "react";
import Tarea from "./Tarea"

const Tareas = ({ tareas, setTareas, setTarea, finalizarTarea }) => {

  const ordenamiento = { 'Alta': 1, 'Media': 2, 'Baja': 3 };

  const ordenado = tareas.sort(((a, b) => ordenamiento[a.prioridad] - ordenamiento[b.prioridad]));

  return (
    <div className="my-10 p-5 md:w-3/5 lg:w-1/2">
      {
        tareas && tareas.length ? (
          <>
            <h3 className="text-white text-center text-2xl">Administra tus {' '}
              <span className="uppercase text-slate-500">actividades</span>
            </h3>
            <h2 className="text-white text-lg text-center mt-1">El {' '}
              <span className="text-slate-500 uppercase">querer</span> {' '}
              es {' '}
              <span className="text-slate-500 uppercase">Poder</span>
            </h2>
            <div className="mt-10 h-screen overflow-y-scroll">
              {
                ordenado.map(tarea => (
                  <Tarea 
                    key={tarea.id}
                    tarea={tarea}
                    setTareas={setTareas}
                    setTarea={setTarea}
                    finalizarTarea={finalizarTarea}
                  />
                ))}

            </div>
          </>
        ) : (
          <>
            <h3 className="text-white text-center text-2xl">Administra tus {' '}
              <span className="uppercase text-slate-500">actividades</span>
            </h3>
            <h2 className="text-slate-500 text-md text-center mt-1">Aun no has registrado ninguna actividad</h2>
          </>
        )
      }
    </div>
  )
}

export default Tareas