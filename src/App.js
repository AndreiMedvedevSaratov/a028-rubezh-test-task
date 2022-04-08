import React from 'react';

import { EventsTable } from './Components/EventsTable/EventsTable';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rubezh FrontEnd Test Task</h1>
      </header>
      <main>
        <EventsTable />
      </main>
    </div>
  );
}

export default App;
