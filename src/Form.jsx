function Form({ handleSubmit, handlechange, newItem }) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="form">Add Item</label>
            <input type="text" placeholder='Item name' id='form' onChange={handlechange} value={newItem} />
            <button className="btn">Add item</button>
        </form>
    )
}

export default Form