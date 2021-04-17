import React from "react";
import { useDispatch } from "react-redux";
import { sortLowestPrice } from "../../tickets-reducer";

import styles from './TicketsButton.module.css'

const TicketsButton = (props) => {
    const dispatch = useDispatch()

    const handleSortByLowers = () => {
        return dispatch(sortLowestPrice())
    }

    return (
        <div className={styles.ticketsButtonWrapper}>
            <div onClick={handleSortByLowers} tabindex="1">самый дешевый</div>
            <div tabindex="2">самый быстрый</div>
            <div tabindex="3">оптимальный</div>
        </div>);
}

export default TicketsButton;
