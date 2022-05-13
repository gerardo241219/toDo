import Header from "./components/Header"
import Formulario from "./components/Formulario"
import Tareas from "./components/Tareas"
import { useState, useEffect } from "react"

const App = () => {

  const [tareas, setTareas] = useState([]);  // State que almacenara un arreglo de tareas agregadas
  const [tarea, setTarea] = useState([]);

  useEffect(() => {
    const obtenerTareas = () => {
      const listaTareas = JSON.parse(localStorage.getItem('tareas')) ?? ['Hola'];
      setTareas(listaTareas);
    }

    obtenerTareas();
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  // Funcion para finalizar una tarea
  const finalizarTarea = id => {
    const tareasActualizadas = tareas.filter(tareas => tareas.id !== id);
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <div className="container mx-auto mt-20 p-5">
        <Header />
        <div className="md:flex justify-between">
          <Formulario
            tareas={tareas}
            setTareas={setTareas}
            tarea={tarea}
            setTarea={setTarea} />
          <Tareas
            tareas={tareas}
            setTareas={setTareas}
            setTarea={setTarea}
            finalizarTarea={finalizarTarea}
          />
        </div>
      </div>
    </>
  )
}

export default App