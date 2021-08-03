import React from "react";
import avatar from "../../../assets/avatar.png"

export const User = () => {
    return (
        <>
            <div className="user-wrapper">
                <p className="user-name">Hello, Charlotte</p>
                <img className="user-avatar" alt="avatar" src={avatar} />
            </div>
        </>
    )
}