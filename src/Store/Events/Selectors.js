const sorterFactory = (sortOptions, eventsMap) => {
    const { field, isDesc } = sortOptions;

    const compareStringFields = (a, b) => {
        const aObj = eventsMap[a];
        const bObj = eventsMap[b];
        return aObj[field].localeCompare(bObj[field]) * (isDesc ? -1 : 1)
    };

    // Сейчас сортируются только поля по буквенным значениям, но можно прикрутить сортировку и по числам
    // const compareNumberFields = (a, b) => {
    //     const aObj = eventsMap[a];
    //     const bObj = eventsMap[b];
    //     return (aObj[field] - bObj[field]) * (isDesc ? -1 : 1)
    // };

    // return (field === 'startTimeDate' || field === 'endTimeDate')
    //     ? compareStringFields
    //     : compareNumberFields;
    
    return compareStringFields;
}

export const filterEventIds = state => {
    const eventsMap = state.events.list;
    const filter = state.events.filter;
    const filteredIds = filter ? state.events.ids.filter(x => eventsMap[x].name.toLowerCase().includes(filter.toLowerCase())) : state.events.ids;
    return filteredIds.sort(sorterFactory(state.events.sortOptions, eventsMap));
}