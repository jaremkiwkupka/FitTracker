import React from "react";
import {Menu} from "../Container/Menu/Menu";
import "../../styles/_layout.scss";
import "../Diary/Diary.scss";
import {Date} from "./Date/Date";
import {Meals} from "./Meals/Meals";
import {CaloricBalance} from "./CaloricBalance/CaloricBalance";


export const Diary = () => {
    return (
        <div className="container">
            <Menu />
            <div className="diary-container">
                <section className="diary-container--heading">
                    <div>
                        <h2 className="heading diary-heading">Your Diary</h2>
                        <p className="paragraph">select date and add your meals</p>
                    </div>
                    <Date />
                </section>
                <CaloricBalance/>
                <Meals />
            </div>
        </div>
    );
}