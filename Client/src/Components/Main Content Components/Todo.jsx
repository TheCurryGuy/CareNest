import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./todo.css"

const Todo = () => {
    // State for todos and input values
    const [todos, setTodos] = useState(() => {
        // Retrieve todos from localStorage, if available
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : []; // Return parsed data or an empty array
    });
    const [inputValue, setInputValue] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [priority, setPriority] = useState('medium');
    let draggableTodo = null;

    // Update localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)); // Store updated todos in localStorage
    }, [todos]); // Run every time 'todos' changes

    const addItem = (e) => {
        e.preventDefault();
        if (inputValue.trim() && description.trim() && deadline) {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                description,
                deadline,
                priority,
                status: 'todo'
            };
            setTodos((prevTodos) => [...prevTodos, newTodo]); // Update todos state
            setInputValue(''); // Clear input
            setDescription(''); // Clear description
            setDeadline(''); // Clear deadline
            setPriority('medium'); // Reset priority to default
        }
    };

    const handleDragStart = (todo) => {
        draggableTodo = todo;
    };

    const handleDrop = (newStatus) => {
        if (draggableTodo) {
            const updatedTodos = todos.map(todo =>
                todo.id === draggableTodo.id ? { ...todo, status: newStatus } : todo
            );
            setTodos(updatedTodos); // Update state with new status
            draggableTodo = null; // Clear the draggable todo
        }
    };

    const handleDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id); // Filter out deleted todo
        setTodos(updatedTodos); // Update state
    };

    const filterTodosByStatus = (status) => {
        return todos.filter(todo => todo.status === status);
    };

    return (
        <div className="todo-app">
            <div className="input-container">
                <div className="add-todo-section">
                    <label htmlFor="todo-text">Todo:</label>
                    <input
                        type="text"
                        id="todo-text"
                        className="input"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Add a new todo"
                    />
                    <label htmlFor="todo-description">Description:</label>
                    <textarea
                        id="todo-description"
                        className="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add a description"
                    />
                    <label htmlFor="todo-deadline">Deadline:</label>
                    <input
                        type="date"
                        id="todo-deadline"
                        className="deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                    <label htmlFor="todo-priority">Priority:</label>
                    <select
                        id="todo-priority"
                        className="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    
                </div>
                <button className="submit" onClick={addItem}>
                        Add
                </button>
            </div>
            <div className="row mt-5">
                <TodoColumn title="Todos" todos={filterTodosByStatus('todo')} onDragStart={handleDragStart} onDrop={() => handleDrop('todo')} onDelete={handleDelete} />
                <TodoColumn title="Doing" todos={filterTodosByStatus('doing')} onDragStart={handleDragStart} onDrop={() => handleDrop('doing')} onDelete={handleDelete} />
                <TodoColumn title="Completed" todos={filterTodosByStatus('completed')} onDragStart={handleDragStart} onDrop={() => handleDrop('completed')} onDelete={handleDelete} />
                <TodoColumn title="New Ideas" todos={filterTodosByStatus('newIdeas')} onDragStart={handleDragStart} onDrop={() => handleDrop('newIdeas')} onDelete={handleDelete} />
            </div>
        </div>
    );
};

const TodoColumn = ({ title, todos = [], onDragStart, onDrop, onDelete }) => {
    return (
        <div className="box" onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
            <h3 style={{marginLeft: "20px", marginTop : "15px"}}>{title}</h3>
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className="todo"
                    draggable
                    onDragStart={() => onDragStart(todo)}
                >
                    <p>{todo.text}</p>
                    <p>Description: {todo.description}</p>
                    <p>Deadline: {todo.deadline}</p>
                    <p>Priority: {todo.priority}</p>
                    <FontAwesomeIcon icon={faTrash} className="trash" onClick={() => onDelete(todo.id)} />
                </div>
            ))}
        </div>
    );
};

export default Todo;
