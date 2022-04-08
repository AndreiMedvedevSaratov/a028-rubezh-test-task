import React from 'react';

import CheckboxControlPanel from './Components/CheckboxControlPanel/CheckboxControlPanel';
import { EventsTable } from './Components/EventsTable/EventsTable';
import { PaginationControl } from './Components/PaginationControl';

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
        <PaginationControl />
      </main>
    </div>
  );
}

export default App;
