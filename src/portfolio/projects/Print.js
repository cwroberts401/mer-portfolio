import React from "react";
import { useState } from "react";
import Back from "../../layout/BackButton";

const photos = [{photoURL:'print-00.jpg', alt:'first print design', id:'1'},{photoURL:'print-01.jpg', alt:'print design', id:'2'},{photoURL:'print-02.jpg', alt:'print design', id:'3'},{photoURL:'print-04.jpg', alt:'print design', id:'5'},{photoURL:'print-05.jpg', alt:'print design', id:'6'},]

function Print() {
    const [enlarge, setEnlarge] = useState(null)

    const handleClick = (e) => {
        
        setEnlarge(enlarge === null || enlarge !== e.target.id? e.target.id: null)
    }

    const listImages = photos.map(photo => 
        <div key={photo.id} className={`flex flex-col transition-all ${enlarge === photo.id ?'-mx-10 col-span-8':'col-span-4'}`}>
            <img className='' src={process.env.PUBLIC_URL + '/print/' + photo.photoURL} alt={photo.alt}/>
            <button id={photo.id} onClick={handleClick} className={`invisible md:visible -mt-1 mr-6 self-end ${enlarge === photo.id?'rotate-45':'rotate-0'}`}>+</button>
        </div>
    
    );

    return (
        <div className='grid xl:grid-col-12 md:grid-cols-8 grid-cols-4 md:gap-4 md:mx-20 gap-4 mx-4 my-10'>
            <div className='md:col-span-8 col-span-4 text-center'>
                <h2 className='text-2xl'>Print Sourcing & Development</h2>
                <p className='text-sm'>Led sourcing of seasonal prints for swimwear, lingerie, and loungewear. Responsible for scaling, color edits, and final approval for production.</p>
            </div>
            {listImages}
            < Back />
        </div>
    )
}

export default Print