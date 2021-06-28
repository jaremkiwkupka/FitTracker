import React from "react";
import "./Container.scss";
import {Menu} from "./Menu/Menu";
import {Form} from "./Calculations/Form/Form";

export const Container = () => {
    return (
        <div className="container">
            <Menu />
            <Form />
        </div>
    )
}