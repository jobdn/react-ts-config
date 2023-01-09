import React from 'react';

import './App.css';
import { A } from './A';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">R-Style Softlab Template</header>
      <A isAdmin />
    </div>
  );
};

export default App;
