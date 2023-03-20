import { useState } from 'react';

export const Controlado = () => {

    //Valores iniciales para los componentes
    const [todo, setTodo] = useState({
        title: 'title 01',
        description: 'description 01',
        state: 'completado',
        priority: 'true'
    })

    //Desestructurando:
    const {title, description, state, priority} = todo

    const handleSubtmit = (e) => {
        e.preventDefault()
        console.log('TODO: ', title, description, state)
    }

    //al setTodo hay que pasarle el name y value 

    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        const {value, name, checked, type} = e.target 
 
        //Un metodo distinto para obtener los valores indicados en los inputs
        //setTodo({
        //    ...todo,
        //    [e.target.name]: e.target.value,
        //})

        //Este metodo se utiliza para manejar los valores cuando hay checkbox de por medio
        setTodo({
            ...todo,
            //Con esto podemos mandarle un dato que no es valido como nombre de propiedad y lo esta recibiendo e 
            //interpretando antes de colocarlo como nombre de propiedad en los objetos
            [name]: type === "checkbox" ? checked : value
            //[e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubtmit(e)}>
                <input
                    name='title'
                    type="text"
                    placeholder="Ingrese TODO"
                    className="form-control mb-2"
                    value={title}
                    //value={todo.title}
                    onChange={handleChange}
                />
                <textarea
                    name='description'
                    className="form-control mb-2"
                    placeholder="Ingrese texto"
                    value={description}
                    //value={todo.description}
                    onChange={handleChange}
                />
                <div className='form-check mb-2' >
                    <input
                        type="checkbox"
                        name='priority'
                        className='form-check-input'
                        id='inputCheck'
                        //value={checked.priority}
                        checked={priority}
                        
                        //Una forma distinta de usar la logica del onChange
                        //onChange={e => setTodo({ ...todo, priority: e.target.checked })}
                        onChange={handleChange}
                    />
                    <label htmlFor="inputCheck">Dar prioridad</label>
                </div>
                <select 
                    name='state' 
                    className="form-select mb-2" 
                    value={state} 
                    //value={todo.state}
                    onChange={handleChange}
                >
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
            </form>
        </div>
    )
}

