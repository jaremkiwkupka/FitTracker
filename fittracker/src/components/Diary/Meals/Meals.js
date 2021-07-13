import React, {useState} from "react";
import "../Meals/Meals.scss";
import {Breakfast} from "./Breakfast/Breakfast";
import {Snack} from "./Snack/Snack";
import {Dinner} from "./Dinner/Dinner";
import {Supper} from "./Supper/Supper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export const Meals = ({
                          handleBreakfastChange,
                          selectedBreakfast,
                          handleSnackChange,
                          selectedSnack,
                          handleDinnerChange,
                          selectedDinner,
                          handleSupperChange,
                          selectedSupper,
                          handleCount
                      }) => {
    const [showBreakfast, setShowBreakfast] = useState(false);
    const [showSnack, setShowSnack] = useState(false);
    const [showDinner, setShowDinner] = useState(false);
    const [showSupper, setShowSupper] = useState(false);


    let showBreakfastBox;
    if(showBreakfast) {
        showBreakfastBox = <Breakfast handleBreakfastChange={handleBreakfastChange} selectedBreakfast={selectedBreakfast}/>
    }

    let showSnackBox;
    if(showSnack) {
        showSnackBox = <Snack handleSnackChange={handleSnackChange} selectedSnack={selectedSnack}/>
    }

    let showDinnerBox;
    if(showDinner) {
        showDinnerBox = <Dinner handleDinnerChange={handleDinnerChange} selectedDinner={selectedDinner}/>
    }

    let showSupperBox;
    if(showSupper) {
        showSupperBox = <Supper handleSupperChange={handleSupperChange} selectedSupper={selectedSupper}/>
    }

    return (
        <>
            <div className="meals-container">
                <div>
                    <button onClick={handleCount}>Count</button>
                    <button>Save</button>
                </div>
                <div className="meal-type">
                    <h4 className="meal-type--heading">Breakfast</h4>
                    <p>{selectedBreakfast.name}</p>
                    <p>{selectedBreakfast.calories} kcal</p>
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
                    <p>{selectedSnack.name}</p>
                    <p>{selectedSnack.calories} kcal</p>
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
                    <p>{selectedDinner.name}</p>
                    <p>{selectedDinner.calories} kcal</p>
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
                    <p>{selectedSupper.name}</p>
                    <p>{selectedSupper.calories} kcal</p>
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