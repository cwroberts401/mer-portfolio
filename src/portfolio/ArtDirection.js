import React from "react";
import { Link } from 'react-router-dom';

const pages = [
{"id": 1, "href": "/trend_analysis", "imgURL": "/trend-analysis/00.png", "imgAlt": 'Trend Analysis', "title": "Trend Analysis '24"},
{"id": 2, "href": "/spring", "imgURL": "/spring/01.png", "imgAlt": 'Spring Campaign', "title": "Spring '23"},
{"id": 3, "href": "/summer", "imgURL": "/summer/00.png", "imgAlt": 'Summer Campaign', "title": "Summer '23"},
{"id": 4, "href": "/fall", "imgURL": "/fall/00.png", "imgAlt": 'Fall Campaign', "title": "Fall '23"},
{"id": 5, "href": "/holiday", "imgURL": "/holiday/00.png", "imgAlt": 'Holiday Campaign', "title": "Holiday '23"},
]

function ArtDirection() {

    const displayPages = pages.map((page) => {
        return (
            <Link key={page.id} className='relative col-span-2' to={page.href}>
                <img className='hover:opacity-80 object-cover w-full aspect-[3/2]' src={process.env.PUBLIC_URL + page.imgURL} alt={page.imgAlt}/>
                <h4 className='text-white absolute hover:bg-black/25 duration-200 hover:opacity-100 opacity-0 inset-0 flex justify-center items-center md:text-xl'>{page.title}</h4>
            </Link>
        )
    })

    return (
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-10 md:mx-20 gap-4 mx-4 my-10'>
            {displayPages}
        </div>
    )
}

export default ArtDirection;