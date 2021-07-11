import React, {useState, useEffect} from "react";

export const Breakfast = () => {

    const [breakfastList, setBreakfastList] = useState([]);
    const [selectedDish, setSelectedDish] = useState("");

    useEffect(() => {
        fetch('http://localhost:4000/breakfast', {
            method: "GET"
        }).then((res) => res.json())
            .then((breakfast) => {
                setBreakfastList(breakfast)
            })
    }, []);

    const handleChange = (e) => {
        setSelectedDish(JSON.parse(e.target.value));
    }

    return (
        <div className="meal-form-container">
            <div className="meal-form">
                <form className="meal-add-ingredients">
                    <label className="meal-form--label"> select dish:
                        <select className="meals-select--light" onChange={handleChange}>
                            {breakfastList.map((breakfast, id) => <option value={JSON.stringify(breakfast)} key={breakfast.id}>{breakfast.name}</option>)}
                        </select>
                    </label>
                    <label className="meal-form--label"> number of servings:
                        <input className="meals-input--light" placeholder="grams" type="number"/>
                    </label>
                    <button className="meal-type--addMeal">+</button>
                </form>
                <div className="meal-ingredients--recipe">
                    <p>{selectedDish.name}</p>
                    <p>calories: {selectedDish.calories} | Proteins: {selectedDish.protein} | Carbohydrates: {selectedDish.carbo} | Fats: {selectedDish.fat} </p>
                </div>
            </div>
        </div>
    )
}
