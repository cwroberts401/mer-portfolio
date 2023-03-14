import React from "react";
import { useState } from 'react';

function Modal() {
    const [enlarge, setEnlarge] = useState(null)

    const handleClick = (id) => {
        setEnlarge(prevState => {
            prevState === null? setEnlarge(id): setEnlarge(null);
        });
        console.log(enlarge)
    }


    return (
        <div className='grid xl:grid-col-12 md:grid-cols-8 grid-cols-4 md:gap-4 md:mx-20 gap-4 mx-4 my-10 items-center'>
            <div className='col-span-3'>
                <h2 className='text-2xl'>this is the title of the page</h2>
                <p> this is the longer description that can go below explaing the project </p>
            </div>
            <div className={`${enlarge === 0?'col-span-8':'col-span-5'}`}>
                <img className='' src={process.env.PUBLIC_URL + '/modal/00.jpg'} alt='Crochet Lace Campaign'/>
                <button onClick={() => handleClick(0)} className={`${enlarge === 0?'rotate-45':'rotate-0'}`}>+</button>
            </div>
            <div className={`${enlarge === 1?'col-span-8':'col-span-5'}`}>
                 <img className='' src={process.env.PUBLIC_URL + '/modal/01.png'} alt='Crochet Lace Campaign'/>
                 <button onClick={() => handleClick(1)} className={`${enlarge === 1?'rotate-45':'rotate-0'}`}>+</button>
            </div>
            <img className='col-span-3 object-cover w-full' src={process.env.PUBLIC_URL + '/modal/03.png'} alt='Crochet Lace Campaign'/>
            <img className='col-span-2 object-cover w-full' src={process.env.PUBLIC_URL + '/modal/04.png'} alt='Crochet Lace Campaign'/>
            <div className={`${enlarge === 2?'col-span-8':'col-span-6'}`}>
                 <img className='' src={process.env.PUBLIC_URL + '/modal/02.png'} alt='Crochet Lace Campaign'/>
                 <button onClick={() => handleClick(2)} className={`${enlarge === 2?'rotate-45':'rotate-0'}`}>+</button>
            </div>
            <img className='col-span-2 object-cover w-full' src={process.env.PUBLIC_URL + '/modal/05.jpg'} alt='Crochet Lace Campaign'/>
        </div>
    )
}

export default Modal