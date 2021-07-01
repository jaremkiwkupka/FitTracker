import React from "react";
import "../Scores/Scores.scss";

export const Scores = ({bmiValue, ppmValue, cpmValue}) => {
    return (
        <div className="scores-wrapper">
            <p className="scores-item">BMI {bmiValue}</p>
            <p className="scores-item">PPM {ppmValue} kcal</p>
            <p className="scores-item">CPM {cpmValue} kcal</p>
        </div>
    )
}