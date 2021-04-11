import React from "react";
import S7Logo from "../../assets/images/S7Logo.png";

const Ticket = () => {
  return (
    <div className="ticketContainer">
      <div className="price">13 400 p</div>
      <img src={S7Logo} alt="S7Logo" className="S7Logo"></img>
      <div className="sideItems">
        <div className="item">mow-rnd</div>
        <div className="item">в пути</div>
        <div className="item">1 пересадки</div>
      </div>
      <div className="sideItems2">
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
      </div>
    </div>
  );
}

export default Ticket;