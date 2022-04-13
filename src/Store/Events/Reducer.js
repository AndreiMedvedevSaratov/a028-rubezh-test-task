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
    selectedRows: [],
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

    [eventsActionTypes.setCurrentPage]: (state, currentPage) => {
        const tempSelectedRows = [];

        return {
            ...state,
            currentPage: currentPage,
            selectedRows: tempSelectedRows
        }
    },

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

    [eventsActionTypes.toggleSelectRowById]: (state, id) => {
        let tempSelectedRows = [...state.selectedRows];

        if (tempSelectedRows.includes(id)) {
            tempSelectedRows = tempSelectedRows.filter(x => x !== id);
        } else tempSelectedRows.push(id);

        return {
            ...state,
            selectedRows: tempSelectedRows
        };
    },

    [eventsActionTypes.setStateFromLocalStorage]: (state, tempState) => {
        return {
            ...state,
            sortOptions: tempState.sortOptions,
            checkboxControl: tempState.checkboxControl,
            columnsWidth: tempState.columnsWidth,
            currentPage: tempState.currentPage,
        };
    },
}

export const events = (state = initialState, action) => {
    if (reducerMapping[action.type]) {
        return reducerMapping[action.type](state, action.payload)
    } else {
        return state;
    }
}