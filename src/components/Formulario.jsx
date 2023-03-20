import { useState } from 'react';
import Swal from 'sweetalert2';

export const Formulario = ({addTodo}) => {

    const [todo, setTodo] = useState({
        title: 'title 01',
        description: 'description 01',
        state: 'completado',
        priority: 'true'
    })

    const { title, description, state, priority } = todo

    const handleSubtmit = (e) => {
        e.preventDefault()
        if (title.trim() === '' || description.trim() === '') {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Titulo y descripcion obligatorios',
            })

        }
        addTodo({
            id: Date.now(),
            ...todo,
            state: state === 'completado',
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Todo agregado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        const { value, name, checked, type } = e.target

        setTodo({
            ...todo,
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
                    onChange={handleChange}
                />
                <textarea
                    name='description'
                    className="form-control mb-2"
                    placeholder="Ingrese texto"
                    value={description}
                    onChange={handleChange}
                />
                <div className='form-check mb-2' >
                    <input
                        type="checkbox"
                        name='priority'
                        className='form-check-input'
                        id='inputCheck'
                        checked={priority}
                        onChange={handleChange}
                    />
                    <label htmlFor="inputCheck">Dar prioridad</label>
                </div>
                <select
                    name='state'
                    className="form-select mb-2"
                    value={state}
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
                    Agregar Todo
                </button>
            </form>
        </div>
    )
}

