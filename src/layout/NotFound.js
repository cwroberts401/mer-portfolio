import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
            <span className='text-sm'>Sorry, page not found! Maybe you want to go <Link className='text-gray-500 hover:hover:opacity-80' to='/'>home</Link>?</span>
    </div>
    )
}

export default NotFound