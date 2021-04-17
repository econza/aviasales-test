import React, { useEffect } from "react";
import ButtonShowMore from "../ButtonShowMore/ButtonShowMore";
import Ticket from "../Tickets/Ticket";
import TicketsButton from "../TicketsButton/TicketsButton";
// import { data } from "../../tickets"
import store from "../../redux/store"
import { useDispatch, useSelector } from "react-redux";
import { setTickets } from "../../redux/actions";

const sortTickets = (tickets, sorting) => {
  switch(sorting) {
    case "byPrice":
      return tickets.sort((a, b) => a.price - b.price)

    case "byLength":
      return tickets.sort((a, b) => a.durationSum - b.durationSum)

    default:
      return tickets
  }
}

const TicketsBox = () => {

  const mainState = useSelector((state) => state.mainState);
  const sorting = useSelector((state) => state.filtersState.sorting)
  const dispatch = useDispatch();

  console.log(sorting, "MAIN")

  useEffect(() => {
    fetch("/api/tickets")
      .then(res => res.json())
      .then((resData) => dispatch(setTickets(resData.tickets)));
  }, [])

    return (
    <div className="ticketsWrapper">

      <TicketsButton />

      {mainState.tickets && sortTickets(mainState.tickets, sorting).map((ticket, id) => {
        return (
          <Ticket
            key={id}
            price={ticket.price}
            carrier={ticket.carrier}
            segments={ticket.segments}
          />
        )
      })}
      <ButtonShowMore />
    </div>
  );
}

export default TicketsBox;
