import React, {useState, useEffect} from "react";

export const Breakfast = ({handleBreakfastChange, selectedBreakfast}) => {

    const [breakfastList, setBreakfastList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/breakfast', {
            method: "GET"
        }).then((res) => res.json())
            .then((breakfast) => {
                setBreakfastList(breakfast)
            })
    }, []);

    return (
        <div className="meal-form-container">
            <div className="meal-form">
                <form className="meal-add-ingredients">
                    <label className="meal-form--label"> select dish:
                        <select className="meals-select--light" onChange={handleBreakfastChange}>
                            {breakfastList.map((breakfast, id) => <option value={JSON.stringify(breakfast)} key={breakfast.id}>{breakfast.name}</option>)}
                        </select>
                    </label>
                </form>
                <div className="meal-ingredients--recipe">
                    <p className="meal-ingredients--name">{selectedBreakfast.name}</p>
                    <p>calories: {selectedBreakfast.calories} | Proteins: {selectedBreakfast.protein} | Carbohydrates: {selectedBreakfast.carbo} | Fats: {selectedBreakfast.fat} </p>
                </div>
            </div>
        </div>
    )
}
