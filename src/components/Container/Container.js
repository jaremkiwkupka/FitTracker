import React from "react";
import "./Container.scss";
import {Menu} from "./Menu/Menu";
import {Calculations} from "./Calculations/Calculations";

export const Container = () => {

    return (
        <>
            <div className="container">
                <Menu />
                <Calculations />
            </div>
        </>
    )
}