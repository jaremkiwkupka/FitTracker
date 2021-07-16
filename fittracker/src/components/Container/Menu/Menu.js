import React from "react";
import {
    Link
} from "react-router-dom";
import "./Menu.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faAppleAlt, faUserAstronaut, faFolder } from '@fortawesome/free-solid-svg-icons';


export const Menu = () => {
    const note = <FontAwesomeIcon icon={faCalculator} />
    const apple = <FontAwesomeIcon icon={faAppleAlt} />
    const summary = <FontAwesomeIcon icon={faFolder} />
    const author = <FontAwesomeIcon icon={faUserAstronaut} />

    return (
        <>
            <ul className="menu-container">
                <li className="menu-item">
                    <Link className="menu-item--link" to="/">{note} Calculate your needs</Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-item--link" to="/diary">{apple} Add meals</Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-item--link" to="/summary">{summary} Daily summary</Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-item--link" to="/author">{author} About author</Link>
                </li>
            </ul>
        </>
    )
}