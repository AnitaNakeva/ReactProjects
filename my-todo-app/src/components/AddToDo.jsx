function AddToDo({ text, setText, onAdd }) {
    return (
      <div>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Нова задача..."
        />
        <button onClick={onAdd}>Добави</button>
      </div>
    );
  }
  
  export default AddToDo;
  