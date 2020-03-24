import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let users: any[] = [];
  useEffect(() => {
    fetch('/api/users/all')
      .then(r => r.json())
      .then(u => (users = u));
  }, [users]);

  return (
    <div className="App">
      <header className="App-header">
        {users.map((a, i) => (
          <div key={i}>{a}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
