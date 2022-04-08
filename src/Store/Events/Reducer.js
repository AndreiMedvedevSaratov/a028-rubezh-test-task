import { eventsActionTypes } from "./ActionTypes";

const initialState = {
    list: Object.create(null),
    ids: [],
    sortOptions: {
        field: "name",
        isDesc: false
    }
};

const reducerMapping = {
    [eventsActionTypes.getAll]: (state, events) => {
        const list = Object.create(null);
        events.forEach(event => list[event.id] = event);

        return {
            ...state,
            list,
            ids: events.map(x => x.id)
        };
    },

    [eventsActionTypes.applySorting]: (state, sortOptions) => ({ ...state, sortOptions }),
}

export const events = (state = initialState, action) => reducerMapping[action.type] ? reducerMapping[action.type](state, action.payload) : state;