import React from 'react';

import CheckboxControlPanel from './Components/CheckboxControlPanel/CheckboxControlPanel';
import { EventsTable } from './Components/EventsTable/EventsTable';
import PaginationControl from './Components/PaginationControl/PaginationControl';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Rubezh FrontEnd Test Task</h1>
      </header>
      <main>
        <CheckboxControlPanel />
        <EventsTable />
        <PaginationControl
          totalItemsCount={1000000}
          pageSize={20}
        />
      </main>
    </div>
  );
}

export default App;
