import React, { useEffect } from "react";
import ButtonShowMore from "../ButtonShowMore/ButtonShowMore";
import Ticket from "../Tickets/Ticket";
import TicketsButton from "../TicketsButton/TicketsButton";
// import { data } from "../../tickets"
import store from "../../redux/store"
import { useDispatch, useSelector } from "react-redux";
import { data, setTickets } from "../../tickets-reducer";



const TicketsBox = () => {

  const mainState = useSelector((state) => state.mainState);
  const dispatch = useDispatch();

console.log(mainState, "MAIN")

  useEffect(() => {
    fetch("/api/tickets")
      .then(res => res.json())
      .then((resData) => dispatch(setTickets(resData.tickets)));
  }, [])

  
  return (
    <div className="ticketsWrapper">
      <TicketsButton />
      {mainState.tickets && mainState.tickets.map((ticket, id) => {
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