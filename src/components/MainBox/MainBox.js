import React from "react";
import ButtonShowMore from "../ButtonShowMore/ButtonShowMore";
import Ticket from "../Tickets/Ticket";
import TicketsButton from "../TicketsButton/TicketsButton";

const TicketsBox = () => {
  return (
  <div className="ticketsWrapper">
    <TicketsButton />
    <Ticket />
    <Ticket />
    <ButtonShowMore />
  </div>
  );
}

export default TicketsBox;