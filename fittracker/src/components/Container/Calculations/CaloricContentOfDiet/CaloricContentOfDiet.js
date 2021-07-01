import React, {useState} from "react";
import "./CaloricContentOfDiet.scss";

export const CaloricContentOfDiet = ({caloricContent}) => {

    return (
        <div className="caloricContent-wrapper">
            <p className="caloricContent-text">Your recommended caloric intake for the diet:</p>
            <span className="caloricContent-value">{` ${caloricContent} kcal`}</span>
        </div>
    )
}