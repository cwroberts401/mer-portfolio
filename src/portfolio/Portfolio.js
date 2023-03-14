import React from "react";
import { Link } from 'react-router-dom';

function Portfolio() {

    return (
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-10 md:mx-20 gap-4 mx-4 my-10'>
            <Link className='relative col-span-2' to="/crochet_lace">
                <img className='hover:opacity-80 object-cover w-full aspect-[3/2]' src={process.env.PUBLIC_URL + '/img/01-Crochet_Lace.jpg'} alt='Crochet Lace Campaign'/>
                <h4 className='text-white absolute hover:bg-black/25 duration-200 hover:opacity-100 opacity-0 inset-0 flex justify-center items-center md:text-xl'> Crochet Lace collection for Lively </h4>
            </Link>
            <Link className='relative col-span-2' to="/modal">
                <img className='hover:opacity-80 object-cover w-full aspect-[3/2]' src={process.env.PUBLIC_URL + '/img/02-Modal.jpg'} alt='Modal Campaign'/>
                <h4 className='text-white absolute hover:bg-black/25 duration-200 hover:opacity-100 opacity-0 inset-0 flex justify-center items-center md:text-xl'> Modal collection for Lively </h4>
            </Link>
            <Link className='relative col-span-2' to="/print">
                <img className='hover:opacity-80 object-fit w-full aspect-[3/2]' src={process.env.PUBLIC_URL + '/img/03-Print.jpg'} alt='Print Designs'/>
                <h4 className='text-white absolute hover:bg-black/25 duration-200 hover:opacity-100 opacity-0 inset-0 flex justify-center items-center md:text-xl'> Print Designs </h4>
            </Link>
            <Link className='relative col-span-2' to="/palm_lace">
                <img className='hover:opacity-80 object-cover w-full aspect-[3/2]' src={process.env.PUBLIC_URL + '/img/04-Palm_Lace.jpg'} alt='Palm Lace Campaign'/>
                <h4 className='text-white absolute hover:bg-black/25 duration-200 hover:opacity-100 opacity-0 inset-0 flex justify-center items-center md:text-xl'> Palm Lace Campaign for Lively </h4>
            </Link>
            <Link className='relative col-span-2' to="/apparel">
                <img className='hover:opacity-80 object-cover w-full aspect-[3/2]' src={process.env.PUBLIC_URL + '/img/05-Apparel.jpg'} alt='apparel'/>
                <h4 className='text-white absolute hover:bg-black/25 duration-200 hover:opacity-100 opacity-0 inset-0 flex justify-center items-center md:text-xl'> Apparel Designs for Lively </h4>
            </Link>
            <Link className='relative col-span-2' to="/lounge">
                <img className='hover:opacity-80 object-cover w-full aspect-[3/2]' src={process.env.PUBLIC_URL + '/img/06-Lounge.jpg'} alt='lounge'/>
                <h4 className='text-white absolute hover:bg-black/25 duration-200 hover:opacity-100 opacity-0 inset-0 flex justify-center items-center md:text-xl'> Loungewear Designs for Lively </h4>
            </Link>
            <Link className='relative col-span-2' to="/swim">
                <img className='hover:opacity-80 object-cover w-full aspect-[3/2]' src={process.env.PUBLIC_URL + '/img/07-Swim.jpg'} alt='swim'/>
                <h4 className='text-white absolute hover:bg-black/25 duration-200 hover:opacity-100 opacity-0 inset-0 flex justify-center items-center md:text-xl'> Swim Collection for Lively </h4>
            </Link>
            <Link className='relative col-span-2' to="/accessories">
                <img className='hover:opacity-80 object-cover w-full aspect-[3/2]' src={process.env.PUBLIC_URL + '/img/08-Accessories.jpg'} alt='accessories'/>
                <h4 className='text-white absolute hover:bg-black/25 duration-200 hover:opacity-100 opacity-0 inset-0 flex justify-center items-center md:text-xl'> Accessories for Lively </h4>
            </Link>
            <Link className='relative col-span-2' to="/styling">
                <img className='hover:opacity-80 object-cover w-full aspect-[3/2]' src={process.env.PUBLIC_URL + '/img/09-Styling.png'} alt='styling'/>
                <h4 className='text-white absolute hover:bg-black/25 duration-200 hover:opacity-100 opacity-0 inset-0 flex justify-center items-center md:text-xl'> Styling Projects </h4>
            </Link>
        </div>
    )
}

export default Portfolio;