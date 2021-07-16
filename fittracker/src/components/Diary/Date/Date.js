import React from "react";
import "../Date/Date.scss";

export const Date = ({date, setDate}) => {

    const handleChange = (e) => {
        setDate(e.target.value)
    }

    return (
        <div className="diary-date">
            <h3 className="diary-date--heading">{date}</h3>

            <input className="diary-date--input"
                   type="date"
                   id="calendar"
                   name="calendar"
                   onChange={handleChange}
                   min="2021-01-01" max="2025-12-31"/>
        </div>
    )
}