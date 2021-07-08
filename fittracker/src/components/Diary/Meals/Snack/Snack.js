import React, {useState, useEffect} from "react";

export const Snack = () => {

    const [snackList, setSnackList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/snack', {
            method: "GET"
        }).then((res) => res.json())
            .then((snack) => {
                setSnackList(snack.map((el) => el.name))
            })
    }, []);

    console.log(snackList);

    return (
        <div className="meal-form-container">
            <form className="meal-form">
                <form className="meal-add-ingredients">
                    <label className="meal-form--label"> select dish:
                        <select className="meals-select--light">
                            {snackList.map((el) => <option>{el}</option>)}
                        </select>
                    </label>
                    <label className="meal-form--label"> number of servings:
                        <input className="meals-input--light" placeholder="grams" type="number"/>
                    </label>
                    <button className="meal-type--addMeal">+</button>
                </form>
                <div className="meal-ingredients--list" id="select">

                </div>
            </form>
        </div>
    )
}
