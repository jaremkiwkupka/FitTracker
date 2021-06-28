import React from "react";
import "./Calculations.scss";
import {Form} from "./Form/Form";
import {Scores} from "./Scores/Scores";
import {CaloricContentOfDiet} from "./CaloricContentOfDiet/CaloricContentOfDiet";

export const Calculations = () => {
    return (
        <section className="main-container">
            <Form />
            <div className="calculations-container">
                <Scores />
                <CaloricContentOfDiet />
            </div>
        </section>
    )
}