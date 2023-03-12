import React from "react";
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
        }
    >
        About
    </NavLink>

    <NavLink to="/" >
        Portfolio
    </NavLink>
    </>
    )
}

export default Menu;