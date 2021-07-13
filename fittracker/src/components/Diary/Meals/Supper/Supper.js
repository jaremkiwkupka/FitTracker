import React, {useState, useEffect} from "react";

export const Supper = ({handleSupperChange, selectedSupper}) => {

    const [supperList, setSupperList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/supper', {
            method: "GET"
        }).then((res) => res.json())
            .then((supper) => {
                setSupperList(supper)
            })
    }, []);

    return (
        <div className="meal-form-container">
            <div className="meal-form">
                <form className="meal-add-ingredients">
                    <label className="meal-form--label"> select dish:
                        <select className="meals-select--light" onChange={handleSupperChange}>
                            {supperList.map((supper, id) => <option value={JSON.stringify(supper)} key={supper.id}>{supper.name}</option>)}
                        </select>
                    </label>
                    <button className="meal-type--addMeal">Choose</button>
                </form>
                <div className="meal-ingredients--recipe">
                    <p>{selectedSupper.name}</p>
                    <p>calories: {selectedSupper.calories} | Proteins: {selectedSupper.protein} | Carbohydrates: {selectedSupper.carbo} | Fats: {selectedSupper.fat} </p>
                </div>
            </div>
        </div>
    )
}