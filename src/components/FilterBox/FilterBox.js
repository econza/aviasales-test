import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/actions';

import style from './FilterBox.module.css';

const FilterBox = () => {
	const filters = useSelector((state) => state.filtersState.filters);
	const dispatch = useDispatch();
	const handleCheck = (event) => {
		if (event.target.name === '-1') {
			return dispatch(
				setFilters({
					"-1": event.target.checked,
					"0": event.target.checked,
					"1": event.target.checked,
					"2": event.target.checked,
					"3": event.target.checked,
                    "4": event.target.checked,
				})
			);
		}

        return dispatch(setFilters({
            ...filters,
            "-1": false,
            [event.target.name]: event.target.checked
        }))
	};

	return (
		<div className={style.filterBox}>
			<span className={style.filterName}>Количество пересадок </span>
			<div className="ui checkbox">
				<input
					type="checkbox"
					className={style.customCheckbox}
					id="check1"
					name="-1"
					checked={filters["-1"]}
					onChange={handleCheck}
				/>
				<label for="check1">Все</label>
			</div>
			<div className="ui checkbox">
				<input
					type="checkbox"
					className={style.customCheckbox}
					checked={filters["0"]}
					id="check2"
					name="0"
					onChange={handleCheck}
				/>
				<label for="check2">Без пересадок</label>
			</div>
			<div className="ui checkbox">
				<input
					type="checkbox"
					className={style.customCheckbox}
					checked={filters["1"]}
					id="check3"
					name="1"
					onChange={handleCheck}
				/>
				<label for="check3">1 пересадка</label>
			</div>
			<div className="ui checkbox">
				<input
					type="checkbox"
					className={style.customCheckbox}
					checked={filters["2"]}
					id="check4"
					name="2"
					onChange={handleCheck}
				/>
				<label for="check4">2 пересадки</label>
			</div>
			<div className="ui checkbox">
				<input
					type="checkbox"
					className={style.customCheckbox}
					checked={filters["3"]}
					id="check5"
					name="3"
					onChange={handleCheck}
				/>
				<label for="check5">3 пересадки</label>
			</div>
            <div className="ui checkbox">
				<input
					type="checkbox"
					className={style.customCheckbox}
					checked={filters["4"]}
					id="check6"
					name="4"
					onChange={handleCheck}
				/>
				<label for="check6">4 и более пересадок</label>
			</div>
		</div>
	);
};

export default FilterBox;
