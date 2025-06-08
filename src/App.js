// src/App.jsx
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '3rem' }}>
      <h1>🪖 AI Helmet Dashboard</h1>
      <p>Welcome to your Helmet monitoring app!</p>
      <p>
        <strong>Counter:</strong> {count}
      </p>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
      <button onClick={() => setCount(c => c - 1)} style={{ marginLeft: '1rem' }}>
        Decrease
      </button>
    </div>
  );
}

export default App;
