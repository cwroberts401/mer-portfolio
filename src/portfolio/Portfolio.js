import React from "react";
import { Link } from 'react-router-dom';

const pages = [
{"id": 1, "href": "/lounge", "imgURL": "/img/06-Lounge.jpg", "imgAlt": 'Lounge Campaign', "title": "Loungewear for Lively"},
{"id": 2, "href": "/swim", "imgURL": "/img/07-Swim.jpg", "imgAlt": 'Swim Campaign', "title": "Swimwear for Lively"},
{"id": 3, "href": "/crochet_lace", "imgURL": "/img/01-Crochet_Lace.jpg", "imgAlt": 'Crochet Lace Campaign', "title": "Crochet Lace for Lively"},
{"id": 4, "href": "/solutions", "imgURL": "/img/solutions_header.jpg", "imgAlt": 'Style Solutions Campaign', "title": "Style Solutions for Lively"},
{"id": 5, "href": "/dot_mesh", "imgURL": "/img/00_header.jpg", "imgAlt": 'Dot Mesh Campaign', "title": "Dot Mesh for Lively"},
{"id": 6, "href": "/modal", "imgURL": "/img/02-Modal.jpg", "imgAlt": 'Modal Campaign', "title": "Modal for Lively"},
{"id": 7, "href": "/accessories", "imgURL": "/img/08-Accessories.jpg", "imgAlt": 'Accessories Campaign', "title": "Accessories for Lively"},
{"id": 8, "href": "/print", "imgURL": "/img/03-Print.jpg", "imgAlt": 'Print Campaign', "title": "Print Sourcing & Development"},
]

function Portfolio() {

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

export default Portfolio;