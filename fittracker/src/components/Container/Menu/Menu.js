import React from "react";
import "./Menu.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faAppleAlt, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';


export const Menu = () => {
    const note = <FontAwesomeIcon icon={faCalculator} />
    const apple = <FontAwesomeIcon icon={faAppleAlt} />
    const author = <FontAwesomeIcon icon={faUserAstronaut} />

    return (
        <>
            <div className="menu-container">
                <p className="menu-item">{note} Calculate your needs</p>
                <p className="menu-item">{apple} Your diary</p>
                <p className="menu-item">{author} About author</p>
            </div>
        </>
    )
}