import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

function Menu() {
    let location = useLocation();
    if (location.pathname === '/') {return null}
    return (
    <div className="flex gap-2 justify-between m-2 mx-4">  
        <h1 className='text-2xl transition-all text-fuchsia-200 hover:text-fuchsia-100'><NavLink to="/portfolio"> Meredith Roberts </NavLink></h1>
        <nav className='flex gap-4'>
            <NavLink to="/about" className='hover:text-gray-500'>
                About
            </NavLink>
            <NavLink to="/design" className='hover:text-gray-500'>
                Design
            </NavLink>
            <NavLink to="/art-direction" className='hover:text-gray-500'>
                Art Direction
            </NavLink>
        </nav>

    </div>
    )
}

export default Menu;