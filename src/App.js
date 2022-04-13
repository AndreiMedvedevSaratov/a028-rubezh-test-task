import React, { useEffect } from 'react';

import { CheckboxControlPanel } from './Components/CheckboxControlPanel/CheckboxControlPanel';
import { EventsTable } from './Components/EventsTable/EventsTable';
import PaginationControl from './Components/PaginationControl/PaginationControl';

import './App.scss';

import { useSelector, useDispatch } from 'react-redux';
import { setStateFromLocalStorage, setCurrentPage } from './Store/Events';


function App() {
  const dispatch = useDispatch();
  const stateToLocalStorage = useSelector((state) => state);

  window.onbeforeunload = () => {
    localStorage.setItem('rubezh_state', JSON.stringify({
      sortOptions: stateToLocalStorage.events.sortOptions,
      checkboxControl: stateToLocalStorage.events.checkboxControl,
      columnsWidth: stateToLocalStorage.events.columnsWidth,
      currentPage: stateToLocalStorage.events.currentPage,
    }));
  };

  useEffect(() => {
    if (localStorage.getItem('rubezh_state')) {
      let initialStateData = JSON.parse(localStorage.getItem('rubezh_state'));
      dispatch(setStateFromLocalStorage(initialStateData));
      dispatch(setCurrentPage(initialStateData.currentPage));
    }
  }, [dispatch]);

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
