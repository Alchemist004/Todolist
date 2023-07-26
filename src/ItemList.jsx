function ItemList({ todo, handledelete, toggleTodo }) {
    return (

        todo.map(todos => {
            return (
                <li key={todos.id}>
                    <input className='input' type="checkbox" onChange={e => toggleTodo(todos.id, e.target.checked)} checked={todos.completed} />
                    {todos.title}
                    <button className="delete" onClick={() => handledelete(todo.id)}>Delete</button>
                </li>
            )
        })

    )
}
export default ItemList