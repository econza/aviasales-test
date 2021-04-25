import React, { useEffect } from 'react';
import ButtonShowMore from '../ButtonShowMore/ButtonShowMore';
import Ticket from '../Tickets/Ticket';
import TicketsButton from '../TicketsButton/TicketsButton';
// import { data } from "../../tickets"
import store from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setTickets } from '../../redux/actions';
import style from "./TicketsBox.module.css"
import { visibleTickets } from '../../redux/selectors'

const TicketsBox = () => {
	const sorting = useSelector((state) => state.filtersState.sorting);
  	const showCount = useSelector((state) => state.mainState.showCount);
	const tickets = useSelector(visibleTickets)

	const dispatch = useDispatch();

	console.log(sorting, 'MAIN');

	useEffect(() => {
		fetch('/api/tickets')
			.then((res) => res.json())
			.then((resData) => dispatch(setTickets(resData.tickets)));
	}, []);

	return (
		<div className={style.ticketsWrapper}>
			<TicketsButton />

			{tickets.map((ticket, id) => {
					return <Ticket key={id} price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />;
				})}
			<ButtonShowMore />
		</div>
	);
};

export default TicketsBox;