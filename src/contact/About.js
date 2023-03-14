import React from "react";

function About() {
    return (
        <article className='grid md:grid-cols-4 grid-cols-2 md:gap-10 md:mx-20 gap-4 mx-4 my-10'>  
            <div className='col-span-2'>
                <img className='' src={process.env.PUBLIC_URL + '/img/headshot.jpg'} alt='Portrait of Meredith Roberts'/>
            </div>
            <div className='col-span-2'>
                <p>Meredith Roberts is a Designer, Art Director, and Textile Artist. She graduated from the School of Visual Arts with a BFA in Visual and Critial Studies. She resides in Brooklyn, NY where she enjoys long walks in the park with her rescued Greyhound Smokey.</p>
                <div class='flex-col justify-center gap-2 pt-2'>
                    <p className='text-sm text-gray-500 pt-5' >She is currently available for freelance projects.</p>
                    <a class='hover:opacity-80 border-black border px-2 rounded-lg' href='mailto:meredithlpadgett@gmail.com'>
                     contact
                    </a>
                </div>

            </div>
        </article>
    )
}

export default About;