export const SET_TICKETS = "@main/SET_TICKETS";
export const SET_SHOW_COUNT = "@main/SET_SHOW_COUNT"

export const SET_SORTING = "@filters/SET_SORTING"
export const SET_FILTERS = "@filters/SET_FILTERS"


// @main

export const setTickets = (tickets) => {
    const newTickets = tickets.map((ticket) => {
        return {
            ...ticket,
            durationSum: ticket.segments.reduce((a, b) => a.duration + b.duration),
            stopsSum: ticket.segments.reduce((a, b) => a.stops.length + b.stops.length)
        }
    })

    return {
        type: SET_TICKETS, 
        tickets: newTickets
    };
};

export const setShowCount = (count) => {
    return {
        type: SET_SHOW_COUNT,
        count
    }
}

// @filters

export const setSorting = (sortingType) => {
    return {
        type: SET_SORTING, 
        sortingType
    }
}

export const setFilters = (filters) => {
    return {
        type: SET_FILTERS,
        filters
    }
}
