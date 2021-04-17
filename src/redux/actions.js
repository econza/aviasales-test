export const SET_TICKETS = "@tickets/SET_TICKETS";
export const SET_FILTER = "@tickets/SET_FILTER";
export const SORT_LOWEST_PRICE = "@tickets/SORT_LOWEST_PRICE";

export const SET_SORTING = "@filters/SET_SORTING"



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

export const sortLowestPrice = () => {
    return {
        type: SORT_LOWEST_PRICE
    }
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER, filter
    };
};

export const setSorting = (sortingType) => {
    return {
        type: SET_SORTING, sortingType
    }
}
