// import { EventsDataService } from "../../Services/EventsData.service"

import { eventActionTypes } from "./ActionTypes"
import { showSpinnerOverlayAction, hideSpinnerOverlayAction } from "../SpinnerOverlay";

export const getEvents = () => {
    return async dispatch => {
        dispatch(showSpinnerOverlayAction('Getting events...'));
        // const events = await EventsDataService.get();
        // dispatch(getEventsAction(events));
        dispatch(hideSpinnerOverlayAction());
    };
};

export const applySorting = sortOptions => ({
    type: eventActionTypes.applySorting,
    payload: sortOptions
});

const getEventsAction = events => ({
    type: eventActionTypes.getAll,
    payload: events
});