import React, {useState, useEffect} from "react";

export const Dinner = ({handleDinnerChange, selectedDinner}) => {

    const [dinnerList, setDinnerList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/dinner', {
            method: "GET"
        }).then((res) => res.json())
            .then((dinner) => {
                setDinnerList(dinner)
            })
    }, []);


    return (
        <div className="meal-form-container">
            <div className="meal-form">
                <form className="meal-add-ingredients">
                    <label className="meal-form--label"> select dish:
                        <select className="meals-select--light" onChange={handleDinnerChange}>
                            {dinnerList.map((dinner, id) => <option value={JSON.stringify(dinner)} key={dinner.id}>{dinner.name}</option>)}
                        </select>
                    </label>
                    <button className="meal-type--addMeal">+</button>
                </form>
                <div className="meal-ingredients--recipe">
                    <p>{selectedDinner.name}</p>
                    <p>calories: {selectedDinner.calories} | Proteins: {selectedDinner.protein} | Carbohydrates: {selectedDinner.carbo} | Fats: {selectedDinner.fat} </p>
                </div>
            </div>
        </div>
    )
}