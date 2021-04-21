import React from "react";
import style from "./Ticket.module.css"
import Segment from './Segment'


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}



const Ticket = (props) => {
  // console.log(props)
  return (
    <div className={style.ticketContainer}>
      <div className={style.price}>{numberWithCommas(props.price)} р</div>
      <img src={`http://pics.avs.io/99/36/${props.carrier}.png`} alt="S7Logo" className={style.S7Logo}></img>

      {props.segments.map((segment, id) => {
        return (
          <Segment
            key={id}
            origin={segment.origin}
            destination={segment.destination}
            carrier={segment.destination}
            stops={segment.stops}
            date={segment.date}
            duration={segment.duration}
          />
        )
      })}
    </div>
  );
}

export default Ticket;