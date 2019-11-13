import React from 'react';
import logo from './logo.svg';
import './App.css';
import OverallGrid from './components/overallGrid';
import EventList from './components/eventList';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <OverallGrid />
        <EventList />
      </header>
    </div>
  );
}

export default App;
