import React from 'react'

export const Todo = ({ todo, deleteTodo, updateTodo }) => {

    const { title, description, state, priority, id } = todo;

    return (
        <li className='list-group-item'>
            <div className='d-flex justify-content-between align-items-start'>
                <div>
                    <h5 className={`${state && 'text-decoration-line-through'}`}>{title}</h5>
                    <p className={`${state && 'text-decoration-line-through'}`}>{description}</p>
                    <div className='d-flex gap-2'>
                        <button onClick={() => deleteTodo(id)} className='btn btn-sm btn-danger'>Eliminar</button>
                        <button onClick={() => updateTodo(id)} className='btn btn-sm btn-warning'>Actualizar</button>

                    </div>
                </div>
                <div className='d-flex align-items-start flex-column mb-3' >
                    <span className='badge text-bg-warning mb-auto p-2'>{priority && 'Prioritario'}</span>
                    <span className='badge text-bg-primary mt-2 p-2'>{!state && 'Pendiente'}</span>
                    <span className='badge text-bg-success mt-2 p-2'>{state && 'Completado'}</span>
                </div>


            </div>
        </li>
    )
}
