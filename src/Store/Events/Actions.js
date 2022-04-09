// import { EventsDataService } from "../../Services/EventsData.service"

import { eventsActionTypes } from "./ActionTypes"
import { showSpinnerOverlayAction, hideSpinnerOverlayAction } from "../SpinnerOverlay";

export const getEvents = () => {
    return async dispatch => {
        dispatch(showSpinnerOverlayAction('Getting events...'));
        // const events = await EventsDataService.get();
        // dispatch(getEventsAction(events));
        dispatch(hideSpinnerOverlayAction());
    };
};

export const applyFilter = filter => ({
    type: eventsActionTypes.applyFilter,
    payload: filter
});

export const applySorting = sortOptions => ({
    type: eventsActionTypes.applySorting,
    payload: sortOptions
});

// const getEventsAction = events => ({
//     type: eventsActionTypes.getAll,
//     payload: events
// });