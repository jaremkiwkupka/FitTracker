import React from "react";
import {Form} from "./Form/Form";
import {Scores} from "./Scores/Scores";

export const Calculations = () => {
    return (
        <section className="main-container">
            <Form />
            <div className="calculations-container">
                <Scores />
            </div>
        </section>
    )
}