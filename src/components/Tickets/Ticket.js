import React from "react";

import Segment from './Segment'
import S7Logo from "../../assets/images/S7Logo.png";

import { data } from '../../tickets'

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const Ticket = (props) => {

  return (
    <div className="ticketContainer">
      <div className="price">{numberWithCommas(props.price)} р</div>
      <img src={`http://pics.avs.io/99/36/${props.carrier}.png`} alt="S7Logo" className="S7Logo"></img>

      {props.segments.map((segment, id) => {
        return (
          <Segment
            key={id}
            origin={segment.origin}
            destination={segment.destination}
            carrier={segment.destination}
            stops={segment.stops}
          />
        )
      })}

      {/* <div className="sideItems2">
        <div className="item">10:30 - 11:45</div>
        <div className="item">1ч 20м</div>
        <div className="item"> MOS, RND</div>
      </div> */}


      {/* <div className="sideItems">
        <div className="item">mow-rnd</div>
        <div className="item">в пути</div>
        <div className="item">1 пересадки</div>
      </div> */}
      {/* <div className="sideItems2">
        <div className="item">10:30 - 11:45</div>
        <div className="item">1ч 20м</div>
        <div className="item"> MOS, RND</div>
      </div>
      <div className="sideItems">
        <div className="item">mow-rnd</div>
        <div className="item">в пути</div>
        <div className="item">1 пересадки</div>
      </div>
      <div className="sideItems2">
        <div className="item">10:30 - 11:45</div>
        <div className="item">1ч 20м</div>
        <div className="item"> MOS, RND</div>
      </div> */}
    </div>
  );
}

export default Ticket;