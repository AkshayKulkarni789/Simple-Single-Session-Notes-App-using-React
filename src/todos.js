import React from 'react'

const Todos = ({todos, deleteItem}) => {
    const todolist = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span className="Items" onClick={() => deleteItem(todo.id)}>{todo.content}</span>
                </div>
            )
        })
     ) : (
        <p className="center">you have no todos left!!</p>
     )
    return (
        <div className="todos collection">
            { todolist }
        </div>
    )
}

export default Todos;