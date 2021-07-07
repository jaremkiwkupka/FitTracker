import React from "react";
import "./CaloricBalance.scss";

export const CaloricBalance = () => {
    return (
        <section className="caloric-balance-container">
            <div className="caloric-balance-circle">
                <span className="caloric-balance-circle--summary">1200 kcal</span>
                <p className="caloric-balance-circle--macro">P: 30g | C: 120g | F: 20g</p>
                <p className="caloric-balance-circle--descr">remaining calories:</p>
                <p>300 kcal</p>
            </div>
        </section>
    )
}