function Square({ value, onClick }) {
    return (
      <button
        onClick={() => {
          if (value === null) onClick();
        }}
        style={{
          width: '60px',
          height: '60px',
          fontSize: '24px',
          margin: '4px',
          textAlign: 'center',
          verticalAlign: 'middle',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        {value}
      </button>
    );
  }
  
  export default Square;
  