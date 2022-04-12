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
        startTimeDateWidth: 200,
        endTimeDateWidth: 200,
        descriptionWidth: 500,
        deviceWidth: 300,
        zoneOfDeviceWidth: 350,
        colorCodeWidth: 150,
        actionToDoWidth: 200,
    },
    currentPage: 1,
};

const reducerMapping = {
    [eventsActionTypes.getEventsOnPageNumber]: (state, events) => {
        const list = Object.create(null);
        events.forEach(event => list[event.id] = event);

        return {
            ...state,
            list,
            ids: events.map(x => x.id)
        };
    },

    [eventsActionTypes.setCurrentPage]: (state, currentPage) => ({ ...state, currentPage: currentPage }),

    [eventsActionTypes.applyFilter]: (state, filter) => ({ ...state, filter }),

    [eventsActionTypes.applySorting]: (state, sortOptions) => ({ ...state, sortOptions }),

    [eventsActionTypes.toggleStartTimeDateShow]: (state, showOrNotShow) => {
        const tempCheckboxControl = { ...state.checkboxControl };

        return {
            ...state,
            checkboxControl: {
                ...tempCheckboxControl,
                isStartTimeDateShow: showOrNotShow,
            },
        };
    },

    [eventsActionTypes.toggleEndTimeDateShow]: (state, showOrNotShow) => {
        const tempCheckboxControl = { ...state.checkboxControl };

        return {
            ...state,
            checkboxControl: {
                ...tempCheckboxControl,
                isEndTimeDateShow: showOrNotShow,
            },
        };
    },

    [eventsActionTypes.toggleDescriptionShow]: (state, showOrNotShow) => {
        const tempCheckboxControl = { ...state.checkboxControl };

        return {
            ...state,
            checkboxControl: {
                ...tempCheckboxControl,
                isDescriptionShow: showOrNotShow,
            },
        };
    },

    [eventsActionTypes.toggleDeviceShow]: (state, showOrNotShow) => {
        const tempCheckboxControl = { ...state.checkboxControl };

        return {
            ...state,
            checkboxControl: {
                ...tempCheckboxControl,
                isDeviceShow: showOrNotShow,
            },
        };
    },

    [eventsActionTypes.toggleZoneOfDeviceShow]: (state, showOrNotShow) => {
        const tempCheckboxControl = { ...state.checkboxControl };

        return {
            ...state,
            checkboxControl: {
                ...tempCheckboxControl,
                isZoneOfDeviceShow: showOrNotShow,
            },
        };
    },

    [eventsActionTypes.toggleColorCodeShow]: (state, showOrNotShow) => {
        const tempCheckboxControl = { ...state.checkboxControl };

        return {
            ...state,
            checkboxControl: {
                ...tempCheckboxControl,
                isColorCodeShow: showOrNotShow,
            },
        };
    },

    [eventsActionTypes.toggleActionToDoShow]: (state, showOrNotShow) => {
        const tempCheckboxControl = { ...state.checkboxControl };

        return {
            ...state,
            checkboxControl: {
                ...tempCheckboxControl,
                isActionToDoShow: showOrNotShow,
            },
        };
    },
}

export const events = (state = initialState, action) => reducerMapping[action.type] ? reducerMapping[action.type](state, action.payload) : state;