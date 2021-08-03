import React from "react";
import "./CaloricContentOfDiet.scss";

export const CaloricContentOfDiet = ({caloricContent}) => {

    return (
        <div className="caloricContent-wrapper">
            <p className="caloricContent-text">To loose weight you need to eat:</p>
            <span className="caloricContent-value">{` ${caloricContent} kcal`}</span>
        </div>
    )
}