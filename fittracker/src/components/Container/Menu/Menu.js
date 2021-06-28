import React from "react";
import "./Menu.scss";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Menu = () => {
    return (
        <>
            <div className="menu-container">
                {/*<FontAwesomeIcon icon={["fas", "coffee"]} />*/}
                <p className="menu-item">Calculate your needs</p>
                <p className="menu-item">Your diary</p>
                <p className="menu-item">About author</p>
            </div>
        </>
    )
}