import { createSelector } from 'reselect';
import { sortTickets, filterTicketsByCount } from '../utils/helpers';

const ticketsSelector = (state) => state.mainState.tickets;
const showCountSelector = (state) => state.mainState.showCount;
const sortingTypeSelector = (state) => state.filtersState.sorting;
const filtersSelector = (state) => state.filtersState.filters;

export const visibleTickets = createSelector(
	[ticketsSelector, showCountSelector, sortingTypeSelector, filtersSelector],
	(tickets, showCount, sorting, filters) =>
		sortTickets(
			tickets
				.filter((_, index) => index < showCount)
				.filter((ticket) => {
					if (ticket.stopsSum > 3) {
						return filters['4'] && ticket.stopsSum > 3;
					}

					return filters[ticket.stopsSum] === true;
				}),
			sorting
		)
);
