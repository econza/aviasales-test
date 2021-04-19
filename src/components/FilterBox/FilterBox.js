import React from "react";
import style from "./FilterBox.module.css"

const FilterBox = () => {
    return (
        <div className="filterBox">
            <span className="filterName">Количество пересадок </span>
            <div className="ui checkbox">
                <input type="checkbox" className={style.customCheckbox} id="check1" name="happy" value="yes" />
                <label for="check1">Все</label>
            </div>
            <div className="ui checkbox">
                <input type="checkbox" className={style.customCheckbox} id="check2" name="happy" value="yes" />
                <label for="check2">Без пересадок</label>
            </div>
            <div className="ui checkbox">
                <input type="checkbox" className={style.customCheckbox} id="check3" name="happy" value="yes" />
                <label for="check3">1 пересадка</label>
            </div>
            <div className="ui checkbox">
                <input type="checkbox" className={style.customCheckbox} id="check4" name="happy" value="yes" />
                <label for="check4">2 пересадки</label>
            </div>
            <div className="ui checkbox">
                <input type="checkbox" className={style.customCheckbox} id="check5" name="happy" value="yes" />
                <label for="check5">3 пересадки</label>
            </div>


        </div>);
}

export default FilterBox;