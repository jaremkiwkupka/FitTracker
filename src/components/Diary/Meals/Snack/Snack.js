import React, {useState, useEffect} from "react";

export const Snack = ({handleSnackChange, selectedSnack}) => {

    const [snackList, setSnackList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/snack', {
            method: "GET"
        }).then((res) => res.json())
            .then((snack) => {
                setSnackList(snack)
            })
    }, []);


    return (
        <div className="meal-form-container">
            <div className="meal-form">
                <form className="meal-add-ingredients">
                    <label className="meal-form--label"> select dish:
                        <select className="meals-select--light" onChange={handleSnackChange}>
                            {snackList.map((snack, id) => <option value={JSON.stringify(snack)} key={snack.id}>{snack.name}</option>)}
                        </select>
                    </label>
                </form>
                <div className="meal-ingredients--recipe">
                    <p  className="meal-ingredients--name">{selectedSnack.name}</p>
                    <p>calories: {selectedSnack.calories} | Proteins: {selectedSnack.protein} | Carbohydrates: {selectedSnack.carbo} | Fats: {selectedSnack.fat} </p>
                </div>
            </div>
        </div>
    )
}