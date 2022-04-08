import React from 'react';

import { EventsTable } from './Components/EventsTable/EventsTable';
import { CheckboxControlPanel } from './Components/CheckboxControlPanel';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rubezh FrontEnd Test Task</h1>
      </header>
      <main>
        <CheckboxControlPanel />
        <EventsTable />
      </main>
    </div>
  );
}

export default App;
