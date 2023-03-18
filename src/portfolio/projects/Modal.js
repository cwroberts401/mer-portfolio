import React from "react";
import { useState } from 'react';


function Modal() {
    const [enlarge, setEnlarge] = useState(null)

    const handleClick = (e) => {
        
        setEnlarge(enlarge === null || enlarge !== e.target.id? e.target.id: null)
    }


    return (
        <div className='justify-center items-center grid xl:grid-col-12 md:grid-cols-8 grid-cols-4 md:gap-4 md:mx-20 gap-4 mx-4 my-10'>
            <div className='col-span-8 text-center'>
                <h2 className='text-2xl'>Modal Collection for Lively</h2>
                <p className='text-sm'> this is the longer description that can go below explaing the project </p>
            </div>
            <div className={`relative transition-all ${enlarge === '0' ?'col-span-8':'col-start-2 col-span-6'}`}>
                <img className='' src={process.env.PUBLIC_URL + '/modal/modal-01.jpg'} alt='Crochet Lace Campaign'/>
                <button id='0' onClick={handleClick} className={`text-white text-xl absolute bottom-10 left-4 ${enlarge === '0'?'rotate-45':'rotate-0'}`}>+</button>
            </div>
            <div className={`${enlarge === '1' ?'col-span-8':'col-start-2 col-span-6'}`}>
                 <img className='' src={process.env.PUBLIC_URL + '/modal/modal-02.jpg'} alt='Crochet Lace Campaign'/>
                 <button id='1' onClick={handleClick} className={`${enlarge === '1'?'rotate-45':'rotate-0'}`}>+</button>
            </div>
        </div>
    )
}

export default Modal