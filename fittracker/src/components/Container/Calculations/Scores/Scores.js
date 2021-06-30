import React from "react";
import "../Scores/Scores.scss";

export const Scores = ({bmiValue}) => {
    return (
        <div className="scores-wrapper">
            <p className="scores-item">BMI {bmiValue}</p>
            <p className="scores-item">CPM</p>
            <p className="scores-item">PPM</p>
        </div>
    )
}