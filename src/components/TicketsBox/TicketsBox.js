import React from "react";
import ButtonShowMore from "../ButtonShowMore/ButtonShowMore";
import Ticket from "../Tickets/Ticket";
import TicketsButton from "../TicketsButton/TicketsButton";
import { data } from "../../tickets"

const TicketsBox = () => {
  console.log(data.tickets)
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