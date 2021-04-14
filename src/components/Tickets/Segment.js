import React from "react"
import { pluralizeStop } from "../../utils/helpers";
import { getHours, getMinutes, flyDurationHours, flyDurationMinutes, secondsToHms } from "../../utils/timeDate";



const Segment = (props) => {
    return (
        <>
            <div className="sideItems">
                <div className="item">{props.origin}-{props.destination}</div>
                <div className="item">в пути</div>
                <div className="item">{pluralizeStop(props.stops.length)}</div>
            </div>
            <div className="sideItems2">
                <div className="item">{getHours(props.date)}:{getMinutes(props.date)} 
                - {flyDurationHours(props.date, props.duration)}:{flyDurationMinutes(props.date, props.duration)}</div>
                <div className="item">{secondsToHms(props.duration)}</div>
                <div className="item">{props.stops.join(', ')}</div>
            </div>
        </>
    );
}

export default Segment