import { useState } from 'react'
import { Formulario } from "./components/Formulario";
import { Todos } from "./components/Todos";
//import { Cat } from "./components/Cat";

const initialStateTodos = [
  {
    id: 1,
    title: 'title 01',
    description: 'description 01',
    state: true,
    priority: true
  },
  {
    id: 2,
    title: 'title 02',
    description: 'description 02',
    state: false,
    priority: false
  },
  {
    id: 3,
    title: 'title 03',
    description: 'description 03',
    state: false,
    priority: true
  },
]

export const App = () => {

  const [todos, setTodos] = useState(initialStateTodos)

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id) => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
  }

  const updateTodo = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.state = !todo.state
      } return todo
    })
    setTodos(newArray)
  }

  return (
    <div className="container mb-2">
      <h1 className='my-5'>Formularios</h1>
      <Formulario addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  )
};