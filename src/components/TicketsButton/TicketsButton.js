import React from "react";
import { useDispatch } from "react-redux";
import { setSorting } from "../../redux/actions";
import styles from './TicketsButton.module.css'

const TicketsButton = () => {
    const dispatch = useDispatch()

    const handleSort = (sortType) => {
        return dispatch(setSorting(sortType))
    }

    return (
        <div className={styles.ticketsButtonWrapper}>
            <div onClick={() => handleSort('byPrice')} tabindex="1">самый дешевый</div>
            <div onClick={() => handleSort('byLength')} tabindex="2">самый быстрый</div>
            <div onClick={() => handleSort('')} tabindex="3">оптимальный</div>
        </div>);
}

export default TicketsButton;
