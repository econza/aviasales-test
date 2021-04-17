export const SET_TICKETS = "@main/SET_TICKETS";
export const SET_SHOW_COUNT = "@main/SET_SHOW_COUNT"

export const SET_SORTING = "@filters/SET_SORTING"


// @main

export const setTickets = (tickets) => {
    const newTickets = tickets.map((ticket) => {
        return {
            ...ticket,
            durationSum: ticket.segments.reduce((a, b) => a.duration + b.duration)
        }
    })

    return {
        type: SET_TICKETS, tickets: newTickets
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
        type: SET_SORTING, sortingType
    }
}
