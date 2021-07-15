import React, {useState, useEffect} from "react";
import {Menu} from "../Container/Menu/Menu";
import "./Summary.scss";

export const Summary = () => {

    const [daySummary, setDaySummary] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/saveTheDay', {
            method: "GET"
        }).then((res) => res.json())
            .then((day) => {
                setDaySummary(day)
            })
    }, []);

    return (
        <div className="container">
            <Menu />
            <div className="summary-container">
                <section className="summary-container--heading">
                    <div>
                        <h2 className="heading summary-heading">Calories Summary</h2>
                        <p className="paragraph">Below you will find a list of saved days with your caloric balance</p>
                    </div>
                </section>
                <section className="summary-content">
                    <table className="summary-table">
                        <thead>
                        <tr className="summary-table--row">
                            <th className="summary-thead--cell">date</th>
                            <th className="summary-thead--cell">calories consumed</th>
                            <th className="summary-thead--cell">proteins</th>
                            <th className="summary-thead--cell">carbs</th>
                            <th className="summary-thead--cell">fats</th>
                            <th className="summary-thead--cell">remaining calories</th>
                        </tr>
                        </thead>
                        <tbody>
                        {daySummary.map((day, id) =>
                            <tr className="summary-table--row" key={id}>
                                <td className="summary-table--cell">{daySummary[id].date}</td>
                                <td className="summary-table--cell">{daySummary[id].caloriesSum}</td>
                                <td className="summary-table--cell">{daySummary[id].proteinSum}</td>
                                <td className="summary-table--cell">{daySummary[id].carboSum}</td>
                                <td className="summary-table--cell">{daySummary[id].fatSum}</td>
                                <td className="summary-table--cell">{daySummary[id].remainingCalories}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    )
}