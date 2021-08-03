import React from "react";
import "./CaloricBalance.scss";

export const CaloricBalance = ({caloriesSum, proteinSum, carboSum, fatSum, remainingCalories}) => {

    return (
        <section className="caloric-balance-container">
            <div className="caloric-balance-circle">
                <span className="caloric-balance-circle--summary"> {caloriesSum} kcal</span>
                <p className="caloric-balance-circle--macro">P: {proteinSum}g | C: {carboSum}g | F: {fatSum}g</p>
                <p className="caloric-balance-circle--descr">remaining calories:</p>
                <p>{remainingCalories} kcal</p>
            </div>
        </section>
    )
}