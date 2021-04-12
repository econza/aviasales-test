import React, { useEffect } from "react";
import ButtonShowMore from "../ButtonShowMore/ButtonShowMore";
import Ticket from "../Tickets/Ticket";
import TicketsButton from "../TicketsButton/TicketsButton";
import { data } from "../../tickets"
import store from "../../redux/store"
import { useDispatch, useSelector } from "react-redux";
import { setTickets } from "../../tickets-reducer";



const TicketsBox = () => {
  
  const mainState = useSelector((state) => state.mainState);
  const dispatch = useDispatch();

  console.log(mainState.tickets, "ok")
  useEffect(() => {
    dispatch(setTickets([1, 2, 3]))
  }, []);

  return (
    <div className="ticketsWrapper">
      <TicketsButton />
      {data.tickets.map((ticket, id) => {
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