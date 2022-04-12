import { eventsActionTypes } from "./ActionTypes";

const initialState = {
    list: Object.create(null),
    ids: [],
    filter: '',
    sortOptions: {
        field: "startTimeDate",
        isDesc: false
    },
    checkboxControl: {
        isStartTimeDateShow: true,
        isEndTimeDateShow: true,
        isDescriptionShow: true,
        isDeviceShow: true,
        isZoneOfDeviceShow: true,
        isColorCodeShow: true,
        isActionToDoShow: true,
    },
    columnsWidth: {
        startTimeDateWidth: 150,
        endTimeDateWidth: 200,
        descriptionWidth: 250,
        deviceWidth: 300,
        zoneOfDeviceWidth: 350,
        colorCodeWidth: 150,
        actionToDoWidth: 200,
    },
    currentPage: 1,
};

const reducerMapping = {
    // [eventsActionTypes.getAll]: (state, events) => {
    //     const list = Object.create(null);
    //     events.forEach(event => list[event.id] = event);

    //     return {
    //         ...state,
    //         list,
    //         ids: events.map(x => x.id)
    //     };
    // },

    [eventsActionTypes.getEventsOnPageNumber]: (state, events) => {
        const list = Object.create(null);
        events.forEach(event => list[event.id] = event);

        return {
            ...state,
            list,
            ids: events.map(x => x.id)
        };
    },

    [eventsActionTypes.applyFilter]: (state, filter) => ({ ...state, filter }),

    [eventsActionTypes.applySorting]: (state, sortOptions) => ({ ...state, sortOptions }),
}

export const events = (state = initialState, action) => reducerMapping[action.type] ? reducerMapping[action.type](state, action.payload) : state;