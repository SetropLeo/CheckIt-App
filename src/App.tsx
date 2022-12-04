import React from 'react';
import './App.css';
import { Header } from './components';
import { Workspace } from './pages';

function App() {
  return (
    <div className="App">
      <Header username='Leonardo' />
      <Workspace />
    </div>
  );
}

export default App;
