import React from "react";
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
    <div className="flex gap-2 justify-between m-2">  
        <h1 className='text-2xl'> Meredith Roberts </h1>
        <nav className='flex gap-2'>
            <NavLink to="/about" >
                About
            </NavLink>
            <NavLink to="/mer-portfolio" >
                Portfolio
            </NavLink>
        </nav>

    </div>
    )
}

export default Menu;