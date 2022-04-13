import { eventsActionTypes } from "./ActionTypes";

const initialState = {
    list: Object.create(null),
    ids: [],
    filter: '',
    sortOptions: {
        field: "startTimeDate",
        isDesc: false
    },
    checkboxControl: [true, true, true, true, true, true, true],
    columnsWidth: [200, 200, 500, 300, 350, 150, 200],
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

    [eventsActionTypes.toggleColumnVisibility]: (state, payload) => {
        const tempCheckboxControl = [...state.checkboxControl];
        tempCheckboxControl.splice(payload.index, 1, payload.isVisible)

        return {
            ...state,
            checkboxControl: tempCheckboxControl
        };
    },

    [eventsActionTypes.changeColumnWidth]: (state, payload) => {
        const tempColumnsWidth = [...state.columnsWidth];
        tempColumnsWidth.splice(payload.index, 1, payload.width)

        return {
            ...state,
            columnsWidth: tempColumnsWidth
        };
    },
}

export const events = (state = initialState, action) => reducerMapping[action.type] ? reducerMapping[action.type](state, action.payload) : state;