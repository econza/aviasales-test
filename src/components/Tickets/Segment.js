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
};

function getHours(n) {
    var d = new Date(n)
    if (d.getUTCHours() < 10) return "0" + d.getUTCHours();
    return d.getUTCHours()
};

function getMinutes(n) {
    var d = new Date(n)
    if (d.getUTCMinutes() < 10) return "0" + d.getUTCMinutes();
    return d.getUTCMinutes()
};

function flyDurationHours(n, b) {
    var d = new Date(n)
    d.setUTCSeconds(d.getUTCSeconds() + b)
    if (d.getUTCHours() < 10) return "0" + d.getUTCHours();
    return d.getUTCHours()
};

function flyDurationMinutes(n, b) {
    var d = new Date(n)
    d.setUTCSeconds(d.getUTCSeconds() + b)
    if (d.getUTCMinutes() < 10) return "0" + d.getUTCMinutes();
    return d.getUTCMinutes()
};

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    // var s = Math.floor((d % 3600) % 60);
  
    var hDisplay = h > 0 ? h + ("Ч ") : "";
    var mDisplay = m > 0 ? m + ("М") : "";
    // var sDisplay = s > 0 ? s + ("C") : "";
    return hDisplay + mDisplay;
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
                <div className="item">{getHours(props.date)}:{getMinutes(props.date)} - {flyDurationHours(props.date, props.duration)}:{flyDurationMinutes(props.date, props.duration)}</div>
                <div className="item">{secondsToHms(props.duration)}</div>
                <div className="item">{props.stops.join(', ')}</div>
            </div>
        </>
    );
}

export default Segment