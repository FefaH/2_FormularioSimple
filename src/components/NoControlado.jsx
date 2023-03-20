import { useRef, useState } from "react"

export const NoControlado = () => {
    const form = useRef(null)
    const [error, setError] = useState('')
    const handleSubtmit = (e) => {
        e.preventDefault()
        // PASO 1: Capturar los datos
        //Esta variable, funcion FormData nos sirve para ingresar a los entries(Valores cargados en nuestro
        //inputs, propiedad name) 
        const data = new FormData(form.current)
        console.log('data', [...data.entries()])

        //Transformar la "data" en un objeto
        const dataObject = Object.fromEntries([...data.entries()]);

        console.log('dataObject', dataObject);

        //Desectructurando los datos
        const { title, description, state } = Object.fromEntries([...data.entries()]);
        console.log('title, description, state', title, description, state)

        // PASO 2: Validar los datos, .trim() se encarga de tomar los espacios en blanco como espacios vacios
        if (!title.trim() || !description.trim() || !state.trim()) {
            return (
                setError('El campo texto se encuentra vacio')
            )
        } else {
            setError('')
        }

        // PASO 3: Enviar los datos 
        console.log(title, description, state);

    }

    //Cada vez que necesitemos capturar de forma manual un elemento del DOM, tenemos que utilizar useRef
    //el cual inicializamos en null, hacemos la referencia utilizando la variable que creamos y luego en la
    //propiedad current tendremos los objetos seleccionados

    return (
        <div>
            <form onSubmit={(e) => handleSubtmit(e)} ref={form}>
                <input
                    name='title'
                    type="text"
                    placeholder="Ingrese TODO"
                    className="form-control mb-2"
                    defaultValue='todo #01'
                />
                <textarea
                    name='description'
                    className="form-control mb-2"
                    placeholder="Ingrese texto"
                    defaultValue='descripcion #01'
                />
                <select name='state' className="form-select mb-2" defaultValue='completado'>
                    <option value="pendiente">
                        Pendiente
                    </option>
                    <option value="completado">
                        Completado
                    </option>
                </select>
                <button type="submit" className="btn btn-primary">
                    Procesar
                </button>
                {
                    error !== '' && error
                }
            </form>
        </div>
    )
}

