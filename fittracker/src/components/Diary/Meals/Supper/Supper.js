import React, {useState, useEffect} from "react";

export const Supper = () => {

    const [supperList, setSupperList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/supper', {
            method: "GET"
        }).then((res) => res.json())
            .then((supper) => {
                setSupperList(supper.map((el) => el.name))
            })
    }, []);

    console.log(supperList);

    return (
        <div className="meal-form-container">
            <form className="meal-form">
                <form className="meal-add-ingredients">
                    <label className="meal-form--label"> select dish:
                        <select className="meals-select--light">
                            {supperList.map((el) => <option>{el}</option>)}
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
