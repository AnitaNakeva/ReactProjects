function Display({ value }) {
    return (
      <div style={{
        backgroundColor: '#eee',
        padding: '20px',
        fontSize: '32px',
        textAlign: 'right',
        borderRadius: '4px',
        marginBottom: '10px'
      }}>
        {value}
      </div>
    );
  }
  
  export default Display;
  