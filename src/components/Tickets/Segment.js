import React from "react"

function pluralizeStop(x) {
    switch (true) {
      case x === 0:
        return "без пересадок"
      case x === 1:
        return "1 пересадка";
      case x > 1 && x <= 4:
        return `${x} пересадки`;
      case x > 4:
        return `${x} пересадок`;
      default:
        return "";
    }
  }


const Segment = (props) => {
    return (
        <>
            <div className="sideItems">
                <div className="item">{props.origin}-{props.destination}</div>
                <div className="item">в пути</div>
                <div className="item">{pluralizeStop(props.stops.length)}</div>
            </div>
            <div className="sideItems2">
                <div className="item">10:30 - 11:45</div>
                <div className="item">1ч 20м</div>
                <div className="item">{props.stops.join(', ')}</div>
            </div>
        </>
    );
}

export default Segment