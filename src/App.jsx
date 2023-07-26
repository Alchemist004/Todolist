import { useState } from 'react'
import ItemList from './ItemList'
import Form from './Form'
import './style.css'
function App() {
  const [newItem, setItem] = useState('')
  const [todo, setTodo] = useState([])

  function handlechange(e) {
    setItem(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    setTodo(previoustodo => {
      return [
        ...previoustodo,
        {
          title: newItem,
          id: crypto.randomUUID(),
          completed: false
        }
      ]
    })
    setItem('')
  }

  // To change the value of completed from false to true, or vice versa in the todo list (in the item object)
  // when the checkbox is toggled
  function toggleTodo(id, iscompleted) {
    setTodo(previoustodo => {
      return previoustodo.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, completed: iscompleted
          }
        }
        return todo
      })
    })
  }

  function handledelete(id) {
    setTodo(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <>
      <Form handleSubmit={handleSubmit} handlechange={handlechange} newItem={newItem} />
      <label htmlFor="">
        <ul>
          <ItemList todo={todo} handledelete={handledelete} toggleTodo={toggleTodo} />

        </ul>
      </label>
    </>
  )
}
export default App
