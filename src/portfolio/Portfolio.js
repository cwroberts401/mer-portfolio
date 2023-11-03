import React from "react";
import { Link } from 'react-router-dom';

const pages = [
{"id": 1, "href": "/design", "imgURL": "/img/01-Crochet_Lace.jpg", "imgAlt": 'Design Work', "title": "Design"},
{"id": 2, "href": "/art-direction", "imgURL": "/fall/00.png", "imgAlt": 'Art Direction Work', "title": "Art Direction"},
]

function Portfolio() {

    const displayPages = pages.map((page) => {
        return (
            <Link key={page.id} className='relative col-span-2' to={page.href}>
                <img className='hover:opacity-80 object-cover w-full aspect-[3/2]' src={process.env.PUBLIC_URL + page.imgURL} alt={page.imgAlt}/>
                <h4 className='text-white font-bold absolute bg-black/50 duration-200 opacity-100 inset-0 flex justify-center items-center md:text-6xl'>{page.title}</h4>
            </Link>
        )
    })

    return (
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-10 md:mx-20 gap-4 mx-4 my-10'>
            {displayPages}
        </div>
    )
}

export default Portfolio;