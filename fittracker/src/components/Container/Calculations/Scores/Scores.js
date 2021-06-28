import React from "react";
import "../Scores/Scores.scss";

export const Scores = () => {
    return (
        <div className="scores-wrapper">
            <span className="scores-item">BMI</span>
            <span className="scores-item">CPM</span>
            <span className="scores-item">PPM</span>
        </div>
    )
}