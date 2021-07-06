import React from "react";

export const MealBox = () => {
    return (
        <div className="meal-form-container">
            <form className="meal-form">
                <label className="meal-form--label">name of the meal:
                    <input className="meals-input--light meal-name--input" placeholder="name of the meal" type="text"/>
                </label>
                <form className="meal-add-ingredients">
                    <label className="meal-form--label"> select product:
                        <select className="meals-select--light">
                            <option>very very very long name of product</option>
                            <option>banana</option>
                            <option>pear</option>
                        </select>
                    </label>
                    <label className="meal-form--label"> enter the weight:
                        <input className="meals-input--light" placeholder="grams" type="number"/>
                    </label>
                    <button className="meal-type--addMeal">+</button>
                </form>
                <div className="meal-ingredients--list">
                    container for ingredient's list
                </div>
            </form>
        </div>
    )
}