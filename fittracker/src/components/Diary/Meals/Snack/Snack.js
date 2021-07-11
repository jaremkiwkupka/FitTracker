import React, {useState, useEffect} from "react";

export const Snack = () => {

    const [snackList, setSnackList] = useState([]);
    const [selectedDish, setSelectedDish] = useState("");

    useEffect(() => {
        fetch('http://localhost:4000/snack', {
            method: "GET"
        }).then((res) => res.json())
            .then((snack) => {
                setSnackList(snack)
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
                            {snackList.map((snack, id) => <option value={JSON.stringify(snack)} key={snack.id}>{snack.name}</option>)}
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