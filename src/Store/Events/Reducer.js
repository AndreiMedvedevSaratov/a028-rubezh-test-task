import { eventsActionTypes } from "./ActionTypes";

const initialState = {
    list: Object.create(null),
    ids: [],
    sortOptions: {
        field: "name",
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