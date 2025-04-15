import { useState } from 'react';
import AddTodo from './components/AddToDo';
import TodoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  function addTodo() {
    if (text.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setText('');
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: 'auto' }}>
      <h1>📋 Моите задачи</h1>
      <AddTodo text={text} setText={setText} onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
