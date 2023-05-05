import React from "react";

function About() {
    return (
        <article className='grid md:grid-cols-4 grid-cols-2 md:gap-10 md:mx-20 gap-4 mx-4 my-10'>  
            <div className='col-span-2'>
                <img src={process.env.PUBLIC_URL + '/img/headshot.jpg'} alt='Portrait of Meredith Roberts'/>
            </div>
            <div className='col-span-2'>
                <p>Meredith Roberts is a Designer, Art Director, and Textile Artist. She graduated from the School of Visual Arts with a BFA in Visual and Critial Studies. She resides in Brooklyn, NY where she enjoys long walks in the park with her rescued Greyhound Smokey.</p>
                <div className='flex text-center md:text-left flex-col items-center md:items-start justify-center gap-2 pt-2'>
                    <p className='text-sm text-gray-500 pt-5' >She is currently available for freelance projects.</p>
                    <a className='text-xs text-center w-[80px] border px-3 py-px border-gray-500 hover:border-gray-900 rounded text-gray-500 hover:text-gray-900' href='mailto:meredithlpadgett@gmail.com'>
                     contact
                    </a>
                </div>

            </div>
        </article>
    )
}

export default About;