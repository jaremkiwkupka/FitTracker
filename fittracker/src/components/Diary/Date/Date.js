import React, {useState} from "react";
import "../Date/Date.scss";

export const Date = () => {
    const [date, setDate] = useState("Select date");

    return (
        <div className="diary-date">
            <h3 className="diary-date--heading">{date}</h3>

            <input className="diary-date--input" type="date" id="calendar" name="calendar"
                   onChange={e => setDate(e.target.value)}
                   value="2021-07-06"
                   min="2021-01-01" max="2025-12-31"/>
        </div>
    )
}