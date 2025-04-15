import { useState } from 'react';
import Square from './Square';

function Board(){
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [XisNext, setXisNext] = useState(true);

    const lines = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6],
      ];
      
      let winner = null;
      
      for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          winner = squares[a];
          break;
        }
      }

    function resetGame() {
        setSquares(Array(9).fill(null));
        setXisNext(true);
      }

    function handleClick(i){
        if(squares[i] != null || winner) return;
        
        const nextSquares = [...squares];

        nextSquares[i] = XisNext ? 'X' : 'O';

        setSquares(nextSquares);
        setXisNext(!XisNext);
    }
    

    return (
        <div
        style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
            textAlign: 'center',
          }}
        >
          <h1 style={{ marginBottom: '10px' }}>Морски шах</h1>
      
          <h2 style={{ marginTop: 0 }}>
            {winner ? `🏆 Победител: ${winner}` : `Ред на: ${XisNext ? 'X' : 'O'}`}
          </h2>
      
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 60px)',
              gap: '5px',
              margin: '20px 0',
            }}
          >
            {squares.map((sq, i) => (
              <Square key={i} value={sq} onClick={() => handleClick(i)} />
            ))}
          </div>
      
          <button
            onClick={resetGame}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              borderRadius: '4px',
              border: '1px solid #ccc',
              backgroundColor: '#f0f0f0',
            }}
          >
            Нова игра
          </button>
        </div>
      );      
      
}
    
export default Board;
