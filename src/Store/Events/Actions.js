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

export const changeStartTimeDateShow = (showOrNotShow) => ({
    type: eventsActionTypes.toggleStartTimeDateShow,
    payload: showOrNotShow
});

export const changeEndTimeDateShow = (showOrNotShow) => ({
    type: eventsActionTypes.toggleEndTimeDateShow,
    payload: showOrNotShow
});

export const changeDescriptionShow = (showOrNotShow) => ({
    type: eventsActionTypes.toggleDescriptionShow,
    payload: showOrNotShow
});

export const changeDeviceShow = (showOrNotShow) => ({
    type: eventsActionTypes.toggleDeviceShow,
    payload: showOrNotShow
});

export const changeZoneOfDeviceShow = (showOrNotShow) => ({
    type: eventsActionTypes.toggleZoneOfDeviceShow,
    payload: showOrNotShow
});

export const changeColorCodeShow = (showOrNotShow) => ({
    type: eventsActionTypes.toggleColorCodeShow,
    payload: showOrNotShow
});

export const changeActionToDoShow = (showOrNotShow) => ({
    type: eventsActionTypes.toggleActionToDoShow,
    payload: showOrNotShow
});

export const changeStartTimeDateWidth = (width) => ({
    type: eventsActionTypes.changeStartTimeDateWidth,
    payload: width
});

export const changeEndTimeDateWidth = (width) => ({
    type: eventsActionTypes.changeEndTimeDateWidth,
    payload: width
});

export const changeDescriptionWidth = (width) => ({
    type: eventsActionTypes.changeDescriptionWidth,
    payload: width
});

export const changeDeviceWidth = (width) => ({
    type: eventsActionTypes.changeDeviceWidth,
    payload: width
});

export const changeZoneOfDeviceWidth = (width) => ({
    type: eventsActionTypes.changeZoneOfDeviceWidth,
    payload: width
});

export const changeColorCodeWidth = (width) => ({
    type: eventsActionTypes.changeColorCodeWidth,
    payload: width
});

export const changeActionToDoWidth = (width) => ({
    type: eventsActionTypes.changeActionToDoWidth,
    payload: width
});