import React from "react";


const FilterBox = () => {
    return (
        <div className="filterBox">
            <div className="filterName">Количество пересадок </div>
            <div class="ui checkbox"><input type="checkbox" /><label>Выбери этот чекбокс 1</label></div>
            <div class="ui checkbox"><input type="checkbox" /><label>Выбери этот чекбокс 2</label></div>
            <div class="ui checkbox"><input type="checkbox" /><label>Выбери этот чекбокс 3</label></div>
            <div class="ui checkbox"><input type="checkbox" /><label>Выбери этот чекбокс 4</label></div>
            <div class="ui checkbox"><input type="checkbox" /><label>Выбери этот чекбокс 5</label></div>
        </div>);
}

export default FilterBox;