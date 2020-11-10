import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
        console.log(...todos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    }
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h2>What's the Plan for Today?</h2>
            <TodoForm onSubmit={addTodo}/>
            <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo} />
            <h3>Made with Hooks!</h3>
        </div>
    )
}

export default TodoList
