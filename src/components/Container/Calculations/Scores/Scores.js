import React from "react";
import "../Scores/Scores.scss";

export const Scores = ({bmiValue, ppmValue, cpmValue}) => {
    return (
        <div className="scores-wrapper">
            <div className="scores-item">
                <p className="scores-item--elem">BMI</p>
                <p className="scores-item--elem">{bmiValue}</p>
            </div>
            <div className="scores-item">
                <p className="scores-item--elem">PPM</p>
                <p className="scores-item--elem">{ppmValue} kcal</p>
            </div>
            <div className="scores-item">
                <p className="scores-item--elem">CPM</p>
                <p className="scores-item--elem">{cpmValue} kcal</p>
            </div>
        </div>
    )
}