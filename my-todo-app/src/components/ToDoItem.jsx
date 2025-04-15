function ToDoItem({ todo, onToggle, onDelete }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
        <button onClick={() => onDelete(todo.id)}>❌</button>
      </li>
    );
  }
  
  export default ToDoItem;
  