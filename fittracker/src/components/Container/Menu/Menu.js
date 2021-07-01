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
            <ul className="menu-container">
                <li className="menu-item"><a className="menu-item--link">{note} Calculate your needs</a></li>
                <li className="menu-item"><a className="menu-item--link">{apple} Your diary</a></li>
                <li className="menu-item"><a className="menu-item--link">{author} About author</a></li>
            </ul>
        </>
    )
}