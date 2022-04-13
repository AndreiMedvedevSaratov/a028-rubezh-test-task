import { pageInfoGeneration } from './../../Server/eventsData';

import { eventsActionTypes } from "./ActionTypes"
import { showSpinnerOverlayAction, hideSpinnerOverlayAction } from "../SpinnerOverlay";

export const getEventsOnPageNumber = (pageNumber = 1) => {
    return dispatch => {
        dispatch(showSpinnerOverlayAction('Getting events...'));
        const events = pageInfoGeneration(pageNumber);
        dispatch(getEventsOnPageNumberAction(events));
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

const getEventsOnPageNumberAction = events => ({
    type: eventsActionTypes.getEventsOnPageNumber,
    payload: events
});

export const setCurrentPage = (currentPage) => {
    return {
        type: eventsActionTypes.setCurrentPage,
        payload: currentPage
    }
}

export const toggleColumnVisibility = (index, isVisible) => ({
    type: eventsActionTypes.toggleColumnVisibility,
    payload: { index, isVisible}
})

export const changeColumnWidth = (index, width) => ({
    type: eventsActionTypes.changeColumnWidth,
    payload: { index, width }
});