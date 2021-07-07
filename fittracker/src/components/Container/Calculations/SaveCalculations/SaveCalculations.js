import React from "react";
import "./SaveCalculations.scss";

export const SaveCalculations = ({userCalorieNeeds}) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:4000/caloricNeeds', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userCalorieNeeds),
        })
            .then((res) => res.json());

        alert("Your data has been saved!");
    }


    return (
        <div className="save-calculations-wrapper">
            <button className="save-calculations" onClick={handleSubmit}>Save</button>
        </div>
    )
}