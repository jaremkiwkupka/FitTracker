import React, {useState} from "react";
import "../Meals/Meals.scss";
import {Breakfast} from "./Breakfast/Breakfast";
import {Snack} from "./Snack/Snack";
import {Dinner} from "./Dinner/Dinner";
import {Supper} from "./Supper/Supper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export const Meals = () => {
    const [showBreakfast, setShowBreakfast] = useState(false);
    const [showSnack, setShowSnack] = useState(false);
    const [showDinner, setShowDinner] = useState(false);
    const [showSupper, setShowSupper] = useState(false);

    let showBreakfastBox;
    if(showBreakfast) {
        showBreakfastBox = <Breakfast />
    }

    let showSnackBox;
    if(showSnack) {
        showSnackBox = <Snack />
    }

    let showDinnerBox;
    if(showDinner) {
        showDinnerBox = <Dinner />
    }

    let showSupperBox;
    if(showSupper) {
        showSupperBox = <Supper />
    }

    return (
        <>
            <div className="meals-container">
                <div className="meal-type">
                    <h4 className="meal-type--heading">Breakfast</h4>
                    <span className="meal-type--addMeal">
                        <FontAwesomeIcon
                            icon={faPlus}
                            onClick={() => setShowBreakfast(!showBreakfast)}
                        />
                    </span>
                </div>
                {showBreakfastBox}
                <div className="meal-type">
                    <h4 className="meal-type--heading">Snack</h4>
                    <span className="meal-type--addMeal">
                        <FontAwesomeIcon
                            icon={faPlus}
                            onClick={() => setShowSnack(!showSnack)}
                        />
                    </span>
                </div>
                {showSnackBox}
                <div className="meal-type">
                    <h4 className="meal-type--heading">Dinner</h4>
                    <span className="meal-type--addMeal">
                        <FontAwesomeIcon
                            icon={faPlus}
                            onClick={() => setShowDinner(!showDinner)}
                        />
                    </span>
                </div>
                {showDinnerBox}
                <div className="meal-type">
                    <h4 className="meal-type--heading">Supper</h4>
                    <span className="meal-type--addMeal">
                        <FontAwesomeIcon
                            icon={faPlus}
                            onClick={() => setShowSupper(!showSupper)}
                        />
                    </span>
                </div>
                {showSupperBox}
            </div>
        </>
    )
}