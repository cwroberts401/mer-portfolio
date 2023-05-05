import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

function Menu() {
    let location = useLocation();
    console.log(location)
    if (location.pathname === '/') {return null}
    return (
    <div className="flex gap-2 justify-between m-2 mx-4">  
        <h1 className='text-2xl transition-all text-fuchsia-200 hover:text-fuchsia-100'><NavLink to="/"> Meredith Roberts </NavLink></h1>
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