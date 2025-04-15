import { useState } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

function App() {
  const [input, setInput] = useState('');
  const [justEvaluated, setJustEvaluated] = useState(false);

  function handleButtonClick(label) {
    if (label === 'C') {
      setInput('');
      setJustEvaluated(false);
    } else if (label === '=') {
      try {
        setInput(eval(input).toString());
        setJustEvaluated(true);
      } catch {
        setInput('Error');
        setJustEvaluated(true);
      }
    } else if (label === '^') {
      setInput(prev => prev + '**');
      setJustEvaluated(false);
    } else {
      if (justEvaluated && /[0-9]/.test(label)) {
        setInput(label);
      } else {
        setInput(prev => prev + label);
      }
      setJustEvaluated(false);
    }
  }
  

  return (
    <div style={{
      maxWidth: 300,
      margin: 'auto',
      padding: 20,
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center' }}>Калкулатор</h2>
      <Display value={input} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
