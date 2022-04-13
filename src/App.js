import React, { useEffect } from 'react';

import { CheckboxControlPanel } from './Components/CheckboxControlPanel/CheckboxControlPanel';
import { EventsTable } from './Components/EventsTable/EventsTable';
import PaginationControl from './Components/PaginationControl/PaginationControl';

import './App.scss';

// import { useSelector, useDispatch } from 'react-redux';
// import { setStateFromLocalStorage } from './Store/Events';


function App() {
  // const dispatch = useDispatch();
  // const stateToLocalStorage = useSelector((state) => state);

  // console.log(stateToLocalStorage);

  // window.onbeforeunload = () => {
  //   localStorage.setItem('rubezh_state', JSON.stringify({
  //     sortOptions: stateToLocalStorage.sortOptions,
  //     checkboxControl: stateToLocalStorage.checkboxControl,
  //     columnsWidth: stateToLocalStorage.columnsWidth,
  //     currentPage: stateToLocalStorage.currentPage,
  //   }));
  // };

  // useEffect(() => {
  //   if (localStorage.getItem('rubezh_state')) {
  //     let initialStateData = JSON.parse(localStorage.getItem('rubezh_state'));
  //     console.log(initialStateData);
  //     dispatch(setStateFromLocalStorage(initialStateData));
  //   }
  // }, [dispatch]);

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
