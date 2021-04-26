import React from "react"
import { pluralizeStop } from "../../utils/helpers";
import { getHours, getMinutes,  flyDurationHours, flyDurationMinutes, secondsToHms} from "../../utils/timeDate";
import style from "./Segment.module.css"



const Segment = (props) => {
    return (
        <>
            <div className={style.sideItems}>
                <div className={style.item}>{props.origin}-{props.destination}</div>
                <div className={style.item}>в пути</div>
                <div className={style.item}>{pluralizeStop(props.stops.length)}</div>
            </div>
            <div className={style.sideItems2}>
                <div className={style.item}>{getHours(props.date)}:{getMinutes(props.date)} - {flyDurationHours(props.date, props.duration)}:{flyDurationMinutes(props.date, props.duration)}</div>
                <div className={style.item}>{secondsToHms(props.duration)}</div>
                <div className={style.item}>{props.stops.join(', ')}</div>
            </div>
        </>
    );
}

export default Segment