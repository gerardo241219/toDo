const Tarea = ({ tarea, setTareas, setTarea, finalizarTarea }) => {

    const { titulo, descripcion, prioridad, id } = tarea;

    const handleFinalizar = () => {
        
        Swal.fire({
            icon: 'question',
            title: '¿Terminate tu actividad?',
            text: 'Recuerda que tus metas dependen de ti',
            confirmButtonText: '¡Termine!',
            showCancelButton: true

        }).then((result) => {
            
            if( result.isConfirmed ) {
                
                Swal.fire({
                    icon: 'success',
                    title: 'Tarea finalizara con satisfaccion',
                    text: 'Sigue hacia delante. Estas por completar lo que tanto deseas.',
                    timer: 2000,
                    showConfirmButton: false,
                })

                finalizarTarea(id);
            }
        })
    }

    return (

        <>
            {prioridad === "Alta" &&
                <div className="border border-red-600 rounded-lg p-5 mb-2">
                    <h3 className="text-center text-white font-bold">{titulo}</h3>
                    <p className="mt-5 text-slate-500 text-sm text-justify">{descripcion}</p>
                    <h3 className="text-center text-lg text-red-600 uppercase">{prioridad}</h3>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-slate-500 w-2/5 py-2 text-center mt-5 text-white"
                            onClick={handleFinalizar}>
                            Finalizar
                        </button>
                        <button
                            type="button"
                            className="bg-amber-500 w-2/5 py-2 text-center mt-5 text-white"
                            onClick={() => {setTarea(tarea)}}>
                            Editar
                        </button>
                    </div>
                </div>
            }

            {prioridad === "Media" &&
                <div className="border border-amber-500 rounded-lg p-5 mb-2">
                    <h3 className="text-center text-white font-bold">{titulo}</h3>
                    <p className="mt-5 text-slate-500 text-sm text-justify">{descripcion}</p>
                    <h3 className="text-center text-lg text-amber-500 uppercase">{prioridad}</h3>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-slate-500 w-2/5 py-2 text-center mt-5 text-white"
                            onClick={handleFinalizar}>
                            Finalizar
                        </button>
                        <button
                            type="button"
                            className="bg-amber-500 w-2/5 py-2 text-center mt-5 text-white"
                            onClick={() => {setTarea(tarea)}}>
                            Editar
                        </button>
                    </div>
                </div>
            }

            {prioridad === "Baja" &&
                <div className="border border-slate-600 rounded-lg p-5 mb-2">
                    <h3 className="text-center text-white font-bold">{titulo}</h3>
                    <p className="mt-5 text-slate-500 text-sm text-justify">{descripcion}</p>
                    <h3 className="text-center text-lg text-slate-600 uppercase">{prioridad}</h3>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-slate-500 w-2/5 py-2 text-center mt-5 text-white"
                            onClick={handleFinalizar}>
                            Finalizar
                        </button>
                        <button
                            type="button"
                            className="bg-amber-500 w-2/5 py-2 text-center mt-5 text-white"
                            onClick={() => {setTarea(tarea)}}>
                            Editar
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default Tarea