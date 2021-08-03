import React from "react";
import "./TopBar.scss";
import {Logo} from "./Logo/Logo";
import "./Logo/Logo.scss";
import {User} from "./User/User";
import "./User/User.scss";

export const TopBar = () => {
    return (
        <div className = "top-bar">
            <Logo />
            <User />
        </div>
    )
}