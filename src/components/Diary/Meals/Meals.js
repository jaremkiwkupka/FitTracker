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
                          handleCount,
                          handleSaveDay
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
                <div className="meals-btns">
                    <button className="caloric-balance-btn" onClick={handleCount}>Count</button>
                    <button className="caloric-balance-btn" onClick={handleSaveDay}>Save</button>
                </div>
                <div className="meal-type">
                    <h4 className="meal-type--heading breakfast-heading">Breakfast</h4>
                    <div className="meal-type-selected">
                        <p className="meal-type-selected--descr">{selectedBreakfast.name}</p>
                        <p className="meal-type-selected--descr">{selectedBreakfast.calories} kcal</p>
                    </div>
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
                    <div className="meal-type-selected">
                        <p className="meal-type-selected--descr">{selectedSnack.name}</p>
                        <p className="meal-type-selected--descr">{selectedSnack.calories} kcal</p>
                    </div>
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
                    <div className="meal-type-selected">
                        <p className="meal-type-selected--descr">{selectedDinner.name}</p>
                        <p className="meal-type-selected--descr">{selectedDinner.calories} kcal</p>
                    </div>
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
                    <div className="meal-type-selected">
                        <p className="meal-type-selected--descr">{selectedSupper.name}</p>
                        <p className="meal-type-selected--descr">{selectedSupper.calories} kcal</p>
                    </div>
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