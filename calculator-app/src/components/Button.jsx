function Button({ label, onClick }) {
    return (
      <button
        onClick={() => onClick(label)}
        style={{
          fontSize: '20px',
          padding: '15px',
          margin: '5px',
          width: '60px',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        {label}
      </button>
    );
  }
  
  export default Button;
  