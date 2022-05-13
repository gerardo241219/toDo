import { useEffect, useState } from "react"
// Importaciones para la utilizacion de SweetAlert

    const Formulario = ( {tareas, setTareas, tarea, setTarea } ) => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const alta = document.querySelector('#alta');
    const baja = document.querySelector('#baja');
    const media = document.querySelector('#media');

    // Espera un cambio para realizar la modificacion
    useEffect(() => {
        if( Object.keys(tarea).length > 0 ) {
            setTitulo(tarea.titulo);
            setDescripcion(tarea.descripcion);
            
            if(tarea.prioridad === "Alta") {
                alta.checked = true;
            }

            if(tarea.prioridad === "Media") {
                media.checked = true;
            }

            if(tarea.prioridad === "Baja") {
                baja.checked = true;
            }
        }
    }, [tarea])

    // Funcion para enviar el formulario
    const handleSubmit = e => {
        e.preventDefault();

        // Alerta de Error
        if( [titulo, descripcion, prioridad ].includes('') ) { // Verifica que dentro del arreglo no existe un espacio vacio
            Swal.fire({
                icon: 'info',
                title: '¡Alto!',
                text: 'Debes de llenar todos los campos para poder registrar una nueva tarea',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#63738a'
            })
            return; // Evitamos leer el siguiente codigo
        }

        const generaKey = () => { // Creacion de una clave aleatoria para la key
            const random = Math.random().toString(36).substr(2);
            const fecha = Date.now().toString(36);

            return random + fecha;
        }

        const objTarea = { // Creacion de objeto con los datos del formulario
            titulo,
            descripcion,
            prioridad
        }

        // Editar tarea
        if( tarea.id ) { // Comprobamos si hemos dado clic en una tarea para editar
            // Editando registro
            objTarea.id = tarea.id;
            const tareaActualiza = tareas.map( tareaState => tareaState.id === tarea.id ? objTarea : tareaState);
            setTareas(tareaActualiza);
            setTarea({});

        } else {
            
            // Agregar registro
            objTarea.id = generaKey();
            setTareas([...tareas, objTarea]); // Asignacion al State de tareas con la nueva tarea por registrar (Metodo inmutable)
        }

        setTitulo('');
        setDescripcion('');
        setPrioridad('');
        alta.checked = false;
        media.checked = false;
        baja.checked = false;
    }

    return (
        <div className="my-10 p-5  md:w-3/5 lg:w-1/2">
            <h3 className="text-white text-2xl text-center">Ten el {' '}
                <span className="text-slate-500 uppercase">control</span>
                {' '}de tu {' '}
                <span className="text-slate-500 uppercase">vida</span>
            </h3>
            <h2 className="text-white text-lg text-center mt-1">Planifica tu {' '}
                <span className="text-slate-500 uppercase">día</span> {' '} a {''}
                <span className="text-slate-500 uppercase">día</span>
            </h2>

            <form 
                className="border border-slate-500 rounded-lg w-full mx-auto mt-10 py-10 px-5"
                onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="titulo"
                        className="text-slate-500">
                        Titulo
                    </label>
                    <input
                        type="text"
                        id="titulo"
                        placeholder="Titulo de la actividad"
                        value={titulo}
                        className="w-full bg-transparent text-white border-b-2 mt-2 placeholder:text-sm placeholder:text-gray-400 focus:outline-none"
                        onChange={(e) => {setTitulo(e.target.value)}}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="descripcion"
                        className="text-slate-500">
                        Descripcion
                    </label>
                    <textarea 
                        id="descripcion" 
                        cols="30" 
                        rows="10"
                        value={descripcion}
                        placeholder="Agrega aqui la descripcion de la tarea"
                        className="w-full bg-transparent text-white border-2 rounded-lg p-2 mt-2 placeholder:text-sm placeholder:text-gray-400 focus:outline-none"
                        onChange={(e) => {setDescripcion(e.target.value)}}>    
                    </textarea>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="prioridad"
                        className="text-slate-500">
                        Prioridad
                    </label>
                    <label
                        htmlFor="prioridad"
                        className="block ml-5 mt-2">
                        <input 
                            type="radio" 
                            name="prioridad"
                            id="alta"
                            onClick={() => {setPrioridad("Alta")}}
                        />
                        <span className="text-white ml-2">Alta</span>
                    </label>
                    <label
                        htmlFor="media"
                        className="block ml-5 mt-2">
                        <input 
                            type="radio" 
                            name="prioridad"
                            id="media"
                            onClick={() => {setPrioridad("Media");}}
                        />
                        <span className="text-white ml-2">Media</span>
                    </label>
                    <label
                        htmlFor="baja"
                        className="block ml-5 mt-2">
                        <input 
                            type="radio" 
                            name="prioridad"
                            id="baja"
                            onClick={() => {setPrioridad("Baja");}}
                        />
                        <span className="text-white ml-2">Baja</span>
                    </label>
                </div>
                <div className="mb-3">
                    <input 
                        type="submit"
                        className="w-full bg-slate-500 py-2 text-white cursor-pointer transition delay-100 hover:bg-slate-600"
                        value={tarea.id ? "Editar" : "Registrar"}
                    />
                </div>
            </form>
        </div>
    )
}

export default Formulario